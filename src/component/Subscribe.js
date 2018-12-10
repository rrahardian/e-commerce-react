import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/style.css'

class Subscribe extends Component {
    render() {
        return (
            <div className="bg-black py-5">
                <center>
                    <h5 className="text-light mb-3">SUBSCRIBE</h5>
                    <p className="text-light small">Sign up to get the latest on sales, new releases and more …</p>
                    <input type="input" className="" placeholder="" />
                    <button className="">
                        SIGN UP
                    </button>
                </center>
            </div>
        )
    }
}

export default Subscribe