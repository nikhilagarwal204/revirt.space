import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import Tilt from "react-tilt";

function App() {
  const [data, setData] = useState("");

  // Implemented Async Await to fetch all the data.
  useEffect(async () => {
    const url = "https://retoolapi.dev/gTd6gx/data";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div>
      {/* Replaced the main background with particle.js */}
      <Particles id="tsparticles" url="/particles.json" />
      <br />
      <div style={{ color: "white", textAlign: "center" }}>
        <h1>revirt.space</h1>
        <h3>"Design is intelligence made visible!"</h3>
      </div>
      <br />
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-evenly",
        }}
      >
        {data &&
          data.map((item) => (
            <div key={item.id} style={{ width: "40%" }}>
              {/* Implemented a responsive panel using tilt.js */}
              <Tilt>
                {/* The data in the tiles like Tile Name and Tag Line are fetched and displayed */}
                <Card style={{ background: "black", color: "white" }}>
                  <Card.Img
                    style={{ width: "100%", height: "200px" }}
                    variant="top"
                    src={item.img}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Tilt>
              <br />
            </div>
          ))}
      </Container>
    </div>
  );
}

export default App;
