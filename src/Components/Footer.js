function Footer() {
    return (
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "lightgrey", height: "300px" }}
      >
        <div class="row d-flex flex-wrap justify-content-between text-black py-5"style={{textAlign:"left"}}>
          <div class="col-sm-3 ">
            <div >
              <h2>E-MART</h2>
              <p className="border-animation-left text-muted">We make our customers happy by giving them a chance to choose from a huge collection of all the premium brands... </p>
            </div>
          </div>
          <div class="col-sm-3 ">
            <div>
              <h5 className="widget-little text-uppercase mb-4">Get to know us</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6 " >
                <li className="menu-item">Company Name</li>
                <li className="menu-item">Careers</li>
                <li className="menu-item">Policy</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3" >
            <div>
              <h5 className="widget-little text-uppercase mb-4">Shop with us</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6" style={{}}>
              <li className="menu-item">Your account</li>
              <li className="menu-item">Your orders</li>
              <li className="menu-item">Your Addresses</li>
              <li className="menu-item">Your Lists</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3" >
            <div>
              <h5 className="widget-little text-uppercase mb-4">Let us help you</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
              <li className="menu-item">Help</li>
              <li className="menu-item">Shipping and Delivery</li>
              <li className="menu-item">returns and Replacements</li>
              <li className="menu-item">Recalls and Product safety alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  