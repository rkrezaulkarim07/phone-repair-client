import React from 'react';
import './AdminSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPlus, faUserPlus, faTasks, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';


const AdminSidebar = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <a className="fs-2 text-white" href="/"><FontAwesomeIcon icon={faHome}/>Home</a>
                    </li>
                    <li>
                        <Link to={`${url}/orderList`} className="text-white">
                            <FontAwesomeIcon icon={faShoppingBag} /><span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`} className="text-white">
                            <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/makeAdmin`} className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /><span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageServices`} className="text-white">
                            <FontAwesomeIcon icon={faTasks} /><span>Manage Services</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 text-center" style={{ height: "650px", width: "100%" }}>
                <Switch>
                    <Route path={`${path}/orderList`}>
                        <OrderList></OrderList>
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageServices`}>
                        <ManageServices></ManageServices>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default AdminSidebar;