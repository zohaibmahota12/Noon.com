import React from "react";
import "./header2.css";

function Header2() {
  return (
    <>
      <section className="header">
        <header>
          <nav>
            <a className="navbar-brand" href="">
              <div className="navbar-logo-image">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                  alt=""
                />
              </div>
            </a>
            <form>
              <input
                className="form-control "
                type="search"
                placeholder="What are you looking For?"
                aria-label="Search"
              />
            </form>
            <ul>
              <li>
                <a href="#">Sign In</a>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
                  alt=""
                />
              </li>
              <li>
                <a href="#">Card</a>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
                  alt=""
                />
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Header2;
