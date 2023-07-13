import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="\images\send_white_24dp.svg" alt="send" />
                <h2 className="text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your E-mail"
                  aria-label="Your E-mail"
                  aria-describedby="basic-addon2"
                />
                <span
                  style={{ borderColor: "#1E1E1E" }}
                  className="input-group-text text-white"
                  id="basic-addon2"
                >
                  <button type="button" className="btn btn-blue">
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h5 className="text-white mb-4">Contact Us</h5>
              <div>
                <address className="text-white">
                  No 120/B, <br />
                  Botreejunction, <br />
                  Opanayaka, <br />
                  70080, <br />
                  Ratnapura, <br />
                  Sri Lanka
                </address>
                <a href="tel:+94767722095" className="mt-4 d-block text-white">
                  +9476 77 22 095
                </a>
                <a
                  href="mailto:t4meapparel.printers@gmail.com"
                  className="mt-1 d-block text-white mb-3"
                >
                  t4meapparel.printers@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h5 className="text-white mb-4">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2">Privacy Policy</Link>
                <Link className="text-white py-2">Refund Policy</Link>
                <Link className="text-white py-2">Shipping Policy</Link>
                <Link className="text-white py-2">Terms & Conditions</Link>
                <Link className="text-white py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-4">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2">About Us</Link>
                <Link className="text-white py-2">FAQ</Link>
                <Link className="text-white py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-4">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2">Plain T-shirts</Link>
                <Link className="text-white py-2">Printed T-shirts</Link>
                <Link className="text-white py-2">Rib T-shirts</Link>
                <Link className="text-white py-2">Frocks</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Yasith C Bandara
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
