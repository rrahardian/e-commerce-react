import React, { Component } from 'react';
import SimilarProduct from '../component/SimilarProduct'
import '../css/bootstrap.css'
import '../css/style.css'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <div className="container px-3 mt-cust mb-5">
                        <img className="col-12" src="./img/hero.jpg" alt="" />
                    </div>
                </div>

                <SimilarProduct />

                <div className="">
                    <div className="container px-4">
                        <h3>Top categories</h3>
                    </div>
                    <div className="container px-4">
                        <div className="row col-lg-12 p-5">
                            <a className="px-1" href="/">
                                <img src="./img/kategori1.jpg" alt="" />
                            </a>
                            <a className="px-1" href="/">
                                <img src="./img/kategori2.jpg" alt="" />
                            </a>
                            <a className="px-1" href="/">
                                <img src="./img/kategori3.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="container px-4 py-5">
                        <div className="row justify-content-center">
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                            <a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a><a className="px-3 py-2" href="/">
                                <img src="./img/brand1.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container px-5 my-5">
                        <h2>Belanja Fashion For Travelling Di Washo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus natus illum esse, asperiores
                            deleniti dolorem id sequi dolorum quas dolores recusandae provident eos? Id quas facere animi soluta
                            totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, non eos nobis culpa, voluptas
                            id vero voluptate ipsum modi iure totam accusamus molestias odit? Necessitatibus dolorem id magni
                            voluptas soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime corrupti, porro illo
                            eveniet quia sunt, sapiente saepe voluptatem labore maiores ex at dignissimos voluptates corporis ipsum
                deleniti alias eos consequatur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium expedita ad excepturi!
                            Quos, esse impedit dolor temporibus explicabo omnis facilis itaque similique magnam pariatur minus,
                            aliquam porro assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde nesciunt
                            doloribus ullam dolore quae at exercitationem velit itaque voluptates et maxime, laboriosam nobis
                adipisci quod. Voluptas, expedita! Autem, doloribus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit, quo consequatur voluptate enim odio
                            itaque modi aut sunt architecto repellat libero in dolores? Consequuntur adipisci placeat accusantium
                sed provident.</p>
                    </div>
                    <div className="container px-5 mb-5">
                        <h4>Koleksi Lengkap</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem suscipit saepe impedit, eligendi
                            asperiores quo quae nemo ad dolore praesentium nam. Quas ducimus perferendis dicta architecto? Officia
                            adipisci labore a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maxime et nemo id
                            quibusdam cumque nostrum magnam beatae, asperiores, ratione voluptas obcaecati, pariatur sit blanditiis
                            error quia minus quis repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequuntur aliquam laborum tempore, obcaecati dignissimos impedit accusamus? Sed officiis, mollitia
                            voluptas expedita rerum laboriosam nihil explicabo amet ut optio molestiae cupiditate!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur eos quae cupiditate quasi
                            voluptas, quibusdam magni. Sapiente est reprehenderit voluptatum amet commodi explicabo doloribus dolor
                            dignissimos ipsam? Assumenda, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus ex modi similique fuga ipsam hic accusamus ad inventore, veniam numquam quasi minus voluptas
                            voluptatem placeat, expedita non velit unde eaque. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium, iusto repudiandae, cumque officiis consequatur dolor earum exercitationem rem porro
                            nobis accusamus similique nisi ipsam modi eos. Illum rem reprehenderit molestiae?</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home