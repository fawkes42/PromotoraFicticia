import styled from 'styled-components';
import logo from '../../assets/images/logoSand.png';

export const Logo = styled.div`
  width: 30vh;
  height: 100%;
  background: url(${logo}) no-repeat center;
  background-size: contain;
`;

export const MenuItem = styled.a`
  font-family: Verdana, sans-serif;
  font-weight: bolder;
  color: var(--darkSand);
  font-size: clamp(0.7rem, 0.9vw, 1rem);

  &:hover {
    color: var(--black);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10%;
  background: rgba(0, 0, 0, 0.05);
`;
