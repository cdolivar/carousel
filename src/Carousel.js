import React, { Component } from 'react';
import './Carousel.css';
import CarouselCard from './CarouselCard';

export default class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex:0
        };
    }

    render() {

        const data = [
            { what: "Nurse Practitioner", where: "San Francisco, CA", count: 345 },
            { what: "Tattoo Artist", count: 345 },
            { what: "Administrative Assistant", where: "San Francisco Bay Area", count: 45 }
        ]

        listItems = data.map(() => {
            
        });

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

}
