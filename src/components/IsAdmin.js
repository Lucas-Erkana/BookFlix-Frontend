// const isAdmin = localStorage.getItem('role') === 'admin';

const Admin = () => {
  const role = localStorage.getItem('role');
  return role === 'admin';
};

export default Admin;
