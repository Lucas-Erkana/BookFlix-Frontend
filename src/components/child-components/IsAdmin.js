const IsAdmin = () => {
  const role = localStorage.getItem('role');
  return role === 'admin';
};

export default IsAdmin;
