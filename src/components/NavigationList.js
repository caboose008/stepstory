import React from 'react';
import NavItem from './NavItem';

export default class NavigationList extends React.Component{
	render(){
		const listItems = this.props.listItems;
		let itemTags = listItems.map((item) =>{
			return <NavItem itemId={item.itemId} itemText={item.itemText} />;
		});
		return <ul>{itemTags}</ul>;
	}
};