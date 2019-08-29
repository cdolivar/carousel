import React from 'react';
import './Carousel.css';
import CarouselCard from './CarouselCard';

function Carousel() {
    return (
        <div className="carousel-wrapper">
            <div className='carousel-title'>
                New jobs from your recent searches
            </div>
            <div className="carousel-scroll">
                <CarouselCard
                    what="Firefighter"
                    where="San Francisco, Ca"
                    newCount={156}
                />
                <CarouselCard
                    what="Firefighter"
                    where="San Francisco, Ca"
                    newCount={156}
                />
                <CarouselCard
                    what="Firefighter"
                    where="San Francisco, Ca"
                    newCount={156}
                />
                <CarouselCard
                    what="Firefighter"
                    where="San Francisco, Ca"
                    newCount={156}
                />
                <CarouselCard
                    what="Firefighter"
                    where="San Francisco, Ca"
                    newCount={156}
                />
                <div className="right-margin"></div>
            </div>
        </div>
    );
}


export default Carousel;
