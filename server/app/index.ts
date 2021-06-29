import express from 'express';
import { SERVER_PORT } from './constants/constants';
import { coursesDataJson, pagesDataJson } from '../data/data';
import { getCoursesToEnrol, getUserCourses, getUserData } from './Utils/DataUtils';
import { userMatch } from './Utils/AuthUtils';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*')
  next();
})


app.get('/user', (req, res) => {
  const errorToThrow = () => res.status(400).send('A user ID is needed to get the user information.');
  const { userID }: { userID?: string } = req.query;

  if (userID) {
    const userIDParsed = typeof userID === 'number' ? userID : Number(userID);
    const userFound = getUserData(userIDParsed);

    return userFound ? res.json(userFound) : errorToThrow();
  }

  return errorToThrow();
});

app.get('/enrolments', (req, res) => {
  const { userID }: { userID?: string } = req.query;

  if (userID) {
    const userIDParsed = typeof userID === 'number' ? userID : Number(userID);
    const coursesEnrolledToTheUser = getUserCourses(userIDParsed);
  
    return res.json(coursesEnrolledToTheUser);
  }

  return res.status(400).send('A user ID is needed to get the courses enrolled to the user.')
});

app.get('/pages', (req, res) => {
  res.json(pagesDataJson);
});

app.get('/courses', (req, res) => {
  const { userID } = req.query;

  if (userID) {
    const userIDParsed = typeof userID === 'number' ? userID : Number(userID);
    const coursesToEnrol = getCoursesToEnrol(userIDParsed);
  
    return res.json(coursesToEnrol);
  }

  return res.status(400).send('A user ID is needed to get the courses.')
});

app.post("/auth", (req, res)=>{
  const { username, password } = req.body.data;
  if(!username || !password){
    res.status(400).send("Username or password not sent")
  }
  const user = userMatch(username,password);
  if(!user){
    res.status(400).send("User not found")
  }
  const userInfo = getUserData(user.id)
  return res.json(userInfo)
});

app.listen(SERVER_PORT, () => {
  console.log(`Server app for GCF running on port ${SERVER_PORT}!`)
});
