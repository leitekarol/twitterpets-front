import client from "../providers/client";

export const login = (data) => client.post("/login", data);

export const signup = (data) => client.post("/signup", data);

export const createTweet = (data) => client.post("/tweet", data);

export const getUser = (id) => client.get(`/users/${id}`);

export const getAllTweet = (skip) => client.get(`/tweet?take=10&skip=${skip}`);

export const listUserTweet = (id) => client.get(`/tweet/${id}`);

export const deleteTweet = (id) => client.delete(`/tweet/${id}`);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
