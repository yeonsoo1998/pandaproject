import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, CardGroup } from "react-bootstrap";
import "./temp_content.css";

function CardComponent() {
  return (
    <div className="card_wrap">
      <div className="content_card">
        <CardGroup>
          <Card className="card">
            <Link to="category/novel">
              <Card.Img className="Card_img" variant="top" src="img/book.png" />
            </Link>
            <Card.Body>
              <Card.Title>책</Card.Title>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img
              className="Card_img"
              variant="top"
              src="img/fashion.png"
            />
            <Card.Body>
              <Card.Title>패션</Card.Title>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="Card_img" variant="top" src="img/used.png" />
            <Card.Body>
              <Card.Title>중고 거래</Card.Title>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img
              className="Card_img"
              variant="top"
              src="img/collectibles.png"
            />
            <Card.Body>
              <Card.Title>수집품</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default CardComponent;
