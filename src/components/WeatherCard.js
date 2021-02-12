import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = (props) => {
  const date = new Date(props.results.dt);
  return (
    <Card className="main-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${props.results.weather[0].icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{props.results.name}</Card.Title>
        <Card.Title>{props.results.sys.country}</Card.Title>
        <p>{props.results.city}</p>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>

        <p>Min: {props.results.main.temp_min}</p>

        <p>Max: {props.results.main.temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
