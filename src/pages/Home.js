import React from 'react'
import CarouselFiveProductsPerView from '../components/dummyComponents/CarouselFiveProductsPerView'
import BannerHome from '../components/home/BannerHome'
import Options from '../components/home/Options'
import SaleOff from '../components/home/SaleOff'
import WeDeliverItToYou from '../components/home/WeDeliverItToYou'
import { HighlightedOffersList } from '../assets/highlightedOffers/highlightedOffersList'

const Home = () => {
    
    return (
        <div className="main">
            <BannerHome/>
            <Options/>
            <SaleOff/>
            <WeDeliverItToYou/>
            <CarouselFiveProductsPerView productList={HighlightedOffersList} title="Aprovechá las ofertas destacadas"/>
        </div>
    )
}

export default Home
