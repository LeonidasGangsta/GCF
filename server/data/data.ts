import {
  CoursesJSONDataType,
  EnrollmentsJSONDataType,
  PagesJSONDataType,
  UserJSONDataType,
} from '../app/types/types';

export const userDataJson: UserJSONDataType = require('./users.json');
export const enrollmentsDataJson: EnrollmentsJSONDataType = require('./enrollments.json');
export const coursesDataJson: CoursesJSONDataType = require('./courses.json');
export const pagesDataJson: PagesJSONDataType = require('./pages.json');