import { apiHelper } from "./apiHelper";

export const getUserData = async (userID: number) => {
  try {
    const { data: userData } = await apiHelper().get('/user', {
      params: {
        userID,
      },
    })
    
    return userData;
  } catch (error) {
    throw error;
  }
};