import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import NavigationList from './components/NavigationList';
import MainFrame from './components/MainFrame';


const item1 = {itemText:"First item", itemId : "id1"};
const item2 = {itemText:"Second item", itemId : "id2"};
const item3 = {itemText:"Last item", itemId : "id3"};
const items = [item1, item2, item3];

class App extends Component {
  render() {
    return (
    	<div className="wrapper">
      	<NavigationList listItems={items}/>
      	<MainFrame />
      	</div>
    );
  }
}


export default App;

