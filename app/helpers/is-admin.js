const isAdmin = (userId) => {
  return userId ===  Number(process.env.ADMIN_ID);
}

export default isAdmin;
