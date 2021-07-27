import React,{ useState } from 'react'


const CarouselFiveProductsPerView = ({productList, title}) => {
    const [overFlow, setOverFlow] = useState(0)
    return (
        <section className="carousel-five-products-view-section">
            <h3 className="title-carousel-five-products">{title}</h3>
            <div className="carousel-five-products-view-container" style={{left:`${overFlow}%`}}>
                {productList.map(el =>{
                    return(
                        <div key={el.id} className="carousel-five-products-view-item">
                            <div className="carousel-five-products-view-item__img">
                                <img className="carousel-five-products-productImg" src={el.image} alt={el.productName}/>
                                <img className="carousel-five-products-shippingImg" src={el.shipping} alt={el.productName}/>
                                <img className="carousel-five-products-paymentImg" src={el.payment} alt={el.productName}/>
                            </div>
                            
                                <h3 className="carousel-five-products-view-item__content-product">{el.productName}</h3>
                                <h4 className="carousel-five-products-view-item__content-price">${el.price}</h4>
                            
                        </div>
                    )
                })}
            </div>
            {overFlow === 0
                ? <div className="button-optionright-carousel-five" onClick={()=>setOverFlow(-100)}><i className="fas fa-arrow-right"></i></div>
                : <div className="button-optionleft-carousel-five" onClick={()=>setOverFlow(0)}><i className="fas fa-arrow-left"></i></div>
            }
            
                        
        </section>
    )
}

export default CarouselFiveProductsPerView