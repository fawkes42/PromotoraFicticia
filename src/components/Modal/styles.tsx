import styled from 'styled-components';
import logo from '../../assets/images/logoSand.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);

  & > div {
    background: var(--white);
    height: 80%;
    width: 60%;

    & > header {
      height: 7vh;
      background: rgba(0, 0, 0, 0.09);

      display: flex;
      align-items: center;
      position: relative;

      & > #logo {
        background: url(${logo}) center no-repeat;
        background-size: contain;
        width: 95%;
        height: 80%;
      }

      & > button {
        width: 5%;
        background: rgba(0, 0, 0, 0);
      }
    }

    & > iframe {
      width: 100%;
      height: 100%;
    }
  }
`;
