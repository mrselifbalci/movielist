import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
		axios
			.get('https://unilive-backend.herokuapp.com/api/getproperties')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);



  return (
    <div className="App">
     App
    </div>
  );
}

export default App;
