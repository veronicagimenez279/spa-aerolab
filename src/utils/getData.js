const API = "https://coding-challenge-api.aerolab.co/products/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFhNDBmODFmMWY0NTAwMjEwOTliNTkiLCJpYXQiOjE2NjI2NjQ5NTJ9.xdiAuFNKjXVF1nKUGQ9a0Mx44lC5UfK5fb4Yt7rx8CY";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
