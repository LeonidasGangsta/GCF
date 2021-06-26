import { coursesDataJson, enrolmentsDataJson } from "../data/data";

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