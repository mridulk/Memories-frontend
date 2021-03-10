import * as api from '../api';
import { FETCH_ALL,UPDATE,CREATE,
DELETE,LIKE } from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    console.log('delete server req' + id);
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
