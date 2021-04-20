import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(' https://morning-chamber-79854.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h1 className="text-center">Manage Service</h1>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Service Title</th>
                <th className="text-secondary" scope="col">Service Charge</th>
                <th className="text-secondary" scope="col">Button</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                        
                    <tr>
                        <td>{service.serviceTitle}</td>
                        <td>{service.serviceCharge}</td>
                        <td><FontAwesomeIcon style={{color: 'red', fontSize:'30px'}} icon={faTrashAlt}/></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>

    );
};

export default ManageServices;