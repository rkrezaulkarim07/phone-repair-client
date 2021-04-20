import React from 'react';
import { useHistory } from 'react-router';

const ServicesData = ({service}) => {
    const {_id} = service;
    const history = useHistory()
    const handleOrders = (id) => {
        history.push(`/dashboard/customer/${id}`);
    }
    return (
        <div class="col" onClick={() => handleOrders(_id)}>
        <div class="card h-100">
            <img src={service.imageURL} style={{ height: '300px' }} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">{service.serviceTitle}</h3>
                <p class="card-text">{service.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <h3>Service Charge: {service.serviceCharge}</h3>
            </div>
        </div>
    </div>
    );
};

export default ServicesData;