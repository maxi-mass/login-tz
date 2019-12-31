const hash = require("object-hash");

export const getToken = (data: any) => {
  localStorage.setItem("userData", JSON.stringify(data));
  return { jwt: hash(data) };
};

export const removeToken = () => {
  localStorage.removeItem("userData");
};

export const issetToken = () => {
  return localStorage.getItem("userData");
};
