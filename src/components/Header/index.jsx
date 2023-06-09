import { useState } from "react";
import {
  MyHeader,
  NavigationBar,
  Authentication,
  Bars,
  Sidebar,
} from "./styled";
import logo from "../../assets/images/logo.svg";

export function Header() {
  const [activeSidebar, setActiveSidebar] = useState(false);

  function showSidebar() {
    setActiveSidebar(!activeSidebar);
  }

  return (
    <MyHeader>
      <img src={logo} alt="Logo Icon" />
      <header>
        <NavigationBar>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavigationBar>
        <Authentication>
          <button>Login</button>
          <button>Sign Up</button>
        </Authentication>
        <Bars onClick={showSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </Bars>
      </header>
      <Sidebar active={activeSidebar}>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Resources</a>
        </li>
        <hr />
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </Sidebar>
    </MyHeader>
  );
}
