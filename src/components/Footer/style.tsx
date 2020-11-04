import styled from 'styled-components';

export const MenuItem = styled.a`
  font-family: Verdana, sans-serif;
  font-weight: bolder;
  color: var(--white);
  font-size: clamp(0.7rem, 0.9vw, 1rem);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  height: 10vh;
  margin-top: 5vh;

  background: var(--black);
`;
