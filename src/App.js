import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getImages = async () => {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_SECRET_KEY}`
    );
    const data = await response.json();
    setData(data.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My First PWA</h2>
        <div className="images">
          {data.map(item => (
            <img
              key={item.id}
              src={item.images.original.url}
              alt={item.title}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
