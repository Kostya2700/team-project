import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
import { Logo } from 'components/Logo/Logo'
import css from './Nav.module.css';

export const Nav = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find Pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>

      {/* {isLoggedIn && <NavLink to="NewsPage">News</NavLink>} */}
    </Nav>
  )
}
