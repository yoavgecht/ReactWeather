import React from 'react';

var About = (props) => {
    return (
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
                <div className="cell medium-6 large-offset-3 cell small-centered">
                    <h1>About</h1>
                    <p>This is a weather application build on React</p>
                    <p>Here are some of the tools I usef</p>
                    <ul>
                        <li><a href="https://facebook.github.io/react">React</a> - this was the javascript framework used.</li>
                        <li><a href="http://openweathermaps.org">Open Weather Map</a> - I used open Weather Map to search for weather data by city name</li>
                    </ul>
                </div>
            </div>
        </div>  
        
    )
};

export default About;