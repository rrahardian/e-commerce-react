import React, { Component } from 'react';
import Subscribe from '../component/Subscribe'
import '../css/bootstrap.css'
import '../css/style.css'

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="mt-5">
                    <div class="container mt-cust">
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <h3>SHOPPING CART</h3>
                            </div>
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <img class="d-img-small" src="./img/produk1.jpg" alt="" />
                                    </div>
                                    <div class="col-lg-8 mt-4">
                                        <h4 class="mb-5">Herchel Travelgood</h4>
                                        <p>Color: Black</p>
                                        <p></p>
                                        <h3>Rp. 1.165.150</h3>
                                        <div class="form-inline mt-4">
                                            <div class="input-group">
                                                <button class="btn">
                                                    -
                                    </button>
                                                <input type="input" class="d-input-custom form-control" placeholder="" />
                                                <button class="btn">
                                                    +
                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 border-left pl-5">
                                <div class="px-3">
                                    <div class="row justify-content-between">
                                        <h5>Subtotal</h5>
                                        <h5>Rp. 1.165.150</h5>
                                    </div>
                                    <div class="row justify-content-between">
                                        <p>Total Savings</p>
                                        <p>Rp. 434.850</p>
                                    </div>
                                </div>
                                <div class="">
                                    <input type="checkbox" /><span class="small"> I Agree with the Terms & Conditions [View Terms]</span>
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-dark w-100">
                                        <i class="fas fa-lock"></i> CHECKOUT
                        </button>
                                    <button class="btn btn-outline-dark mt-2 w-100">
                                        CONTINUE SHOPPING
                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4"></div>

                <Subscribe />

            </React.Fragment>
        )
    }
}

export default Cart