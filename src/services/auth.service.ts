import API from './api';

export const loginUser = async (credentials: { email: string; pass: string }) => {
  // On envoie 'password' au backend à la place de 'pass'
  const response = await API.post('/auth/login', {
    email: credentials.email,
    password: credentials.pass, // <-- La clé ici doit être "password"
  });
  
  if (response.data.accessToken) {
    localStorage.setItem('token', response.data.accessToken);
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
  }
  return response.data;
};
 
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};