import React from "react";
import { Card } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';

const Frase = (props) => {
  return (
    <Card className='w-100 my-5'>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.personaje.image} alt={props.personaje.character} />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>Personaje: {props.personaje.character}</Card.Title>
            
            <Card.Text>
              frase del personaje: {props.personaje.quote}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
