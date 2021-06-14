import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Users from './components/Users/Users'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments'
import Ratings from './components/Ratings/Ratings';
import Categories from './components/Categories/Categories';
import Movies from './components/Movies/Movies';
import Dashboard from './components/Dashboard/Dashboard';
import Shows from './components/Shows/Shows';
import AddCategory from './components/Categories/AddCategory';
import AddMovie from './components/Movies/AddMovie';
import AddShow from './components/Shows/AddShow';
import Footer from './components/Footer/Footer';






function App() {

  const [users, setUsers] = useState([]);
  const [comments,setComments]=useState([])

 
  useEffect(() => {
		axios
			.get('https://movieapp-server.herokuapp.com/users')
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  useEffect(() => {
		axios
			.get('https://movieapp-server.herokuapp.com/comments')
			.then((res) => {
				console.log(res.data)
				setComments(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);




  return (
    <div className="app">
		<Router>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/addcategory" component={AddCategory}/>
				<Route exact path="/addmovie" component={AddMovie}/>
				<Route exact path="/addshow" component={AddShow}/>
				<Route
				  exact path="/userlist"
				  render={() => <Users users={users} />}
				/>
				<Route
				  exact path="/commentlist"
				  render={() => <Comments comments={comments}/>}
				/>
				<Route
				  exact path="/ratings"
				  render={() => <Ratings/>}
				/>
				<Route
				  exact path="/categories"
				  render={() => <Categories/>}
				/>
				<Route
				  exact path="/movielist"
				  render={() => <Movies/>}
				/>
				<Route
				  exact path="/shows"
				  render={() => <Shows/>}
				/>
			</Switch>
			<Footer/>
		</Router>
    </div>
  );
}

export default App; 


