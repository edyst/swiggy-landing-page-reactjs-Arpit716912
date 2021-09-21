import './Footer.css'
import arr from './Cities.js';
import appstore1 from './images/images/appstore.png'
import googleplay11 from './images/images/googleplay.png'
import swiggyfooter1 from './images/images/swiggyfooter.png'
import facebook1 from './images/images/facebook.png'
import pininterest1 from './images/images/pininterest.png'
import instagram1 from './images/images/instagram.png'
import twitter1 from './images/images/twitter.png'

function Footer() {
    return (
        <div className="footer_main">
            <div className="grid_m">
                <div>
                    <div className="head">COMPANY</div>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Swiggy Blog</a></li>
                        <li><a href="#">Bug Bounty</a></li>
                        <li><a href="#">Swiggy Super</a></li>
                        <li><a href="#">Swiggy Corporate</a></li>
                        <li><a href="#">Swiggy Instamart</a></li>
                    </ul>
                </div>
                <div>
                    <div className="head">CONTACT</div>
                    <ul>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Partner with us</a></li>
                        <li><a href="#">Ride with us</a></li>
                    </ul>
                </div>
                <div>
                    <div className="head">LEGAL</div>
                    <ul>

                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Refund & Cancellation</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Offer Terms</a></li>
                        <li><a href="#">Phishing & Fraud</a></li>
                    </ul>
                </div>
                <div className="store_link_img">
                    <a href="https://web.archive.org/web/20210903174711/https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                        <img width="100%" src={appstore1}/>
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                        <img width="100%" src={googleplay11}/>
                    </a>
                </div>
            </div>
            <div style={{ marginTop: "2%" }}>
                <div className="head">WE DELIVER TO</div>
                <div className="cities">
                    <div className="city_list_con">
                        <ul className="city-list">
                            {
                                arr.slice(0, 5).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city_list_con">
                        <ul className="city-list">
                            {
                                arr.slice(5, 10).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city_list_con">
                        <ul className="city-list">
                            {
                                arr.slice(10, 15).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city_list_con">
                        <ul className="city-list">
                            {
                                arr.slice(15, 20).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-footer">
                <a href="/web/20210903174711/https://www.swiggy.com/" >
                    <img width="50%" src={swiggyfooter1} />
                </a>
                <div style={{ textAlign: "center", fontSize: "20px", color: "#fff", fontWeight: "300" }}>© 2021 Swiggy</div>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <a href="https://web.archive.org/web/20210903174711/https://www.facebook.com/swiggy.in">
                        <img width="50%" src={facebook1} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://pinterest.com/swiggyindia">
                        <img width="50%" src={pininterest1}/>
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://instagram.com/swiggyindia/">
                        <img width="50%" src={instagram1} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://twitter.com/swiggy_in">
                        <img width="50%" src={twitter1} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Footer;