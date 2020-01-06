import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';


export default class ProductList extends Component {
    state={
        products:storeProducts,
        type: 'all'
    };
    
    render() {
        
        const filteredProducts = this.state.products.filter(
            product => product.type === this.state.type || this.state.type === 'all'
            );

        let typesArr = this.state.products.map(product => product.type);
    
        let uniqueTypes = [...new Set(typesArr)];

        return (
            
            <React.Fragment>
                <div className= "py-5">
                    <div className= "container">
                        <Title name="Our" title="products" />
                        <div className="row">
                            <div className="forms">
                                <select onChange={e => this.setState({type: e.target.value})} className="form-control">
                                    <option value="all">All Products</option>
                                        {uniqueTypes.map(type => (
                                    <option value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className= "row">
                            
                          <ProductConsumer>
                              { (value)=> {
                                  return filteredProducts.map( product => {
                                      return <Product key={product.id} product= {product}/>
                                  })
                                }
                              }
                          </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}