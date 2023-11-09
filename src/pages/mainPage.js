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

  const [fetchedRestaurants, setFetchedRestaurants] = useState([]);
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    const fetchResturantsData = async () => {
      try {
        const response = await axios.get(restaurantAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setFetchedRestaurants(response.data);
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
        setFetchedCategories(response.data);
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
        setFetchedProducts(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      }
    };
    fetchResturantsData();
    fetchCategoriesData();
    fetchProductsData();
  }, []);

  console.log("restaurants data ", fetchedRestaurants);
  console.log("categories data ", fetchedCategories);
  console.log("products data", fetchedProducts);
  return (
    <>
    <div className="products-list">
    {fetchedProducts.products.map((item) => (
         <div className="product-card" key={item.id}> {item.slug} </div>))}
    </div>
      
    </>
  );
}
