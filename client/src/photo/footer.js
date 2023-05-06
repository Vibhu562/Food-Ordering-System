import React from "react"

const Footer1 = () => <footer className="page-footer font-small blue pt-4"   >
    <div className="container-fluid text-center text-md-left ">
        <div className="row justify-content-evenly"  style={{background: "black", color:"white"}} >
            <div className="col-md-3 mb-md-0 m-4">
                <h5 className="text-uppercase">Social</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Youtube</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 m-4">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

export default Footer1