import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./component/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    try {
      // const response = await fetch(`https://dummyjson.com/products?limit=100`);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      const data = await response.json();

      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / 10));
        // console.log(totalPages);
      }
    } catch (error) {
      console.error("Data fetching error: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="main-container">
      <h2>Pagination</h2>
      {totalPages > 0 && (
        <div className="products">
          {/* {products.slice(page * 10 - 10, page * 10).map((prod) => { */}
          {products.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
            ``;
          })}
        </div>
      )}
      {totalPages > 0 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
