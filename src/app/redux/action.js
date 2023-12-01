import { SIGNUP } from './actionType';
import { LOGIN } from './actionType';
import { LOGOUT } from './actionType';

export const signup = (formData) => {
  localStorage.setItem('userData', JSON.stringify(formData));
  return {
    type: SIGNUP,
    payload: formData,
  };
};

export const login = (formData) => {
  return {
    type: LOGIN,
    payload: formData,
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

