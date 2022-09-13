import getData from "../utils/getData";

const Home = async () => {
  const products = await getData();

  const view = `
        <div class="container">
          <img src="/header-x2.png" alt="Header Image" style="width:100%;">
          <div class="bottom-left">Electronics</div>
        </div>
        <div class ="Products">
          ${products.map((product, index) => `
            <article class ="Products-item">
            <a href ="#/${index}/">
                <img src="${product.img.url}" alt="${product.name}">
                <div class ="ProductCategory">${product.category}</div>
                <div class ="ProductName">${product.name}</div>
                
              </a>
            </article>
            `).join('')}
          
        </div>
        <div class ="TotalProducts">${products.length} of ${products.length} products</div>

    `
  return view;
}

export default Home;

