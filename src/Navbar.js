import React from 'react';
import CityList from './CityList';
import LeftSection from './LeftSection';
import Form from './Form';
import mainImage from './images/images/main-image.jpg'

var c=1
var arr=["Movie marathon?","Game night?","Late night at office?","Unexpected guests?","Cooking gone wrong?","Hungry?"]
window.onload=()=>{    
setInterval(()=>{
        document.getElementById("nav-head").innerHTML=arr[c]
        c++
        if(c===6)
        c=0
        console.log(c)
    },4000)
}
function Navbar(){
    return(
        <div className="navbar">
            <div className="main-container" style={{padding:"4% 0% 6% 6%"}}>
            <LeftSection />
            <div>
                <div>
                <marquee behavior="scroll" direction="up" scrollamount="3.8">
                <h1 id="nav-head" className="nav-headings">Movie marathon?</h1>
                </marquee>
                </div>
                <h2 style={{fontSize: "24px",fontWeight: "300",marginTop:'1%',color: "#686b78"}}>Order food from favourite restaurants near you.</h2>
            </div>
            <Form />
            <div>
                <h3 style={{fontWeight: "400",fontSize: "15px",color: "#a9abb2"}}>POPULAR CITIES IN INDIA</h3>
                <CityList />
            </div>

            </div>
            <div className="right-section">
                <img className="image" style={{float:"right"}}
                src={mainImage}
                width="90%" height="100%"/>
            </div>
        </div>
    )
}

export default Navbar;