import React, { useState } from "react";
import { CartButton } from "./cart/CartButton";
import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

function App() {
  const [products, setProducts] = useState([1, 2, 3]);
  const productList = products.map((product) => <span>{product}</span>);

  return (
    <div>
      <Header>
        <CartButton></CartButton>
      </Header>
      <Content>{productList}</Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
