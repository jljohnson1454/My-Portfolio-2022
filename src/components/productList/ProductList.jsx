import "./productList.css";
import Product from "../product/Product";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & Inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequatur deleniti labore quibusdam quaerat, 
                    magnam illo. Odio qui consequuntur laudantium libero 
                    illo fugiat, rerum aspernatur et rem quia ea culpa ducimus?
                    </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    )
};

export default ProductList;