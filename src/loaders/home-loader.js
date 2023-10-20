import axios from "axios";

export const homeStoryLoader = async () => {
  try {
    const response = await axios.get(
      "https://react-mini-projects-api.classbon.com/Story/list"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
