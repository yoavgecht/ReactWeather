import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal'

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
            isError: undefined
        }
    },
   
    handleSearch: function(location){
        var self = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e){
            self.setState({isLoading: false, isError: e.message});
        })
    },
    
    render: function(){
        var {isLoading, isError, temp, location} = this.state;
        function renderError(){
            if(typeof isError == 'string'){
                return(
                    <ErrorModal />
                )
                
            }
        }

        function renderMessage(){
            if(isLoading){
                return (
                    <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                            <div className="cell medium-6 large-offset-3 cell small-centered">
                                <h3 className="text-center">Fetching weather...</h3>
                            </div>
                        </div>
                    </div>
                )
            } else if(temp && location) {
                 return <WeatherMessage location={location} temp={temp} />
            }
        };
          
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
            
        )
    }
});

module.exports = Weather;
