import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
});

// to fetch the data
export const getPosts = async () => {
    const res = await api.get(`/public/youtube/videos`);
    // console.log(res);
    // console.log(res.data);
  // console.log(res.data.data);
  // console.log(res.data.data.data);
  // console.log(res.data.data.data[0].items);  // I will get the 'id' in items object
  return res.status === 200 ? res.data : [];
}

//to fetch the individual data
export const fetchIndvPost = async (id) => {
  try{
    const res = await api.get(`/public/youtube/videos/${id}`);
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to delete the post 
export const deletePost = async (id) => {
  try{
    console.log("ID in API file:", id);
    const res = await api.delete(`/public/youtube/videos/${id}`);
    // console.log(res);
    // console.log(res.status);   // 200
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to add the post
export const addPost = async (data) => {
  try {
    const res = await api.post(`/public/youtube/videos`, data);
    // console.log("responseeeee", res?.config?.data )
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to update the post
export const updatePost = async (id) => {
  try {
    const res = await api.patch(`/public/youtube/videos/${id}`);
    // console.log(res.data);
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default api;