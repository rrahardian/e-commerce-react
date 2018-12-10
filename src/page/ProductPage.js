import React, { Component } from 'react';
import SimilarProduct from '../component/SimilarProduct'
import '../css/bootstrap.css'
import '../css/style.css'

class ProductPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="mt-5">
                    <div class="container mt-cust">

                        <div class="row mt-5">
                            <div class="carousel slide col-lg-4" data-ride="carousel" id="carousel-control">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block" src="./img/display6.jpg" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block" src="./img/display7.jpg" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block" src="./img/display8.jpg" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block" src="./img/display9.jpg" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block" src="./img/display10.jpg" alt="" />
                                    </div>
                                    <a class="carousel-control-prev" href="#carousel-control" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-control" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 p-3">
                                <h1>LXJ</h1>
                                <div class="">
                                    <h6>Rp. 1.600.000</h6>
                                    <h4>Rp. 1.165.150</h4>
                                </div>

                                <br />

                                <div>
                                    <ul class="p-0">
                                        <li class="list-unstyled small">- Spacious duffle bag detail warna solid</li>
                                        <li class="list-unstyled small">- Warna coklat</li>
                                        <li class="list-unstyled small">- Material kanvas</li>
                                        <li class="list-unstyled small">- Kompartemen utama dengan resleting</li>
                                        <li class="list-unstyled small">- Kantong depan beresleting</li>
                                        <li class="list-unstyled small">- Kantong samping beresleting</li>
                                        <li class="list-unstyled small">- Kantong dalam beresleting</li>
                                        <li class="list-unstyled small">- Double handle</li>
                                        <li class="list-unstyled small">- Detachable dan adjustable sling straps</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="small">ESTIMASI PENGIRIMAN</p>
                                    <i class="small">Jakarta 1-3 hari kerja, luar Jakarta 2-6 hari kerja. Pengiriman Ekspres
                            tersedia</i>
                                </div>
                            </div>
                            <div class="col-lg-4 p-3 border-solid">
                                <div class="border-bottom">
                                    <h6>PILIH UKURAN</h6>
                                    <p>One size</p>
                                    <p>Stok hanya 1</p>
                                    <button class="btn btn-dark w-100">
                                        <i class="fas fa-lock"></i> CHECKOUT
                                    </button>
                                    <button class="btn btn-outline-dark my-2 w-100">
                                        CONTINUE SHOPPING
                                    </button>
                                    <b>SHARE</b>
                                    <div class="row py-3 mx-1">
                                        <i class="fab fa-facebook-f mx-2"></i>
                                        <i class="fab fa-twitter mx-2"></i>
                                        <i class="far fa-envelope mx-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                    </div>
                </div>

                <div class="mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <center>
                                    <h4>DESIGNER'S NOTE</h4>
                                </center>
                                <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium
                                    placeat quis. Repudiandae asperiores voluptate, saepe, aliquid perferendis earum rem natus
                        voluptates sapiente incidunt, impedit quas exercitationem est dolorum doloribus.</p>
                            </div>
                            <div class="col-lg-4">
                                <p class="pl-4">SPEC</p>
                                <ul>
                                    <li class="list-unstyled small line-height-2">Panjang x Lebar x Tinggi - 32cm x 21cm x 29cm</li>
                                    <li class="list-unstyled small line-height-2">Handle drop: 49cm</li>
                                    <li class="list-unstyled small line-height-2">Panjang strap: 144cm</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <p class="pl-4">SPEC</p>
                                <ul>
                                    <li class="list-unstyled small line-height-2">13"-16" Laptop</li>
                                    <li class="list-unstyled small line-height-2">4 Textbooks</li>
                                    <li class="list-unstyled small line-height-2">Pair of Clothes For A Week</li>
                                    <li class="list-unstyled small line-height-2">Your Fave Teddy Bear</li>
                                </ul>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                    </div>
                </div>

                <SimilarProduct />
            </React.Fragment>
        )
    }
}

export default ProductPage