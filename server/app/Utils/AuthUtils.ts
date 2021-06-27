import { USERS } from "../constants/constants"

export const userMatch = (username: string, password: string)=>{
  return USERS.find(u => u.username === username && u.password === password)
};
