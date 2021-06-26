export type UserJSONDataType = {
  users: {
    id: number,
    firstname: string,
    lastname: string,
  }[]
};

export type EnrollmentsJSONDataType = {
  enrollments: {
    course: string,
    user: number,
    status: 'passed' | 'failed',
  }[]
}

export type CoursesJSONDataType = {
  courses: {
    id: string,
    name: string,
    description: string,
  }[]
}

export type PagesJSONDataType = {
  pages: {
    id: number,
    course: string,
    content: string,
  }[]
}