const isAdmin = (userId) => {
  const ID_ADMIN = 0 // TODO: хранить в БД или env

  return userId === ID_ADMIN;
}

export default isAdmin;
