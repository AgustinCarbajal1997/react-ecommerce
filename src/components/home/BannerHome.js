import React,{useState} from 'react'
import image1 from '../../assets/banners/banner1-big.webp'
import image2 from '../../assets/banners/banner2-big.webp'
import image3 from '../../assets/banners/banner3-big.webp'
import image4 from '../../assets/banners/banner4-big.webp'
import image5 from '../../assets/banners/banner5-big.webp'
import image6 from '../../assets/banners/banner6-big.webp'

const BannerHome = () => {
    const [listIndex, setListIndex] = useState(0)
    const carousel = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]
    const prev = () =>{
        listIndex === 0 ? setListIndex(carousel.length - 1) : setListIndex(listIndex - 1)
    }
    const next = () => {
        listIndex < carousel.length - 1 ? setListIndex(listIndex + 1) : setListIndex(0)
        
    }
    return (
        <section className="slider">

            {carousel.map((el,index)=>{
                return(
                    <div className={index === listIndex ? "slide isActiveSlider" : "slide"} key={index}>
                        <img src={el} alt={`imagen${index}`}/>
                    </div>
                )
            })}



            <div onClick={prev} className="leftArrow"><i className="fas fa-arrow-circle-left"></i></div>
            <div onClick={next} className="rightArrow"><i className="fas fa-arrow-circle-right"></i></div>
            <div className="carousel-group-index">
                {carousel.map((el,index)=>{
                    return(
                        <div className={index === listIndex ? "carousel-index isActiveCarouselIndex" : "carousel-index"} key={`key${index}`} onClick={()=>setListIndex(index)}></div>
                    )
                })}
            </div>
        </section>
                
    )
}

export default BannerHome

