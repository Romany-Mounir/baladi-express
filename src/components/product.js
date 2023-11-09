import { Card, Button } from 'react-bootstrap';

export default function Product({product}) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="product-card">
    <Card.Img variant="top" src={product.image} className="product-image"/>
    <Card.Body>
      <Card.Title>{product.slug}</Card.Title>
      <Card.Text className="product-description">{product.description}</Card.Text>
      <Card.Text className="product-price">${product.price}</Card.Text>
      <Button variant="primary" className="product-button" >Add to Cart</Button>
    </Card.Body>
  </Card>

  )
}
