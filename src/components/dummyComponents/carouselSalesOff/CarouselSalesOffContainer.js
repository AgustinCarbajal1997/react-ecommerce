import React,{ useState, useRef, useLayoutEffect } from 'react';
import useCurrentWidth from '../../../customHooks/useCurrentWidth';
import CarouselSalesOffList from './CarouselSalesOffList';

const CarouselSalesOffContainer = ({ DataSaleOff, salesOffQueries}) => {
    const [currentPlaceCarousel, setCurrentPlaceCarousel] = useState(0)
    const [widthCarousel, setWidthCarousel] = useState(0)
    const carousel = useRef();
    const carouselSlide = useRef();


    const onBackPlaceTinyCarousel = () =>{
        if(currentPlaceCarousel === 0) return;
        if(currentPlaceCarousel <= carousel.current.clientWidth){
            setCurrentPlaceCarousel(0);  
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel - carousel.current.clientWidth);
        } 
    }
    

    const onNextPlaceTinyCarousel = () => {
        console.log(carouselSlide.current.clientWidth)
        if((currentPlaceCarousel + carousel.current.clientWidth)>= carouselSlide.current.clientWidth)return;
        if(currentPlaceCarousel + (carousel.current.clientWidth*2) >= carouselSlide.current.clientWidth){
            setCurrentPlaceCarousel(carouselSlide.current.clientWidth-carousel.current.clientWidth)
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel + carousel.current.clientWidth)
        }
    }

    let width = useCurrentWidth();

    useLayoutEffect(() => {
        setWidthCarousel(carousel.current.clientWidth);
        
    }, [])
    
    return (
        <section
            className="sales-off-section"
            ref={carousel} 
        >
            <CarouselSalesOffList
                carouselSlide={carouselSlide}
                currentPlaceCarousel={currentPlaceCarousel}
                onBackPlaceTinyCarousel={onBackPlaceTinyCarousel}
                onNextPlaceTinyCarousel={onNextPlaceTinyCarousel}
                widthCarousel={widthCarousel}
                salesOffQueries={salesOffQueries}
                width={width}
                DataSaleOff={DataSaleOff}
            />
        </section>
    )
}

export default CarouselSalesOffContainer
