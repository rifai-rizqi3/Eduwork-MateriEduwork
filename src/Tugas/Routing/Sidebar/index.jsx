import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
    <div style = {{height: '100%', width: '300px', position: 'fixed', zIndex: '1', top: '0', left: '0', overflowX: 'hidden'} }>
        <CDBSidebar textColor = "#fff" backgroundColor = "#333" >
            <CDBSidebarHeader>
                <a href = "/" className = "text-decoration-none" style = {{ color: 'inherit' }}>Tugas MERN</a> 
            </CDBSidebarHeader >
            <CDBSidebarContent className = "sidebar-content" >
                <CDBSidebarMenu >
                    <NavLink exact to = "/" activeClassName = "activeClicked" >
                        < CDBSidebarMenuItem icon = "user">Router</CDBSidebarMenuItem>
                    </NavLink >
                    <NavLink to = "/style" activeClassName = "activeClicked" >
                        < CDBSidebarMenuItem icon = "user">Style Component</CDBSidebarMenuItem>
                    </NavLink >
                    <NavLink to = "/form" activeClassName = "activeClicked" >
                        <CDBSidebarMenuItem icon = "user">Form</CDBSidebarMenuItem>
                    </NavLink >
                    <NavLink to = "/lifecycle" activeClassName = "activeClicked" >
                        < CDBSidebarMenuItem icon = "user">Lifecycle</CDBSidebarMenuItem>
                    </NavLink >
                    <NavLink to = "/hook" activeClassName = "activeClicked" >
                        <CDBSidebarMenuItem icon = "user">Hook</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu >
            </CDBSidebarContent >
            < CDBSidebarFooter style = {{ textAlign: 'center' }}>
                < div style = {{ padding: '20px 5px'}}>
                    <img src="https://eduwork.id/images/logo3.png" alt="lgo" className="lg"></img>
                </div >
            </CDBSidebarFooter >
        </CDBSidebar >
    </div >
)};
    
export default Sidebar;