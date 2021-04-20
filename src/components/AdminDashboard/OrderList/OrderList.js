import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderList = () => {
    const { id } = useParams();

    const [service, setServices] = useState([]);

    useEffect(() => {
        fetch(` https://morning-chamber-79854.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id]);
    
    return (
        <div>
            <h1>OrderList</h1>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Service Title</th>
                        <th className="text-secondary" scope="col">Service Charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{service.serviceTitle}</td>
                        <td>{service.serviceCharge}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default OrderList;