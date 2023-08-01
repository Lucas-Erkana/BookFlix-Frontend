const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export default isAuthenticated;
