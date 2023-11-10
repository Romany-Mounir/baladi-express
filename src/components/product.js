import { Card, Button } from "react-bootstrap";
import proImg from "../assets/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.webp";

export default function Product({ product }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} className="product-card">
      <Card.Img variant="top" src={proImg} className="product-image" />
      <Card.Body className="card-content">
        <Card.Title className="product-title">{product.slug}</Card.Title>
        <Card.Subtitle className="product-description"
          dangerouslySetInnerHTML={{
            __html: product.products_locales[0].description,
          }}
        ></Card.Subtitle>

        
        {product.salePrice === 0 ? (
          <Card.Text className="product-price">${product.price}</Card.Text>
        ) : (
          <>
            <Card.Text className="product-sale-price">
              <sup className="product-price-before-sale">${product.price}</sup>{" "}
              ${product.salePrice}
            </Card.Text>
          </>
        )}

        <Button variant="primary" className="product-button">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
