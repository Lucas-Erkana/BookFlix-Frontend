const IsAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export default IsAuthenticated;
