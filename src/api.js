import axios from 'axios';

const API_KEY = '32967736-6b14242df9cb5ce4a6ef6f13a';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesByName = async (searchQuery, page = 1) => {
  const response = await axios.get('', {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};
