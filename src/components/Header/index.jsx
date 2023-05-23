import {
  MyHeader,
  NavigationBar,
  Authentication,
  Bars,
  Sidebar,
} from "./styled";
import logo from "../../assets/images/logo.svg";

export function Header() {
  return (
    <>
      <MyHeader>
        <img src={logo} alt="Logo Icon" />
        <NavigationBar>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavigationBar>
        <Authentication>
          <button>Login</button>
          <button>Sign Up</button>
        </Authentication>
        <Bars>
          <div></div>
          <div></div>
          <div></div>
        </Bars>
      </MyHeader>
      <Sidebar>
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
    </>
  );
}