import { coursesDataJson, enrolmentsDataJson, userDataJson } from "../../data/data";

export const getUserData = (userID: number) => {
  const { users } = userDataJson;
  const userFound = users.find(({ id }) => userID === id);

  return userFound || null;
};

export const getCourseData = (courseID: string) => {
  const { courses } = coursesDataJson;
  const courseFound = courses.find(({ id }) => id === courseID);

  return courseFound || null;
};

export const getUserCourses = (userID: number) => {
  const { enrollments } = enrolmentsDataJson;
  const coursesEnrolled = enrollments.filter(({ user: enrollmentUserID }) => enrollmentUserID === userID);
  const mapCourseInfo = coursesEnrolled.map(({ course: enrolledCourseID, status }) => {
    const courseInfo = getCourseData(enrolledCourseID);

    if (!courseInfo) return null;

    return {
      ...courseInfo,
      status,
    }
  })

  return mapCourseInfo;
};