import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/style.css'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="-">
                            <i className="fab fa-servicestack"></i>
                        </a>
                        <div className="form-inline col-lg-8 px-0">
                            <div className="input-group col-lg-10">
                                <input type="search" className="form-control" placeholder="Search" />
                                <div className="input-group-append bg-light">
                                    <button className="btn">
                                        <i className="fas fa-search text-dark"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end col-lg-2 px-0">
                                <a className="mx-2" href="-">
                                    <i className="far fa-user text-light"></i>
                                </a>
                                <a className="mx-2" href="-">
                                    <i className="fas fa-shopping-cart text-light"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav >

                <div className="bg-light fixed-top lower-top py-2">
                    <div className="container px-4">
                        <div className="row justify-content-between px-3">
                            <div className="row py-1">
                                <a className="text-dark no-decor px-2 mb-0" href="-">
                                    <p className="mb-0">Backpack</p>
                                </a>
                                <a className="text-dark no-decor px-2" href="-">
                                    <p className="mb-0">Sling Bags</p>
                                </a>
                                <a className="text-dark no-decor px-2" href="-">
                                    <p className="mb-0">Travel Bags</p>
                                </a>
                                <a className="text-dark no-decor px-2" href="-">
                                    <p className="mb-0">Duffel Bags</p>
                                </a>
                                <a className="text-dark no-decor px-2" href="-">
                                    <p className="mb-0">Briefcases</p>
                                </a>
                            </div>
                            <a className="no-decor" href="-">
                                <div className="bg-warning rounded px-4 py-1">
                                    <p className="text-light mb-0">Dapatkan Voucher Diskon 20%</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Navbar