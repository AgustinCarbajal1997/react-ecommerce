import React,{useState} from 'react'
import { DataSaleOff } from '../../assets/saleoff/dataSaleOff'

const SaleOff = () => {
    const [overFlow,setOverFlow] = useState(0)

    return (
        <section className="sales-off-section">
            <div className="sales-off-section__title"><h3>OFERTAS POR TIEMPO LIMITADO</h3></div>
            <div className="sales-off-section__products" style={{left:`${overFlow}%`}}>
                {DataSaleOff.map((el,index)=>{
                    return (
                        <div key={el.id} className="sales-off-section__card">
                            <div className="sales-off-section__images">
                                <img className="sales-off-section__imagesProduct" src={el.image} alt={el.productName}/>
                                <img className="sales-off-section__imagesShipping" src={el.shipping} alt={el.productName}/>
                                <img className="sales-off-section__imagesPayment" src={el.payment} alt={el.productName}/>
                            </div>
                            <h3 className="sales-off-section__productName">{el.productName}</h3>
                            <h4 className="sales-off-section__productPrice">{`$${el.price}`}</h4>

                        </div>
                    )
                })}
            </div>
            {overFlow === 0
             ? <div className="button-saleright" onClick={()=>setOverFlow(-100)}><i className="fas fa-arrow-right"></i></div>
             : <div className="button-saleleft" onClick={()=>setOverFlow(0)}><i className="fas fa-arrow-left"></i></div>
            }
        </section>
    )
}

export default SaleOff
