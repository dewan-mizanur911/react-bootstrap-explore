import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Articles = (props) => {
    // console.log(props.article);
    const { urlToImage, title, description } = props.article;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage}/>
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              {description.slice(0,200)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Articles;