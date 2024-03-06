import BASEURL from "../apis/axios";

async function getAllData(url) {
  try {
    let allData = [];
    let nextPage = url;

    while (nextPage) {
      const response = await BASEURL.get(nextPage);
      const { results, next } = response.data;

      allData = [...allData, ...results];
      nextPage = next;
    }

    return allData;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getAllData;
