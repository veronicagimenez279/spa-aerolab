const API = "https://coding-challenge-api.aerolab.co/products/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFhNDBmODFmMWY0NTAwMjEwOTliNTkiLCJpYXQiOjE2NjI2NjQ5NTJ9.xdiAuFNKjXVF1nKUGQ9a0Mx44lC5UfK5fb4Yt7rx8CY";

const getData = async (id) => {
  try {
    const response = await fetch(API, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    //guarda el producto que esta en el indice (id) dado del array
    const found = data[id];
    console.log(id ? found : data)
    //si hay un id, devuelve found (los datos del producto en ese id) sino devuelve data
    return id ? found : data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
