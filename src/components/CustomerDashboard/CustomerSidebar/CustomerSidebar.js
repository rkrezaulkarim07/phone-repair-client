import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './CustomerSidebar.css';
import ChooseService from '../ChooseService/ChooseService';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const CustomerSidebar = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <a className="fs-2 text-white" href="/"><FontAwesomeIcon icon={faHome}/>Home</a>
                    </li>
                    <li>
                        <Link to={`${url}/chooseService`} className="text-white">
                            <span>Choose Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/payment`} className="text-white">
                            <span>Payment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`} className="text-white">
                            <span>Review</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 shadow container offset-md-2 text-center" style={{ height: '100%' }}>
                <Switch>
                    <Route path={`${path}/chooseService`}>
                        <ChooseService></ChooseService>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default CustomerSidebar;