import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./HomeScreen.css"
import Navbar from '../Navbar';


const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredData = shows.filter((item) => item.show.image !== null);
  return (
    <div>
    <Navbar />
    <div className="container">
      <div  className="horizontal-list"><h1>Shows</h1>
      {filteredData.map(show => (
        <div className="item" key={show.show.id}>
          <Link to={`/show/${show.show.id}`}><img src={show.show.image?.medium} alt={show.show.name} /></Link>
          <h3>{show.show.name}</h3>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default HomeScreen;


