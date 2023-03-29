import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <SidebarRowDropDown />
        <SidebarRowDropDown />
        <SidebarRowDropDown />
        <SidebarRowDropDown />
        <SidebarRowDropDown />
        <SidebarRowDropDown />
      </ul>
    </div>
  );
};

export default Sidebar;

function SidebarRowDropDown() {
  return (
    <li className="sidebar__list-dropdown">
      <div className="sidebar__list-dropdown__title-wrapper">
        <p className="sidebar__list-dropdown__title-text">Introduction</p>
      </div>
      <div className="sidebar__list-dropdown__child-wrapper">
        <ul className="sidebar__list-dropdown__child-list">
          <li className="sidebar__list-dropdown__child-list__item">
            <div className="sidebar__list-dropdown__child-list__item-wrapper">
              <p className="sidebar__list-dropdown__child-list__item-text">
                Key Capabilities
              </p>
            </div>
          </li>
          <li className="sidebar__list-dropdown__child-list__item">
            <div className="sidebar__list-dropdown__child-list__item-wrapper">
              <p className="sidebar__list-dropdown__child-list__item-text">
                Key Component
              </p>
            </div>
          </li>
          <li className="sidebar__list-dropdown__child-list__item">
            <div className="sidebar__list-dropdown__child-list__item-wrapper">
              <p className="sidebar__list-dropdown__child-list__item-text">
                User Onboarding
              </p>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}
