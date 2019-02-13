import React from 'react';
import NavItem from './NavItem';

export default class NavigationList extends React.Component{
	render(){
		const listItems = this.props.listItems;
		let itemTags = listItems.map((item) =>{
			return <NavItem itemId={item.itemId} itemText={item.itemText} />;
		});
		return (			
	    		<nav id="sidebar">	        		
	            		<button type="button" id="sidebarCollapse" className="btn btn-info">
			                <i className="fa fa-th-list"></i>
			            </button> 
				        <div className="sidebar-header active">
				            <h3>Tigran Harutyunyan</h3>
						</div>	        		
					<ul className="list-unstyled components" id='menuitemsid'>{itemTags}</ul>
				</nav>);	
	}
};