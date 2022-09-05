import { api } from "boot/axios";
export async function register(person) {
  const url = `http://http://miemposvyat.ru/registration`;

  return await api
    .post(url, person)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
