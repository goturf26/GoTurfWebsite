// src/lib/api.js
const BASE_URL = 'https://goturfuser.onrender.com/api'; 

export const getAllPublicTurfs = async () => {
  const response = await fetch(`${BASE_URL}/public/turfs`);
  if (!response.ok) throw new Error('Failed to fetch turfs');
  return response.json();
};

export const getPublicTurfById = async (turfId) => {
  const response = await fetch(`${BASE_URL}/public/turf/${turfId}`);
  if (!response.ok) throw new Error('Failed to fetch turf details');
  return response.json();
};

export const getPublicTournaments = async (turfId) => {
  const response = await fetch(`${BASE_URL}/public/turf/${turfId}/tournaments`);
  if (!response.ok) throw new Error('Failed to fetch tournaments');
  return response.json();
};