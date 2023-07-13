import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const AdminHeader = () => {
  return (
    <>
      <header className="header-top-strip py-1 fs-smaller">
        <div>
          <div className="row px-5">
            <div className="col-6">
              <p className="text-white mb-0">Welcome Admin!</p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <NavLink className="text-white m-0 pe-5" to="/">
                Logout from Admin
              </NavLink>
              <p className="text-white mb-0">
                Hotline :{" "}
                <a className="text-white" href="tel:+94767722095">
                  +94 76 77 22 095
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div>
          <div className="row">
            <div className="col-2">
              <h1 className="ps-5 my-0">
                <Link className="text-white">T4Me</Link>
              </h1>
            </div>
            <div className="col-4 align-items-center"> link
              <div className="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search products here.."
                  aria-label="Search products here.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text text-white" id="basic-addon2">
                  <BsSearch className="fs-7" />
                </span>
              </div>
            </div>
            <div className="col-5 menu-links ms-4">
                  <div className="d-flex align-items-center  gap-30">
                    <NavLink className='text-light link' to="/">Dashboard</NavLink>
                    <NavLink className='text-light link' to="/store">action1</NavLink>
                    <NavLink className='text-light link' to="/blog">action2</NavLink>
                    <NavLink className='text-light link' to="/contact">Contact Us</NavLink>
                  </div>
                </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
