import axios from "./axios"

const ERROR_MESSAGE = "에러 발생:"

const requests = Object.freeze({
  SUBJECTS: "/subjects/",
  QUESTIONS: "/questions/",
  ANSWERS: "/answers/",

  getSubjects: async function() {
    try {
      const { response } = await axios.get("/subjects/");

      return response;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  postSubjects : async function(answerer) {
    try {
      await axios.post("/subjects/", {
        name: answerer,
      });

      return true;
    } catch (error) {
      return false;
    }
  },
  getQuestions: async function(id) {
    try {
      const { data } = await axios.get(`/subjects/${id}/questions/`);

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  postQuestions: async function(id, inputValue) {
    try {
      await axios.post(`/subjects/${id}/questions/`, {
        content: inputValue,
      });

      return true;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  getNext: async function(nextUrl) {
    try {
      const { data } = await axios.get(`${nextUrl}`);

      return data;
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }
})

export default requests