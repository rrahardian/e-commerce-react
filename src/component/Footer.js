import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/style.css'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-2">
                            <h5 className="text-light small">COLLECTION</h5>
                            <ul className="pl-0">
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="text-light small">ADDITIONAL</h5>
                            <ul className="pl-0">
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="text-light small">POLICIES</h5>
                            <ul className="pl-0">
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                                <li className="list-unstyled text-light small">Backpack</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="text-light small">WASHO IS...</h5>
                            <p className="text-light small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                                deleniti doloribus eaque libero et perspiciatis vitae sunt quisquam cum tenetur molestias quos
                        voluptates exercitationem culpa sit, quae incidunt dolorem autem!</p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="text-light small">SUBSCRIBE</h5>
                            <p className="text-light small">Stay up to date with NAMA Studios latest update and collections</p>
                            <input type="text" placeholder="Enter your email address..." />

                            <br />

                            <button>
                                SIGN UP
                    </button>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer