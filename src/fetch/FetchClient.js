import axios from "axios";


export const getdata = async () => {
    const apidata = await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return error.response;
      });
    return apidata;
  };