// API fetch functions for the application

const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = process.env.API_KEY; // Ensure you have your API key set in the environment variables

// Helper function to make API requests
export const fetchAPI = async (endpoint: string) => {
  const url = `${BASE_URL}${endpoint}?key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching API data from ${url}`);
  }
  return response.json();
};

export const getGames = async (searchTerm: string) => {
  return fetchAPI(`games?search=${encodeURIComponent(searchTerm)}`);
}

export const getPlatforms = async () => {
  return fetchAPI('platforms');
}

export const getGameById = async (id: number) => {
  return fetchAPI(`games/${id}`);
}