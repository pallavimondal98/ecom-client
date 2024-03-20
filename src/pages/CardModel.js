import React from 'react';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const CardModel = ({ data }) => {
  // Add a check to ensure that 'data' is defined
  if (!data) {
    return null; // or handle the case when 'data' is undefined
  }

  let { imgSrc, price, title } = data;

  return (
    <Card className='p-0 h-100 shadow' style={{width: "15rem"}}>
      <Card.Img variant="top" src={imgSrc} className='img-fluid card-img' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button className="btn-warning ">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardModel;
