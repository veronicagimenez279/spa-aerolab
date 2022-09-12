const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;

//slice(1) corta la url y muestra a partir del primer elemento, lowercase convierte en minuscula
//split separa por /
