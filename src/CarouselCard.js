import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = ({what, where, newCount}) => {
    return (
        <div className="carousel-card">
            <div className="carousel-card-what"> {what} </div>
            <div className="carousel-card-where"> {where} </div>
            <div className="carousel-card-count"> {newCount} </div>
        </div>
    );
}

CarouselCard.propTypes = {
    what: PropTypes.string,
    where: PropTypes.string,
    newCount: PropTypes.number
}

export default CarouselCard;
