import './Features.css';
import feature_11 from './images/images/feature1.png'
import feature_22 from './images/images/feature2.png'
import feature_33 from './images/images/feature3.png'
function Features(){
    return(
        <div className="features_con">
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="40%" src={feature_11}/> 
                <div className="features_headin">No Minimum Order</div>
                <div className="features_details">Order in for yourself or for the group, with no restrictions on order value</div>
            </div>
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="40%" src={feature_22}/>
                <div className="features_headin">Live Order Tracking</div>
                <div className="features_details">Know where your order is at all times, from the restaurant to your doorstep</div>
            </div>
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="48%" src={feature_33}/>
                <div className="features_headin">Lightning-Fast Delivery</div>
                <div className="features_details">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
            </div>
        </div>
    )
}
export default Features;