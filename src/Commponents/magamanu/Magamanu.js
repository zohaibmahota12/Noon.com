import React from "react";
import "./magamanu.css";

function Magamanu() {
  return (
    <>
      <section className="manubar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="all-categories-manu">
                <div className="mainCategoriesClass ">
                  <div className=" jsx-undefined trigger">
                    <a href="">All Categories</a>
                  </div>
                  <div className="jsx-undefined menu ">
                    <div className="jsx-undefined category">
                      <span className="jsx-undefined selected">
                        <a href="">Electronics & Mobiles</a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <h5 className="col-4 text-center m-2">Electornic </h5>
                <h5 className=" col-4 text-center m-2">Man </h5>
                <h5 className="col-4 text-center m-2">Woman </h5>
                <h5 className=" col-4 text-center m-2">Home </h5>
                <h5 className=" col-4 text-center m-2">Beauty </h5>
                <h5 className="col-4 text-center m-2">Sports </h5>
                <h5 className=" col-4 text-center m-2">Baby </h5>
                <h5 className=" col-4 text-center m-2">Best Sale</h5> */}
                <div className=" col-4  noon-grocery m-2 ms-4">
                  <img
                    src="https://z.nooncdn.com/s/app/com/noon/images/en_grocery_logo_gif_v3.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Magamanu;
