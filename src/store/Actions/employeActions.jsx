import {
  saveUser,
  removeUser,
  sendmail,
  employsigninerror,
  employsignuperror,
} from "../Reducers/employeSlice";
import axios from "../../utils/axios";
import { getBearerToken } from "../../utils/auth";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current", {}, getBearerToken());
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncemployesignup = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signup", user);
    localStorage.setItem("token", data.token);
    dispatch(asynccurrentemploye(data.student));
  } catch (error) {
    dispatch(employsignuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncemployesignin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signin", user);
    localStorage.setItem("token", data.token);
    dispatch(asynccurrentemploye(data.student));
  } catch (error) {
    dispatch(employsigninerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncremoveEmploye = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/signout", {}, getBearerToken());
    dispatch(removeUser());
  } catch (error) {
    //(error.response.data);
  }
};

export const employeupdate = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/employeupdate/${id}`, formData, getBearerToken()); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const deleteinternship = (id) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete/internship/${id}`, {}, getBearerToken()); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const deletejob = (id) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete/job/${id}`, {}, getBearerToken()); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const employeavatar = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/avatar/${id}`, formData, getBearerToken());
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const SendMail2 = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/employe/send-mail/", formdata, getBearerToken());
    dispatch(sendmail(response.data));
  } catch (error) {
    //(error.response.data);
  }
};

export const ChangePassword3 = (formData, id) => async () => {
  try {
    await axios.post(`/employe/reset-password/${id}`, formData, getBearerToken()); // Pass formData to the backend
  } catch (error) {
    //(error.response.data);
  }
};

export const ChangePassword4 = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/reset-password/${id}`, formData, getBearerToken()); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const Delete2 = (userId) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete-account/${userId}`, {}, getBearerToken());
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};