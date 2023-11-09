import React, { useEffect, useState } from "react";
// import { CaretDown } from "./CaretDown";
// import { NavigationArrow } from "./NavigationArrow";
import "./style.css";
import axios from "axios";
export default function MainPage() {
  const restaurantAPI =
    "https://devapi.baladiexpress.com/v4/stores/all-new/food?limit=18&page=1&sort_by=fastest_delivery&latitude=25.3185782&longitude=51.5003526";
  const categoryAPI =
    "https://devapi.baladiexpress.com/v4/stores/detail/1?latitude=25.3185782&longitude=51.5003526";
  const productAPI =
    "https://devapi.baladiexpress.com/v4/products/all-new/baladi-express-store?page=1&limit=16&sort_by=latest&order_by=desc&latitude=25.3185782&longitude=51.500352";
  const apiKey = "baladi_dev_pX2Rldl9LSFlVSVM3TDN4YTA3ZHNmZ2R5V0E4ZE1S";

  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchResturantsData = async () => {
      try {
        const response = await axios.get(restaurantAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setRestaurants(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      }
    };
    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get(categoryAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setCategories(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      }
    };
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(productAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setProducts(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      }
    };
    fetchResturantsData();
    fetchCategoriesData();
    fetchProductsData();
  }, []);
  
  console.log("restaurants data ", restaurants);
  console.log("categories data ", categories);
  console.log("products data", products);
  return (
    <>
      <div className="baladi-mart">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="frame">
              <div className="group">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image-177-6.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167-19.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-3">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image-177-7.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167-20.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175-13.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-14.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-21.svg"
                    />
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175-15.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-16.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-22.svg"
                    />
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176-7.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-23.svg"
                    />
                  </div>
                </div>
                <div className="group-7">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176-8.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-24.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-fields-wrapper">
              <div className="text-fields">
                <div className="text-wrapper-9">Search</div>
                <img
                  className="placeholder"
                  alt="Placeholder"
                  src="placeholder.svg"
                />
              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-10">EN</div>
            </div>
            <img className="frame-5" alt="Frame" src="frame-4.svg" />
            <div className="frame-6">
              <div className="overlap-2">
                <img className="group-8" alt="Group" src="group-48096148.png" />
                <div className="frame-wrapper">
                  <div className="frame-7">
                    <div className="text-wrapper-11">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group-9">
                {/* <CaretDown className="phosphor-icons" /> */}
                {/* <NavigationArrow className="navigation-arrow" /> */}
                <div className="text-wrapper-12">Lusail, Qatar</div>
              </div>
            </div>
            <img className="layer" alt="Layer" src="layer-1.svg" />
            <div className="overlap-3">
              <div className="frame-8" />
              <div className="frame-9">
                <div className="group-10">
                  <div className="group-11">
                    <div className="group-12">
                      <div className="overlap-4">
                        <img
                          className="twitter"
                          alt="Twitter"
                          src="twitter.svg"
                        />
                        <img
                          className="instagram"
                          alt="Instagram"
                          src="instagram.svg"
                        />
                        <img
                          className="facebook"
                          alt="Facebook"
                          src="facebook.svg"
                        />
                        <img className="line" alt="Line" src="line-2.svg" />
                        <p className="p">
                          © 2023 Baladi Express, All Rights Reserved
                        </p>
                        <div className="overlap-5">
                          <div className="image-wrapper">
                            {/* <img className="image-4" alt="Image" src="image-23.png" /> */}
                          </div>
                          <p className="download-on-the-app">
                            <span className="span">
                              Download on the <br />
                            </span>
                            <span className="text-wrapper-13">App Store</span>
                          </p>
                        </div>
                        <div className="frame-10">
                          {/* <img className="image-5" alt="Image" src="image-24.png" /> */}
                          <p className="GET-IT-ON-google">
                            <span className="text-wrapper-14">
                              GET IT ON
                              <br />
                            </span>
                            <span className="text-wrapper-15">Google Play</span>
                          </p>
                        </div>
                        <img
                          className="group-13"
                          alt="Group"
                          src="group-48096093.png"
                        />
                        <div className="text-wrapper-16">Become a Partner</div>
                        <div className="text-wrapper-17">
                          subscribe to our newsletter
                        </div>
                        <div className="group-14">
                          <div className="overlap-group-3">
                            <div className="telegram-wrapper">
                              <img
                                className="telegram"
                                alt="Telegram"
                                src="telegram.svg"
                              />
                            </div>
                            <div className="text-wrapper-18">Your email</div>
                          </div>
                        </div>
                        <div className="overlap-6">
                          <img
                            className="vector"
                            alt="Vector"
                            src="image.svg"
                          />
                          <img
                            className="vector-2"
                            alt="Vector"
                            src="vector-2.svg"
                          />
                        </div>
                        <div className="text-wrapper-19">Contact us</div>
                        <div className="text-wrapper-20">FAQ</div>
                        <div className="text-wrapper-21">About us</div>
                        <div className="text-wrapper-22">Let us help you</div>
                        <div className="text-wrapper-23">Get to know us</div>
                        <div className="text-wrapper-24">Privacy Policy</div>
                        <div className="text-wrapper-25">
                          Delivery Information
                        </div>
                        <div className="t-c">T&amp;C</div>
                        <div className="text-wrapper-26">Warranty Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-15">
              <div className="frame-11">
                <div className="fresh-fruits-wrapper">
                  <div className="fresh-fruits">
                    Fresh Fruits &amp; Vegetables
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-12">
              <div className="group-16">
                <div className="home-page">Home Page &gt;</div>
                <div className="baladi-express-mart">
                  Baladi Express Mart &gt;
                </div>
                <div className="fresh-fruits-2">
                  Fresh Fruits &amp; Vegetables
                </div>
              </div>
            </div>
            <div className="frame-13">
              <div className="group-17">
                <div className="frame-14">
                  <div className="text-wrapper-27">Fresh Fruits</div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-28">Fresh Vegetables</div>
                </div>
                <div className="frame-16">
                  <div className="text-wrapper-28">Combo Basket</div>
                </div>
              </div>
            </div>
            <div className="frame-17">
              <div className="group-18">
                <div className="frame-18">
                  <div className="group-19">
                    <img className="vector-3" alt="Vector" src="vector-3.svg" />
                    <div className="text-wrapper-29">Sort</div>
                    <img className="vector-4" alt="Vector" src="vector-4.svg" />
                  </div>
                </div>
                <div className="frame-19">
                  <div className="text-wrapper-30">Apple</div>
                </div>
                <div className="frame-20">
                  <div className="text-wrapper-31">Banana</div>
                </div>
                <div className="frame-21">
                  <div className="text-wrapper-32">Melon</div>
                </div>
                <div className="frame-22">
                  <div className="text-wrapper-33">Cherry</div>
                </div>
                <div className="frame-23">
                  <div className="text-wrapper-34">Pinapple</div>
                </div>
                <div className="frame-24">
                  <div className="text-wrapper-35">Watermelon</div>
                </div>
                <div className="frame-25">
                  <div className="text-wrapper-36">Grapes</div>
                </div>
                <div className="frame-26">
                  <div className="text-wrapper-37">Pears</div>
                </div>
                <div className="frame-27">
                  <div className="text-wrapper-33">Berries</div>
                </div>
                <div className="frame-28">
                  <div className="text-wrapper-33">Lemon</div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="group-20">
                <div className="frame-30">
                  <div className="text-wrapper-34">Pinapple</div>
                </div>
                <div className="frame-31">
                  <div className="text-wrapper-35">Watermelon</div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-36">Grapes</div>
                </div>
                <div className="frame-33">
                  <div className="text-wrapper-37">Pears</div>
                </div>
                <div className="frame-34">
                  <div className="text-wrapper-33">Berries</div>
                </div>
                <div className="frame-35">
                  <div className="text-wrapper-33">Lemon</div>
                </div>
              </div>
            </div>
            <div className="frame-36">
              <div className="group-21">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image-177.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-3">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167-2.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-2.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-3.svg"
                    />
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175-3.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-4.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-4.svg"
                    />
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-5.svg"
                    />
                  </div>
                </div>
                <div className="group-7">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176-2.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-37">
              <div className="overlap-7">
                <div className="group-22">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="frame-2">
                          {/* <img className="image" alt="Image" src="image-177-2.png" /> */}
                          <img
                            className="img"
                            alt="Frame"
                            src="frame-48096167-7.svg"
                          />
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="frame-2">
                          {/* <img className="image" alt="Image" src="image-177-3.png" /> */}
                          <img
                            className="img"
                            alt="Frame"
                            src="frame-48096167-8.svg"
                          />
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="overlap-group-2">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-5.png" /> */}
                          </div>
                          <div className="group-2">
                            <div className="text-wrapper">
                              Parilla Spaghetti N 3
                            </div>
                            <div className="text-wrapper-2">500 G</div>
                            <div className="text-wrapper-3">60 QAR</div>
                            <div className="text-wrapper-4">120 QAR</div>
                            <div className="div-wrapper">
                              <div className="text-wrapper-5">ADD</div>
                            </div>
                          </div>
                          <div className="div">
                            <div className="frame-2">
                              {/* <img className="image-2" alt="Image" src="image-175-6.png" /> */}
                            </div>
                            <div className="text-wrapper-6">
                              Parilla Spaghetti N 3
                            </div>
                            <div className="text-wrapper-7">500 G</div>
                            <div className="frame-3">
                              <div className="text-wrapper-8">
                                Price on selection
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="img"
                        alt="Frame"
                        src="frame-48096167-9.svg"
                      />
                    </div>
                  </div>
                  <div className="group-5">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="overlap-group-2">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-7.png" /> */}
                          </div>
                          <div className="group-2">
                            <div className="text-wrapper">
                              Parilla Spaghetti N 3
                            </div>
                            <div className="text-wrapper-2">500 G</div>
                            <div className="text-wrapper-3">60 QAR</div>
                            <div className="text-wrapper-4">120 QAR</div>
                            <div className="div-wrapper">
                              <div className="text-wrapper-5">ADD</div>
                            </div>
                          </div>
                          <div className="div">
                            <div className="frame-2">
                              {/* <img className="image-2" alt="Image" src="image-175-8.png" /> */}
                            </div>
                            <div className="text-wrapper-6">
                              Parilla Spaghetti N 3
                            </div>
                            <div className="text-wrapper-7">500 G</div>
                            <div className="frame-3">
                              <div className="text-wrapper-8">
                                Price on selection
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="img"
                        alt="Frame"
                        src="frame-48096167-10.svg"
                      />
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="frame-2">
                          {/* <img className="image-3" alt="Image" src="image-176-3.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="img"
                        alt="Frame"
                        src="frame-48096167-11.svg"
                      />
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="div">
                        <div className="frame-2">
                          {/* <img className="image-3" alt="Image" src="image-176-4.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="img"
                        alt="Frame"
                        src="frame-48096167-12.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-38">
                  <img className="group-23" alt="Group" src="group-6.png" />
                  <div className="text-wrapper-38">Categories</div>
                </div>
              </div>
            </div>
            <div className="frame-39">
              <div className="group">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image-177-4.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167-13.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-3">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image" alt="Image" src="image-177-5.png" /> */}
                        <img
                          className="img"
                          alt="Frame"
                          src="frame-48096167-14.svg"
                        />
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175-9.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-10.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-15.svg"
                    />
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="overlap-group-2">
                        <div className="frame-2">
                          {/* <img className="image-2" alt="Image" src="image-175-11.png" /> */}
                        </div>
                        <div className="group-2">
                          <div className="text-wrapper">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-2">500 G</div>
                          <div className="text-wrapper-3">60 QAR</div>
                          <div className="text-wrapper-4">120 QAR</div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">ADD</div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="frame-2">
                            {/* <img className="image-2" alt="Image" src="image-175-12.png" /> */}
                          </div>
                          <div className="text-wrapper-6">
                            Parilla Spaghetti N 3
                          </div>
                          <div className="text-wrapper-7">500 G</div>
                          <div className="frame-3">
                            <div className="text-wrapper-8">
                              Price on selection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-16.svg"
                    />
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176-5.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-17.svg"
                    />
                  </div>
                </div>
                <div className="group-7">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div">
                      <div className="frame-2">
                        {/* <img className="image-3" alt="Image" src="image-176-6.png" /> */}
                      </div>
                      <div className="group-2">
                        <div className="text-wrapper">
                          Parilla Spaghetti N 3
                        </div>
                        <div className="text-wrapper-2">500 G</div>
                        <div className="text-wrapper-3">60 QAR</div>
                        <div className="text-wrapper-4">120 QAR</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-5">ADD</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img"
                      alt="Frame"
                      src="frame-48096167-18.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-24">
              <div className="group-25">
                <div className="object-wrapper">
                  <div className="object">
                    <div className="overlap-group-4">
                      <img
                        className="vector-5"
                        alt="Vector"
                        src="vector-5.svg"
                      />
                      <img
                        className="vector-6"
                        alt="Vector"
                        src="vector-6.svg"
                      />
                      <img
                        className="vector-7"
                        alt="Vector"
                        src="vector-7.svg"
                      />
                      <img
                        className="vector-8"
                        alt="Vector"
                        src="vector-8.svg"
                      />
                      <img
                        className="vector-9"
                        alt="Vector"
                        src="vector-9.svg"
                      />
                      <img
                        className="vector-10"
                        alt="Vector"
                        src="vector-10.svg"
                      />
                      <img
                        className="vector-8"
                        alt="Vector"
                        src="vector-11.svg"
                      />
                      <img
                        className="vector-11"
                        alt="Vector"
                        src="vector-12.svg"
                      />
                      <div className="group-26">
                        <div className="frame-40">
                          <div className="text-wrapper-11">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
