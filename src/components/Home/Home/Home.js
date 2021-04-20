import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurSpecialty from '../OurSpecialty/OurSpecialty';
import RepairPart from '../RepairPart/RepairPart';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <RepairPart></RepairPart> 
           <Services></Services>
           <OurSpecialty></OurSpecialty>
           <Testimonials></Testimonials>
           <Footer></Footer>
        </div>
    );
};

export default Home;