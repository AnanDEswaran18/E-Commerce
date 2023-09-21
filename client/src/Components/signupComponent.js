import React from 'react'
import axios from 'axios'
import url from './url'
import { Link } from "react-router-dom";
export default class SignupComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "Signup"
        }
    }
    render() {
        return (
            <div className="container mt-4 ">
                <section className="jumbotron">
                    <h2 className="h1-responsive font-weight-bold text-center mt-2">
                        Signup
                    </h2>
                    <br/>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Create an account to get started.<br/>
                        Please fill in the following details to create your account
                    </p>
                    <div className='row'>
                        <div className='col-md-9 mb-md-0 mb-5'>
                            <form
                                onSubmit={this.signup}
                                className=""
                            >
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">
                                            Name
                                            </label>
                                            <input required
                                            type="name"
                                            id="name"
                                            name="uname"
                                            className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">
                                            Password
                                            </label>
                                            <input required
                                            type="password"
                                            id="name"
                                            name="upwd"
                                            className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">
                                            Email
                                            </label>
                                            <input required
                                            type="email"
                                            id="name"
                                            name="mail"
                                            className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">
                                            Mobile number
                                            </label>
                                            <input required
                                            type="tel"
                                            id="name"
                                            name="contact"
                                            className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">
                                            Address
                                            </label>
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="address"
                                                rows={4}
                                                className="form-control md-textarea"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-left">
                                    <button className="btn btn-success mt-3" onclick="document.getElementById('contact-form').submit();">
                                        {this.state.status}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-2x" />
                                    <p>Coimbatore, India</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x" />
                                    <p>+91-9345702229</p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x" />
                                    <p>web.app.ecommerce@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6 text-center mx-auto mt-3'>
                            Already have an account?
<br/>
                            If you already have an account,Use our <Link to='/login'>Login</Link> module.
<br/>
                            Or
<br/>
                            If you have any questions or need assistance, please <Link to="/contactus">Contact us</Link>.
                    </div>
                </section>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1"> © By: Anand Eswaran 2023</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                    <a href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">Support</a>
                    </li>
                </ul>
                </footer>
            </div>
        );
    }
    signup = (e) => {
        this.setState({
            status:"Please wait...",
        })
        e.preventDefault()
        let obj = {
            "uname": e.target.uname.value,
            "upwd": e.target.upwd.value,
            "email": e.target.mail.value,
            "address": e.target.address.value,
            "contact": e.target.contact.value
        }
        axios.post(url + "/insert/createUser", obj)
            .then((posRes) => {
                console.log(posRes.data)
                this.setState({
                    status: "Account Created Successfully"
                })
            }, (errRes) => {
                console.log(errRes)
            })
    }
}

