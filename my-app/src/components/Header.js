
// export default function Header()shunaqa usuldaham yoziladi

import Images_banner from './images/banner.jpg';
import Images_picture from './images/picture.jpg';
import Images_about from './images/about.jpg';
import Images_stats1 from './images/stats1.jpg';
import Images_statss from './images/statss.jpg';

import './css/style.css';
import './css/font-awesome.css'

function Header() {

    return (

        <div>


            <header>
                <div className="logo">
                    <a href="#!">
                        <i className="fa fa-line-chart"></i>
                        <span>Demand</span>
                    </a>
                </div>
                <div className="left">
                    <a href="#!">Home</a>
                    <a href="#!">About Us</a>
                    <a href="#!">Services</a>
                    <a href="#!">Blog</a>
                    <a href="#!">Content</a>
                    <a href="#!"><span>Get Started</span></a>
                </div>
            </header>
            <div className="header_img">
                <img src={Images_banner} alt="" />
            </div>
            <div className="shadow"></div>
            <div className="header_text">
                <h1>Corporate<span> Business</span></h1>
                <h2>Best Technology Demand</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores vitae, ipsam ea similique molestias
                    placeat nostrum ab,atque doloremque doloribus</p>
                <div className="button">
                    <button>Read more</button><button>Get started</button>
                </div>
            </div>
            <div className="clear"></div>






            <div class="container">
                <div class="our_continents">
                    <h1>Our continents</h1>

                    <div class="box">
                        <div class="img">
                            <img src={Images_picture} alt="" />
                        </div>
                        <div class="text_img">
                            <h2>Canyons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="text_shadow"></div>
                    </div>

                    <div class="box">
                        <div class="img">
                            <img src={Images_picture} alt="" />
                        </div>
                        <div class="text_img">
                            <h2>Canyons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="text_shadow"></div>
                    </div>

                    <div class="box">
                        <div class="img">
                            <img src={Images_picture} alt="" />
                        </div>
                        <div class="text_img">
                            <h2>Canyons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="text_shadow"></div>
                    </div>

                    <div class="box">
                        <div class="img">
                            <img src={Images_picture} alt="" />
                        </div>
                        <div class="text_img">
                            <h2>Canyons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="text_shadow"></div>
                    </div>

                </div>
            </div>
            <div class="clear"></div>

            <div class="container">
                <div class="info">

                    <div class="box">
                        <div class="icons icon1">
                            <i class="fa fa-fort-awesome"></i>
                        </div>
                        <div class="text">
                            <h3>Statistics</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate labore unde, expedita
                                deserunt? Et laborum</p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons icon2">
                            <i class="fa fa-key"></i>
                        </div>
                        <div class="text">
                            <h3>Security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate labore unde, expedita
                                deserunt? Et laborum</p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons icon3">
                            <i class="fa fa-tasks"></i>
                        </div>
                        <div class="text">
                            <h3>Presentation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate labore unde, expedita
                                deserunt? Et laborum</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="clear"></div>

            <div class="container">
                <main class="picture">
                    <div class="picture">
                        <img src={Images_about} alt="" />
                    </div>
                    <div class="fontext">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cum aliquam Voluptatem aliquam
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dicta maxime molestias sunt dolore.
                            Corrupti consectetur iusto quae, placeat repellendus recusandae eveniet! Quae vero, eaque voluptatum
                            non aperiam corporis adipisci! Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem autem iste voluptas
                            voluptatum nulla, dignissimos</p>
                    </div>
                </main>
            </div>
            <div class="clear"></div>
            <div class="container">
                <div class="information">

                    <div class="box">
                        <div class="icons icon1">
                            <i class="fa fa-print"></i>
                        </div>
                        <div class="text">
                            <h3>Statistics</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons icon2">
                            <i class="fa fa-newspaper-o"></i>
                        </div>
                        <div class="text">
                            <h3>Security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons icon3">
                            <i class="fa fa-unlock"></i>
                        </div>
                        <div class="text">
                            <h3>Presentation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sadasd Cupiditate </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons icon4">
                            <i class="fa fa-product-hunt"></i>
                        </div>
                        <div class="text">
                            <h3>Security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. adfgsgs Cupiditate </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>

            <div class="blackfon">
                <div class="container">
                    <h1>Latest <span>Statistical Information</span></h1>
                    <div class="boxs">
                        <div class="box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam natus ipsa libero nisi labore ad
                                pariatur consequatur quasi sint modi porro saepe, cupiditate sed asperiores ullam laudantium sit
                                dolorem. Animi. cupiditate sed asperiores
                                ullam laudantium sit dolorem. Animi.</p>
                            <button>Read More</button>
                        </div>

                        <div class="box">
                            <img src={Images_stats1} alt="" />
                        </div>

                        <div class="box">

                            <span class="text">ONLINE MARKETING</span>
                            <div class="stats">
                                <div class="background"></div>
                            </div>

                            <span class="text">FINANCIAL CONSULTING</span>
                            <div class="stats">
                                <div class="background background2"></div>
                            </div>

                            <span class="text">CREATIVE PROJECTS</span>
                            <div class="stats">
                                <div class="background background3"></div>
                            </div>

                            <span class="text">FUTURE ENHANCEMENT</span>
                            <div class="stats">
                                <div class="background background4"></div>
                            </div>

                            <span class="text">24/7 SUPPORT</span>
                            <div class="stats">
                                <div class="background background5"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>

            <div class="marketing">
                <div class="container">
                    <p>Our Marketing <span>Products</span></p>
                    <div class="boxes">

                        <div class="box1">
                            <div class="hover">
                                <i class="fa fa-print"></i>
                                <h2>Consulting</h2>
                            </div>
                        </div>

                        <div class="box1">
                            <div class="hover">
                                <i class="fa fa-newspaper-o"></i>
                                <h2>Marketing</h2>
                            </div>
                        </div>

                        <div class="box1">
                            <div class="hover">
                                <i class="fa fa-unlock"></i>
                                <h2>IT Software</h2>
                            </div>
                        </div>

                        <div class="box1">
                            <div class="hover">
                                <i class="fa fa-product-hunt"></i>
                                <h2>Cloud Technology</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="clear"></div>

            <div class="growth">
                <img src={Images_statss} alt="" />
                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                <div class="theme"></div>

                <div class="container">
                    <div class="texts">
                        <h1>Our <span>Statistical Growth</span></h1>
                    </div>
                    <div class="box11">

                        <div class="statistica">
                            <p>
                                <i class="fa fa-credit-card"></i>
                            </p>
                            <h1>1568</h1>
                            <p class="text_partners">Partners</p>
                        </div>

                        <div class="statistica">
                            <p>
                                <i class="fa fa-users"></i>
                            </p>
                            <h1>1900</h1>
                            <p class="text_partners">Customers</p>
                        </div>

                        <div class="statistica">
                            <p>
                                <i class="fa fa-globe"></i>
                            </p>
                            <h1>1422</h1>
                            <p class="text_partners">Projects</p>
                        </div>

                        <div class="statistica">
                            <p>
                                <i class="fa fa-credit-card"></i>
                            </p>
                            <h1>400</h1>
                            <p class="text_partners">Employees</p>
                        </div>
                        <div class="infobox">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi animi sunt, eveniet.</p>
                        </div>

                    </div>

                </div>
            </div>
            <div class="clear"></div>

            <div class="body1">
                <div class="container2">

                    <div class="box115">
                        <div class="content116">
                            <h2>01</h2>
                            <h3>Service One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis excepturi distinctio
                                tempore incidunt quas non quaerat harum alias eum</p>
                            <a href="#!">Read More</a>
                        </div>
                    </div>

                    <div class="box115">
                        <div class="content116">
                            <h2>02</h2>
                            <h3>Service One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis excepturi distinctio
                                tempore incidunt quas non quaerat harum alias eum</p>
                            <a href="#!">Read More</a>
                        </div>
                    </div>

                    <div class="box115">
                        <div class="content116">
                            <h2>03</h2>
                            <h3>Service One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis excepturi distinctio
                                tempore incidunt quas non quaerat harum alias eum</p>
                            <a href="#!">Read More</a>
                        </div>
                    </div>

                    <div class="box115">
                        <div class="content116">
                            <h2>04</h2>
                            <h3>Service One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis excepturi distinctio
                                tempore incidunt quas non quaerat harum alias eum</p>
                            <a href="#!">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="mobile">
                <div class="container">
                    <div class="pages">

                        <div class="apps">
                            <p class="iconfooter"> <i class="fa fa-mobile"></i> <span>Mobile Apps</span> </p>
                            <p class="iconfooter_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div class="apps">
                            <p class="iconfooter"> <i class="fa fa-shield"></i> <span>Mobile Apps</span> </p>
                            <p class="iconfooter_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div class="apps">
                            <p class="iconfooter"> <i class="fa fa-globe"></i> <span>Mobile Apps</span> </p>
                            <p class="iconfooter_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div class="apps">
                            <p class="iconfooter"> <i class="fa fa-phone"></i> <span>Mobile Apps</span> </p>
                            <p class="iconfooter_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div class="container">
                    <div class="footer">

                        <div class="linking">
                            <h2>Contact Info</h2>
                            <p> <i class="fa fa-map-marker"></i><span> 2130 Fulton Street, San Diego, CA 94117-1080 USA</span>
                            </p>
                            <p><i class="fa fa-phone"></i><span>1-600-1234-567</span></p>
                            <p><i class="fa fa-phone"></i><span>1-600-1234-567</span></p>
                            <p><i class="fa fa-envelope"></i><span><a href="#!">info@example.com</a></span></p>
                        </div>

                        <div class="linking">
                            <h2>Our Platforms</h2>
                            <p><span><a href="#!">Digital Trade Marketing</a></span></p>
                            <p><span><a href="#!">Software Development</a></span></p>
                            <p><span><a href="#!">Cloud Marketing</a></span></p>
                            <p><span><a href="#!">Cloud Marketing</a></span></p>
                            <p><span><a href="#!">Business Intelligence</a></span></p>
                        </div>

                        <div class="linking">
                            <h2>Media Center</h2>
                            <p><span><a href="#!">Press Release</a></span></p>
                            <p><span><a href="#!">Vision & Values</a></span></p>
                            <p><span><a href="#!">Winning Awards</a></span></p>
                            <p><span><a href="#!">Networking</a></span></p>
                        </div>

                        <div class="linking">
                            <h2>Resources</h2>
                            <p><span><a href="#!">24 / 7 Help Line</a></span></p>
                            <p><span><a href="#!">Nearest Branch</a></span></p>
                            <p><span><a href="#!">Guidance</a></span></p>
                            <p><span><a href="#!">Download</a></span></p>
                            <p><span><a href="#!">Mobile App</a></span></p>
                        </div>

                        <div class="linking">
                            <h2>Other Links</h2>
                            <p><span><a href="#!">Our Services</a></span></p>
                            <p><span><a href="#!">About Us</a></span></p>
                            <p><span><a href="#!">Company Blog</a></span></p>
                            <p><span><a href="#!">Contact Us</a></span></p>
                        </div>

                    </div>
                </div>
                <div class="liner">
                    <div class="container">
                        <div class="leftright">
                            <div class="left">
                                <span>© 2019 Demand. All rights reserved | Design by
                                    <a href="#!">W3Layouts.</a></span>
                            </div>
                            <div class="right">
                                <a href="#!">Privacy Policy</a>
                                <a href="#!">Terms & Conditions</a>
                                <a href="#!">Disclaimer.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>







        </div>





    )
}

export default Header;
