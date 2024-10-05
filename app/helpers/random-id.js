const getRandomInt = (max = 10000) => {
  return Math.floor(Math.random() * max);
}

const randomId = () => {
  const prefix = `g_${Date.now()}_`;

  return prefix + getRandomInt();
}

export default randomId;
