import React from 'react';

function CityList(){
    return(
    <ul style={{padding:"0",listStyle:"none",display:"flex",flexWrap:'wrap',justifyContent:'space-between',width:"100%"}}>
                    <li>
                        <a className="dark-city" href="/web/20210903174711/https://www.swiggy.com/ahmedabad">Ahmedabad</a>
                    </li>
                    <li>
                        <a className="light-city" href="/web/20210903174711/https://www.swiggy.com/bangalore">Bangalore</a>
                    </li>
                    <li>
                        <a className="dark-city" href="/web/20210903174711/https://www.swiggy.com/chennai">Chennai</a>
                    </li>
                    <li>
                        <a className="light-city" href="/web/20210903174711/https://www.swiggy.com/delhi">Delhi</a>
                    </li>
                    <li>
                        <a className="dark-city" href="/web/20210903174711/https://www.swiggy.com/gurgaon">Gurgaon</a>
                    </li>
                    <li>
                        <a className="light-city" href="/web/20210903174711/https://www.swiggy.com/hyderabad">Hyderabad</a>
                    </li>
                    <li>
                        <a className="dark-city" href="/web/20210903174711/https://www.swiggy.com/kolkata">Kolkata</a>
                    </li>
                    <li>
                        <a className="light-city" href="/web/20210903174711/https://www.swiggy.com/mumbai">Mumbai</a>
                    </li>
                    <li>
                        <a className="dark-city" href="/web/20210903174711/https://www.swiggy.com/pune">Pune</a>
                    </li>
                    <li>
                        <a className="light-city" href="#">& more.</a>
                    </li>
                </ul>)
}

export default CityList;