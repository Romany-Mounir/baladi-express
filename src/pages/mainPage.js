import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import loadin from '../assets/loading_3.svg';
import "./style.css";

import Product from "../components/product";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResturantsData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(restaurantAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });

        setFetchedRestaurants(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchCategoriesData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(categoryAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });

        setFetchedCategories(response.data);
      } catch (e) {
        console.error("error fetching data: ", e);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchProductsData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(productAPI, {
          headers: {
            "x-api-key": apiKey,
          },
        });

        setFetchedProducts(response.data.products);
      } catch (e) {
        console.error("error fetching data: ", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResturantsData();
    fetchCategoriesData();
    fetchProductsData();
  }, []);

  console.log("restaurants data ", fetchedRestaurants);
  console.log("categories data ", fetchedCategories);
  console.log("products data", fetchedProducts);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else if (!data || data.length === 0) {
  //   return <p>No data available.</p>;
  // } else {
  //   return (
  //     <div>
  //       {data.map((item) => (
  //         <p key={item.id}>{item.name}</p>
  //       ))}
  //     </div>
  //   );
  // }
 
  return (
    <>
      {isLoading ? (
        
          
          <img className="loader" alt='' src={loadin} width='150px'/>
        
      ) : (
        <Container >
          <h1 className="mt-5 mb-4">Product Page</h1>
          <Row className="products-list">
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
