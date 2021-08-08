import React from "react"
import { useSelector } from "react-redux"
import {  Link, useRouteMatch } from "react-router-dom";




const ListingProducts = ({ article }) => {
    const productsList = useSelector(state => state.products.products);
    
    const filteredList = productsList.filter(item => item.article === article);
    

    let { url } = useRouteMatch();
    
    return (
        <section className="products-list">
                
            
                
                {filteredList.map(item =>{
                    return(
                        
                        
                            <div key={item.id} className="products-list-item">
                                <Link to={`${url}/${item.id}`}>
                                    <img className="products-list-item__image" src={item.images[0]} alt={item.title} />
                                    <h4 className="products-list-item__title">{item.title}</h4>
                                    <h5 className="products-list-item__price">${item.price}</h5>
                                </Link>
                                    

                            </div>
                    )
                })}
                
                    
                
            </section>
            
    )
}

export default ListingProducts
