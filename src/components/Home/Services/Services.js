import React, { useEffect, useState } from 'react';
import ServicesData from '../ServicesData/ServicesData';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(' https://morning-chamber-79854.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section className="container"  style={{marginTop: '100px'}}>
            <h1 className="text-center mb-5 text-success">OUR SERVICES</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                     services.map(service => <ServicesData service={service}></ServicesData>)
                }
            </div>
        </section>
    );
};

export default Services;