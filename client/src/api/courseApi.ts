import { apiHelper } from "./apiHelper";

export const getCoursePage = async (courseID: string, page?: number) => {
  try {
    const { data } = await apiHelper().get('/pages', {
      params: {
        courseID,
        page: page || 1,
      }
    })

    return data;
  } catch (error) {
    throw error;
  }
};