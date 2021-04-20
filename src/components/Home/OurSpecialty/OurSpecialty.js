import React from 'react';

const OurSpecialty = () => {
    return (
        <section className="container text-center" style={{marginTop: '100px'}}>
            <h1 className="mb-5 text-success">WHY CHOOSE US</h1>
            <div className="row mt-3">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/PTFr06T/CUSTOMER-SERVICE.jpg" alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <img style={{ height: '100px', marginBottom: '20px' }} src="https://i.ibb.co/7SrVpVL/shield.png" alt="" />
                    <h3>QUALITY GUARANTEE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque doloribus itaque reiciendis amet quo repellendus recusandae ex suscipit facere?</p>
                    <button class="btn btn-success">Read More</button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6 mt-5">
                    <img style={{ height: '100px', marginBottom: '20px' }} src="https://i.ibb.co/Pz5M9Qt/corporate.png" alt="" />
                    <h3>CORPORATE SERVICES</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam eius repudiandae ex exercitationem modi perferendis! Accusamus iure at fuga?</p>
                    <button class="btn btn-success">Read More</button>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/0rN5qYL/CUSTOMER-SERVICE-2.jpg" alt="" />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/9Z1SmSt/CORPORATE-SERVICES.jpg" alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <img style={{ height: '100px', marginBottom: '20px' }} src="https://i.ibb.co/pR6m657/support.png" alt="" />
                    <h3>CUSTOMER SERVICE</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quo vitae esse ea rem nihil ad facere iste odio architecto.</p>
                    <button class="btn btn-success">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default OurSpecialty;