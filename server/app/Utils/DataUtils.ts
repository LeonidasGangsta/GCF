import { coursesDataJson, enrollmentsDataJson, userDataJson } from "../../data/data";

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
  const { enrollments } = enrollmentsDataJson;
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

export const getCoursesToEnrol = (userID: number) => {
  const { courses } = coursesDataJson;
  const userCourses = getUserCourses(userID);

  const allCoursesEnrolledIds = userCourses.map((userCourse) => userCourse?.id) || [];
  const coursesToEnrol = courses.filter(({ id }) => !allCoursesEnrolledIds.includes(id));
  const coursesToEnrolMapped = coursesToEnrol.map((course) => ({
    ...course,
    status: '',
  }))

  return coursesToEnrolMapped;
};