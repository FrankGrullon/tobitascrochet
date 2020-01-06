import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import  { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
               { value => {
                   const {id, info, img, price, title, credits, type, inCart} = value.detailProduct;
                   return (
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                               <div className= "col-10 mx-auto text-center text-slanted text-pink my-5">
                                   <h1>{type}</h1>
                               </div>
                           </div>
                           {/* end title */}
                           {/* product info */}
                           <div className="row">
                               <div className= "col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                               </div>
                               {/* product text */}
                               <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h1>{title}</h1>
                                   
                                   <h4 className="text-Pink">
                                       <strong>Price: <span>$</span>{price}
                                       </strong>
                                       <p className="text-capitalize.font-weight-bold mt-3 mb-0">
                                           About the product
                                       </p>
                                       <p className="text-muted lead">
                                           {info}<br></br>
                                           <span>{credits}</span>
                                       </p><br></br><br></br>
                                   </h4>
                                   <p>Note: sizes and colors are customizable. Tobita will confirm size and colors with every order before crocheting.</p>
                                   
                                   {/* buttons */}
                                   <div>
                                       <Link to='/products'>
                                           <ButtonContainer>
                                               Back to Products
                                           </ButtonContainer>
                                       </Link>
                                       <ButtonContainer 
                                       cart
                                       disabled={inCart ? true: false}
                                       onClick={ ()=> {
                                           value.addToCart(id);
                                           value.openModal(id);
                                       }
                                       }>
                                           {inCart ? "inCart": "Add to Cart"}
                                       </ButtonContainer>
                                   </div>
                               </div>
                           </div>

                       </div>
                   )
               }}
            </ProductConsumer>
        );
    }
}
