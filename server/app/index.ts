import express from 'express';
import { SERVER_PORT } from './constants/constants';
import { getUserCourses } from './Utils/DataUtils';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/users', (req, res) => {
 res.json(userDataJson);
});

app.get('/enrolments', (req, res) => {
  const { userID }: { userID?: number } = req.body;

  if (userID) {
    const coursesEnrolledToTheUser = getUserCourses(userID);
  
    res.json(coursesEnrolledToTheUser);
  }
  res.status(400).send('A user ID is needed to get the courses enrolled to the user.')
})

app.get('/pages', (req, res) => {
  res.json(pagesDataJson);
})

app.get('/courses', (req, res) => {
  res.json(coursesDataJson);
})

app.listen(SERVER_PORT, () => {
  console.log(`Server app for GCF running on port ${SERVER_PORT}!`)
})