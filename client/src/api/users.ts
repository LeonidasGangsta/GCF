import { apiHelper } from "./apiHelper";

export const getUserData = async (userID: number) => {
  try {
    const { data: userData } = await apiHelper().get('/user', {
      params: {
        userID,
      },
    });
    
    return userData;
  } catch (error) {
    throw error;
  }
};

export const getUserEnrolments = async (userID: number) => {
  try {
    const { data } = await apiHelper().get('/enrolments', {
      params: {
        userID,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const authUser = async (username: string, password:String) => {
  try {
    const { data: userData } = await apiHelper().post('/auth', {
      data: {
        username,
        password,
      },
    })
    
    return userData;
  } catch (error) {
    throw error;
  }
};