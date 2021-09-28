import React from 'react';
import './services.scss';

import {servicesList} from './data';

function Services() {
    return (
        <div className="container">
            <div className="servicesWrapper">
                <div className="titleContainer">
                    <h1 className="title">Our Services</h1>
                </div>
                {servicesList.map((service) => {
                    return (
                        <div id={service.id} className={`item ${service.id}`}>
                            <img src={service.image} alt={service.title} />
                            <h1>{service.title}</h1>
                            <p>{service.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
