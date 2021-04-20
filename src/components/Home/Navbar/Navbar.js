import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img style={{width: '50px'}} href="#" className="ms-5" src="https://i.ibb.co/5Tk2GhN/repair.png" alt=""/>
                <h3 className="text-white">Phone Repair</h3>
                <button class="navbar-toggler text-white" style={{color: 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-5" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-5" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <Link to="dashboard/customer/review" class="nav-link text-white ms-5">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard/admin" class="nav-link text-white ms-5">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-5" href="#">Contact Us</a>
                        </li>
                        <Link to="/login"style={{ height: '40px', color: 'white'  }} class="btn btn-success ms-5">Login</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;