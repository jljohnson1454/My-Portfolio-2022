import "./product.css";

const Product = ({img,link,github}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <a className="g-link" href={github}>Github</a>
                <a className="s-link" href={link}>Full Site</a>
            </div>

            
            
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
           
           
        </div>
        
    )
}

export default Product