import './Restaurants.css';
import googleplay1 from './images/images/googleplay.png'
import appstore1 from './images/images/appstore.png'
import restaurantpocket11 from './images/images/restaurantinpocket1.png'
import restaurantpocket22 from './images/images/restaurantinpocket2.png'
function Restaurants(){
    return(
        <div className="restaurant_main">
            <div className="left-side">
                <div style={{marginBottom:"5%",fontSize: "40px",fontWeight: "600",color: "#282c3f"}}>Restaurants in your pocket</div>
                <div style={{marginBottom:"15%",fontSize: "20px",color: "#7e808c",fontWeight: "300"}}>
                Order from your favorite restaurants & track on the go, with the all-new Swiggy app.
                </div>
                <div className="store-links">
                <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android">
                    <img width="90%" src={googleplay1}/>
                </a>
                <a href="https://web.archive.org/web/20210903174711/https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920">
                    <img width="90%" src={appstore1}/>
                </a>
                </div>
            </div>
            <div className="right-side">
                <img style={{paddingBottom:"10%"}} width="45%" src={restaurantpocket11}/>
                <img style={{paddingTop:"10%"}} width="45%" src={restaurantpocket22}/>
            </div>
        </div>
    )
}
export default Restaurants;