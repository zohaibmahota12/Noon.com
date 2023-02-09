import React from "react";
import "./home.css";
import Dealcard from "../../Commponents/dealcard/Dealcard";
import Slider from "../../Commponents/slider/Slider";
import Valantaine from "../../Commponents/valantaine/Valantaine";
import Dailyoffercard from "../../Commponents/dailyoffercard/Dailyoffercard";
import WomanFashion from "../../Commponents/womanfeshion/WomanFashion";
import Electronic from "../../Commponents/electronic/Electronic";

function Home() {
  return (
    <>
      <section className="featureBanner">
        <img
          src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"
          alt=""
        />
        <Slider />
      </section>
      {/* $$$$$$$$$$$$$$$$$$      MY Deal section start here         $$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <section className="deal-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mt-2">
              <div className="deal-title">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4 mt-2">
              <div className="deal-title">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4 mt-2">
              <div className="deal-title">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/af1cf1f1-8ce8-415d-87b7-061000aa21a7.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-2">
              <div className="deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="mega-deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="mega-deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-4 mt-2">
              <div className="deal-item-focue">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/4c1dd8f3-4ce0-49b0-a447-7b952d6ac220.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deal-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="mega-deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-2">
              <div className="mega-deal-item">
                <Dealcard />
              </div>
            </div>
            <div className="col-4 mt-2">
              <div className="deal-item-focue">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ################# valantine-day  ################### */}
      <section className="valantine-day">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="valantine-day-store">
                <div className="valantine-day-title">
                  <img
                    src="https://f.nooncdn.com/mpcms/EN0001/assets/2eb1e43b-35c2-4f3e-8285-24e1be18b45c.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Valantaine />
            <Valantaine />
            <Valantaine />
            <Valantaine />
            <Valantaine />
            <Valantaine />
          </div>
        </div>
      </section>

      {/* ############   daily offer  start ################3 */}

      <section className="daliy-offers">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="daily-offer-title">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/db425a54-966f-4a5c-99ae-83bd394fae71.gif"
                  alt=""
                />
              </div>
            </div>
            <Dailyoffercard />
            <Dailyoffercard />
            <Dailyoffercard />
            <Dailyoffercard />
          </div>
        </div>
      </section>
      {/* ############   daily offer end  ################3 */}

      {/* %%%%%%%%%% Slider   %%%%%%%%%%%5 */}
      <section class=" my-slider">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://f.nooncdn.com/mpcms/EN0001/assets/59c788c6-65dd-4d98-bcbb-8593415eef98.gif"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://f.nooncdn.com/mpcms/EN0001/assets/927a807d-9ac6-4a7d-a7fd-e8cad8c191ad.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://f.nooncdn.com/mpcms/EN0001/assets/3d775ad5-786c-4ae8-91e4-457bde5da4f2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ############## banner img ############## */}

      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-img mt-3 mb-3">
              <a href="">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg"
                  alt=""
                />
              </a>
              <div className="banner-img mt-1">
                <a href="">
                  <img
                    src="https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* &&&&&&&&&&&& woman fashion  &&&&&&&&&&&& */}
      <section className="woman-fashion">
        <div className="container-fluid">
          <div className="row">
            <div className="woman-fashion-banner">
              <img
                src="https://f.nooncdn.com/mpcms/EN0001/assets/66728f5e-69e2-456f-85ac-e648dba07cb1.png"
                alt=""
              />
            </div>
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
          </div>
        </div>
      </section>
      <section className="woman-fashion">
        <div className="container-fluid">
          <div className="row">
            <div className="woman-fashion-banner">
              <a href="#">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/1346ad04-a8c9-4846-8ee0-cdfcd3571f6b.png"
                  alt=""
                />
              </a>
            </div>
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
          </div>
        </div>
      </section>

      <section className="woman-fashion">
        <div className="container-fluid">
          <div className="row">
            <div className="woman-fashion-banner">
              <a href="#">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/f4e08013-035b-43f1-b643-8ed152acdca4.png"
                  alt=""
                />
              </a>
            </div>
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
            <WomanFashion />
          </div>
        </div>
        <div className="banner mt-4">
          <a href="">
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/d77d95e0-d7a9-4d23-a387-55f7e5119636.png"
              alt=""
            />
          </a>
        </div>
      </section>

      {/* ((((((((((((((((((((  ELECTRONIC  )))))))))))))))))))) */}

      <section className="electronic">
        <div className="container-fluid">
          <div className="row">
            <div className="electronic-bannar mt-4 mb-4">
              <a href="/">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/9c0007e1-d472-458d-a10d-ec8c1f095964.png"
                  alt=""
                />
              </a>
            </div>
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
          </div>
        </div>
      </section>

      {/* ((((((((((((((((((((  ELECTRONIC  mobil bannnar )))))))))))))))))))) */}

      <section className="electronic">
        <div className="container-fluid">
          <div className="row">
            <div className="electronic-bannar mt-4 mb-4">
              <a href="">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/8c27ca61-4a07-4964-88b9-1828e40b7246.png"
                  alt=""
                />
              </a>
            </div>
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
          </div>
        </div>
      </section>

      {/* ((((((((((((((((((((  ELECTRONIC  laptop bannnar )))))))))))))))))))) */}
      <section className="electronic">
        <div className="container-fluid">
          <div className="row">
            <div className="electronic-bannar mt-4 mb-4">
              <a href="">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/ea1accaf-1be8-461c-a8c6-034503d032a5.png"
                  alt=""
                />
              </a>
            </div>
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
          </div>
        </div>
      </section>

      {/* @@@@@@@@ banner @@@@@@@@@@ */}
      <div className="noon-bannar mt-4 mb-4">
        <a href="/">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/139f8735-8378-436c-a658-9e2f2ea7ebba.gif"
            alt=""
          />
        </a>
      </div>

      {/* @@@@@@@@  BEAUTY banner @@@@@@@@@@ */}
      <section className="electronic">
        <div className="container-fluid">
          <div className="row">
            <div className="electronic-bannar mt-4 mb-4">
              <a href="">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/09f57378-1f7d-49de-89db-7841aa76aa67.png"
                  alt=""
                />
              </a>
            </div>
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
          </div>
        </div>
      </section>

      {/* @@@@@@@@ Fragrance  banner @@@@@@@@@@ */}
      <section className="electronic">
        <div className="container-fluid">
          <div className="row">
            <div className="electronic-bannar mt-4 mb-4">
              <a href="">
                <img
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/1ef1c6be-a392-4ee8-a92a-50d9181d1530.png"
                  alt=""
                />
              </a>
            </div>
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
            <Electronic />
          </div>
        </div>
      </section>
      <div className="noon-bannar mt-4 mb-4">
        <a href="">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default Home;
