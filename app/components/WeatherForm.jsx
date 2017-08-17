import React from 'react';

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length > 2);
        this.refs.location.value = '';
        this.props.onSearch(location)
    },
    render: function(){
        return (
              <div className="grid-container">
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-6 large-offset-3 cell small-centered">
                        <form onSubmit={this.onFormSubmit}>
                            <h1 className="text-center">Get Weather</h1>
                            <input type="text" ref="location" placeholder="Enter city name" />
                            <button className="button expanded hollow">Get Weather</button>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
});

export default WeatherForm;


