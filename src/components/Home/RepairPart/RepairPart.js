import React from 'react';

const RepairPart = () => {
    return (
        <section className="container" style={{marginTop: '100px',}}>
            <h1 className="text-center text-success mb-5">WE REPAIR</h1>
            <div className="row text-center container mt-4 justify-content-center">
                <div className="col-md-5 shadow py-5" style={{borderRadius: '20px 20px 40px'}}>
                    <div>
                        <img src="https://i.ibb.co/23ML8xQ/apple.png" style={{width: '50px'}} alt=""/>
                    </div>
                    <div>
                        <h3 className="mt-3">IPHONE</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maiores in et explicabo incidunt architecto?</p>
                    </div>
                </div>
                <div className="col-md-5 shadow py-5" style={{borderRadius: '20px 20px 40px',marginLeft:'50px'}}>
                    <div>
                        <img src="https://i.ibb.co/TL6mnDS/android-logo.png" style={{width: '50px'}} alt=""/>
                    </div>
                    <div>
                        <h3 className="mt-3">ANDROID</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maiores in et explicabo incidunt architecto?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairPart;