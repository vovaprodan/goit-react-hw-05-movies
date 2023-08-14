import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
color: black;
text-decoration: none;

&.active {
    color: red;
}
`
export const Nav = styled.nav`
display: flex;
gap: 20px;
padding: 20px 30px;
border-bottom: 1px solid black;
box-shadow: 0 1px 10px gray;
margin-bottom: 20px;
`