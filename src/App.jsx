import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;