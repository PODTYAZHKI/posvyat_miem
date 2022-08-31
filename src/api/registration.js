import { api } from "boot/axios";
export async function register(person) {
  const url = `http://localhost:8000/registration`;

  return await api
    .post(url, person)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
