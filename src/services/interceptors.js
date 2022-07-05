import api from "./api";

export default function interceptors() {
  api.interceptors.request.use(
    (request) => {
      return request;
    },
    (erro) => {
      return Promise.reject(erro);
    }
  );
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (erro) => {
      return Promise.reject(erro);
    }
  );
}
