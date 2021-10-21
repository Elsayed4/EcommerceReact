import './../../App.css';
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
    <div className="d-flex flex-wrap justify-content-center align-item-center">   
    {products.map(product =>{
       
        return(
         <div key={product.id} className="product p-1 w-25 mb-3 me-2 border text-start">
        
         <img src={product.image} alt="" class="w-50"></img>
           <h6>{product.title}</h6>
           <p>The Price : {product.price}</p>
           <p>Raring :{product.rating.rate}</p>
         </div>
        )
     })}
     </div>
    </div>
     </section>
  );
}

export default Shop;
