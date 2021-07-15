import axios from 'axios';

const getAllDataProducts = async () => {
  const url = `https://t3h-edu.herokuapp.com/api/learning/v1/products`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const getAllDataCategories = async () => {
  const url = `https://t3h-edu.herokuapp.com/api/learning/v1/categories`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const getDataProductById = async ( id ) => {
  const url = `https://t3h-edu.herokuapp.com/api/learning/v1/product/${id}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getDataProductById,
  getAllDataCategories,
  getAllDataProducts
}