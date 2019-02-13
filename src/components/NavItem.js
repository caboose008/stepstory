import React from 'react';
import testServer from '../client/server';

export default class NavItem extends React.Component{
	handleClick(){
		testServer();
	}
	render(){
		return <li id={this.props.itemId} onClick={this.handleClick}><a href="#">{this.props.itemText}</a></li>;
	}
}