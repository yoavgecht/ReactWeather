import React from 'react';

var WeatherMessage = ({temp, location}) => {
    return (
        <div className="grid-container">
            <div className="grid-x grid-margin-x">
                <div className="cell medium-6 large-offset-3 cell small-centered">
                    <h3 className="text-center">It's {temp.toFixed(0)} in {location}</h3>
                </div>
            </div>
        </div>
    );
}

export default WeatherMessage;