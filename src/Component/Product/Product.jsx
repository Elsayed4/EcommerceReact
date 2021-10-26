import './../../App.css';
import {useState,useEffect} from 'react';
const Product = ({match}) => {
  let [singleProduct,setsingleProduct] = useState({});
useEffect(()=>{
    getProductDetail();
},[])

  const  getProductDetail = () =>{
       return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then(res=>res.json())
        .then(json=>setsingleProduct(json))
    }

  return (
    <section className="Product">
    {Product ?(
        <div className="container">
        <div className="row my-5">
          <div className="col-sm-6">
            <img src={singleProduct.image} className="w-50" alt="productImg"/>
          </div>
          <div className="col-sm-6">
            <h3>{singleProduct.title}</h3>
            <h3>{singleProduct.category}</h3>
            <h3>{singleProduct.rating.rate}</h3>
          </div>
        </div>
      </div>
  
    ) : <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>}
    
     
    </section>
  );
}

export default Product;
