import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Stronger Together</h1>
                <p className="pl-desc">
                    Below are several projects created using Javascript, MERN, and OOP. They were key in my development, working as an individual and as part of a team
                    </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                
                <Product key={item.id} img={item.img} link={item.link} github={item.github} />))}
                
                
            </div>

        </div>
    )
};

export default ProductList;