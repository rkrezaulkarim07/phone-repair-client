import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ChooseService = () => {
    const { id } = useParams();

    const [service, setServices] = useState([]);

    const history = useHistory()
    const handlePayment = () => {
        history.push(`/dashboard/customer/${id}/payment`);
    }


    useEffect(() => {
        fetch(` https://morning-chamber-79854.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id]);
    return (
        <div>
            <h1>Choose Service</h1>
            <h3>{service.serviceTitle}</h3>
            <p>{service.description}</p>
            <h3>Service Charge: {service.serviceCharge}</h3>
            <img className="w-25" src={service.imageURL} alt=""/>
            <br/>
            <button className="btn btn-success mt-3" onClick={handlePayment}>Submit</button>
        </div>
    );
};

export default ChooseService;