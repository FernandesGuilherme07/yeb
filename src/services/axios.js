import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users",
});

export const getUserRepos = async (userName) => {
  let url = `${userName}/repos`;

  return api.get(`${url}`);
};
