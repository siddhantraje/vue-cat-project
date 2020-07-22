import axios from 'axios';

// method get random Cat Method
export const getRandomCat = () => {
    return axios.get(`/images/search`);
}

// method to get all the categories
export const getCategories = () => {
    return axios.get(`/categories`);
}

//method to get cats of a particular category with asked limit 
export const getCatsUsingCategory = (id, limit) =>{
    return axios.get(`/images/search?category_ids=${id}&limit=${limit}`);
}