import React from 'react';
import {NavLink} from 'react-router-dom';

var Examples = (props) => {
    return(
        <div className="grid-container">
            <div className="grid-x grid-margin-x">
                <div className="cell medium-6 large-offset-3 cell small-centered">
                    <h1>Examples</h1>
                    <p>Here are a few example locations to try out:</p>
                    <ol>
                        <li>
                            <NavLink to='/?location=Tel Aviv'>Tel Aviv, IL</NavLink>
                        </li>
                        <li>
                            <NavLink to='/?location=Rio'>Rio, Brazil</NavLink>
                        </li>
                    </ol>
                </div>
            </div>
        </div>  
    )
}

export default Examples;