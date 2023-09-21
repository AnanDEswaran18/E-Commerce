import React from "react"
import { Link } from "react-router-dom"

export default class Contactus extends React.Component {
    render() {
        return (
            <div className='container mt-4 '>
                <section className="mb-4 jumbotron">
                    <h2 className="h1-responsive font-weight-bold text-center mt-2">
                        Hey Customer
                    </h2>
                    <br/>
                    <p className="text-center col-md-9 w-responsive mx-auto mb-5">
                        Have questions or suggestions? We'd love to hear from you! Reach out to us using the contact information below or fill out the form and we'll get back to you as soon as possible.
                    </p>
                    <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form
                        id="contact-form"
                        name="contact-form"
                        action=""
                        method="POST"
                        >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="name" className="">
                                    Your name
                                    </label>
                                    <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="md-form mb-0">
                                <label htmlFor="email" className="">
                                Your email
                                </label>
                                <input
                                required
                                type="text"
                                id="email"
                                name="email"
                                className="form-control"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="md-form mb-0">
                                <label htmlFor="subject" className="">
                                Subject
                                </label>
                                <input
                                required
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-12">
                            <div className="md-form">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                required
                                type="text"
                                id="message"
                                name="message"
                                rows={4}
                                className="form-control md-textarea"
                                defaultValue={""}
                                />
                            </div>
                            </div>
                        </div>
                        </form>
                        <div className="text-center text-md-left">
                        <button
                            className="btn btn-success mt-3"
                            onclick="document.getElementById('contact-form').submit();"
                        >
                            Send
                        </button>
                        </div>
                        <div className="status" />
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
                    <p className="text-center col-md-6 w-responsive mx-auto mb-5 mt-5">
                        Thank you for choosing us. We hold your feedback in high regard, promptly address any questions you may have, and eagerly anticipate the opportunity to be of assistance!
                    </p>
                    </div>
                    <h2 className="h1-responsive font-weight-bold text-center my-4">
                        Visit Again!!!
                    </h2>
                </section>
                {/*Section: Contact v.2*/}
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
        )
    }
}