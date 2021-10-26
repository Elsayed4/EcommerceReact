import './../../App.css';
import './Shop.css';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react'; 
const Shop = (props) => {

    useEffect(() => {
        fetchproducts();
    }, [])

const [products, setProducts] = useState([]);

const fetchproducts = () =>{
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
}
    
  return (
    <section className="Shop">
    <div className="container"> 
    <h2>Shop</h2>
    <div className="ShopContent d-flex flex-wrap justify-content-center align-item-center">   
    {products.map(product =>{
       return(
         <Link to={`/shop/${product.id}`} key={product.id} className="product p-1 w-25 mb-3 me-2  text-start">
        <div className="imgContainer">
            <img src={product.image} alt="" class="w-50"></img>
        </div> 
          <h6>{product.title}</h6>
           <p>The Price : {product.price}</p>
           <p>Raring :{product.rating.rate}</p>
         </Link>
        )
     })}
     </div>
    </div>
     </section>
  );
}

export default Shop;
