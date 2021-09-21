function LeftSection() {
  return (<div className="left-section">
      <div style={{ width: "50%" }}>
          <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
              width="68%" />
      </div>
      <div style={{ textAlign: "right", marginTop: "2%", width: "50%" , height:"10%" }}>
          <a className="login" href="#">Login</a>
          <button className="signup-btn">
              <a className="sign-up" href="#">Sign up</a></button>
      </div>
  </div>)
}

export default LeftSection;