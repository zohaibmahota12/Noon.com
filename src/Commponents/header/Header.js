import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-cust">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <div className="navbar-logo-image">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                alt=""
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle p-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="devl-logo pe-2">
                    <img
                      src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                      alt=""
                    />
                  </div>
                  deliver To <br /> <strong> &nbsp; Dubai</strong>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex me-auto" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="What are you looking For?"
                aria-label="Search"
              />
            </form>
            <ul className="sign-in">
              <li>
                <a href="#">العربية</a>
              </li>
              <div className="divider"></div>
              <li>
                <a href="">
                  <strong>Sign In</strong>
                </a>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
                  alt=""
                />
              </li>
              <div className="divider"></div>
              <li>
                <a href="">
                  <strong>Cart</strong>
                </a>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
