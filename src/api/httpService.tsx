import axios from "axios";
import { POST_LIST_URL, USER_LIST_URL } from "../constants/urls";
import { UserModel } from "./models/UserModel";

export const getUsersList = async () => {
  const response = await axios.get(USER_LIST_URL);
  return response.data;
};

export const getPostsList = async () => {
  const response = await axios.get(POST_LIST_URL);
  return response.data;
};

type Inputs = {
  firstName: string;
  lastName: string;
};

export const putUserInfo = async (user: UserModel, data: Inputs) => {
  const URL = `${USER_LIST_URL}/${user.id}`;
  const URL_DATA = {
    ...user,
    name: `${data.firstName} ${data.lastName}`,
  };
  const response = await axios.put(URL, URL_DATA);
  return response.data;
};
