import { api } from "boot/axios";
export async function placer(person) {
  const url = `http://miemposvyat.ru:8000/api/resettlement`;

  return await api
    .post(url, person)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return false;
    });
}
