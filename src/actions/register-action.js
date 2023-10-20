import axios from "axios";

export const authRegisterAction = async ({ request }) => {
  const body = await request.formData();
  const bodyAsObject = Object.fromEntries(body);
  const response = await axios.post(
    "https://react-mini-projects-api.classbon.com/Users",
    bodyAsObject
  );
  console.log(response);
  return true;
};
