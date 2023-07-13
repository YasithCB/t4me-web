import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Heading3 from "../components/Heading3";
import CommonBtn from "../components/CommonBtn";

const Contact = () => {
  return (
    <>
      <Meta title={"T4Me | Contact"} />
      <BreadCrumb title="Contact" />

      <div className="contact-wrapper home-wrapper-2 py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d71176.7992579826!2d80.6017348679374!3d6.621129106531044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ed0ae63eebd1%3A0x6c163efbfd2a7db5!2sT4Me%20Apparel%20%26%20Printers!5e0!3m2!1sen!2slk!4v1683647008759!5m2!1sen!2slk"
                height="500"
                className="bordeer-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 contact-inner-wrapper d-flex py-5">
              <div className="contact-inner-col w-50">
                <Heading3 text="Contact" />

                <form className="py-2">
                  <div className="mb-3 pe-5">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3 pe-5">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3 pe-5">
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumber"
                      aria-describedby="emailHelp"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mb-3 pe-5">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      className="w-100 form-control"
                      placeholder="Comments"
                    ></textarea>
                  </div>

                  <CommonBtn text="Submit" />
                </form>
              </div>

              <div className="contact-inner-col">
                <Heading3 text="Get In Touch With Us" />
                <div>
                  <ul className="ps-1 py-3">
                    <li className="d-flex align-items-center my-2">
                      <span class="material-symbols-outlined fs-5 me-3">home</span>
                      <address>
                        No 120/B, Botreejunction, Opanayake,70080, Ratnapura,
                        Sri Lanka.
                      </address>
                    </li>
                    <li className="d-flex align-items-center my-2">
                      <span class="material-symbols-outlined fs-5 me-3">call</span>
                      <a href="tel:+94767722095">+94 76 77 22 095</a>
                    </li>
                    <li className="d-flex align-items-center my-2">
                      <span class="material-symbols-outlined fs-5 me-3">mail</span>
                      <a href="mailto:t4meapparel.printers@gmail.com">
                        t4meapparel.printers@gmail.com
                      </a>
                    </li>
                    <li className="d-flex align-items-center my-2">
                      <span class="material-symbols-outlined fs-5 me-3">info</span>
                      <a>24h</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
