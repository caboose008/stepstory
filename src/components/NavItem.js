import React from 'react';

export default class NavItem extends React.Component{
	render(){
		return <li id={this.props.itemId}><a>{this.props.itemText}</a></li>;
	}
}