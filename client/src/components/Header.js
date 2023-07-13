import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1 fs-smaller px-5">
        <div>
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 5000LKR & Free returns
              </p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <NavLink className='text-white m-0 pe-5 link' to="/login">Login</NavLink>
              <p className="text-white mb-0">
                Hotline :{" "}
                <a className="text-white link" href="tel:+94767722095">
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
                <Link className="text-white link">T4Me</Link>
              </h1>
            </div>
            <div className="col-4 align-items-center">
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
            <div className="col-5 mx-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white link">
                    <img
                      src="\images\icons\compare_white_24dp.svg"
                      alt="compare"
                    />
                    <p>
                      Compare
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white link">
                    <img
                      src="\images\icons\favorite_border_white_24dp.svg"
                      alt="favorite"
                    />
                    <p>
                      Favorite
                      <br />
                      Whishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white link" to='/userlogin'>
                    <img
                      src="\images\icons\person_white_24dp.svg"
                      alt="person"
                    />
                    <p>
                      Login
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white link">
                    <img
                      src="\images\icons\shopping_cart_white_24dp (1).svg"
                      alt="cart"
                    />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-2">
        <div className="contaciner">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center ps-5 gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="\images\icons\widgets_white_24dp.svg"
                        alt="widget"
                      />
                      <span>Shop Catagory</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links ms-4">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink className='link' to="/">Home</NavLink>
                    <NavLink className='link' to="/store">Our Store</NavLink>
                    <NavLink className='link' to="/blog">Blog</NavLink>
                    <NavLink className='link' to="/contact">Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
