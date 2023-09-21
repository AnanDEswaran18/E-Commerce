import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Aboutus from './aboutus'
import Contactus from './contactus'
import Signup from "./signupComponent";
import MainComponent from './mainComponent'
export default class IndexComponent extends React.Component {
    render() {
        return (
            <div className="m-3">
                <div className="nav nav-pills">
                    <Router>
                        <div className="nav-item">
                            <NavLink to="/aboutus" className='nav-link'>About us</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/signup" className='nav-link'>Signup</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/login" className='nav-link'>Login</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/contactus" className='nav-link'>Contact us</NavLink>
                        </div>
                        <br /><br />
                        <Routes>
                            <Route path="/aboutus" element={<Aboutus />}></Route>
                            <Route path="/contactus" element={<Contactus />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                            <Route path="/login" element={<MainComponent />}></Route>
                        </Routes>
                    </Router>
                </div>
                {/* <h1 className="text-warning">Hello</h1> */}
            </div>
        )
    }
}
