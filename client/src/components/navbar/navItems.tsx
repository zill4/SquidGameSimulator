import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { RootStore } from "../../utils/TypeScript";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-bold
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};
`;

export function NavItems() {
  const { auth } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (auth.user) {
    return (
      <ListContainer>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/" onClick={() => handleLogout()}>
            Logout
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/operations">Operations</Link>
        </NavItem>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/signup">Signup</Link>
      </NavItem>
      <NavItem>
        <Link to="/login">Login</Link>
      </NavItem>
      <NavItem>
        <Link to="/game">Game</Link>
      </NavItem>
    </ListContainer>
  );
}
