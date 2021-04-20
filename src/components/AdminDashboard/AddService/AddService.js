import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0]);

        const imageData = new FormData();
        imageData.set('key', 'b69e3c08352d7f71462e47880a069243');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const onSubmit = data => {
        const serviceData = {
            serviceTitle: data.serviceTitle,
            description: data.description,
            serviceCharge: data.serviceCharge,
            imageURL : imageURL
        };

        const url = ` https://morning-chamber-79854.herokuapp.com/addService`

            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
            .then(res => console.log('server side response', res)) 
        };


    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} style={{textAlign: 'center'}}>
                <h3>Add Service</h3>
                <h6>Service Title</h6>
                <input name="serviceTitle" class="mb-3" defaultValue="service title" {...register("serviceTitle")}/>
                <br/>
                <h6>Description</h6>
                <input name="description" class="mb-3" style={{height: "200px", width: "300px"}} defaultValue="description" {...register("description")} />
                <br/>
                <h6>Service Charge</h6>
                <input name="serviceCharge" class="mb-3" defaultValue="service charge" {...register("serviceCharge")}/>
                <br/>
                <h6>Image</h6>
                <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                <br/>
                <input type="submit" class="btn btn-primary mt-3" name="save"/>
            </form>
        </section>
    );
};

export default AddService;