import styled from "styled-components";
import * as colors from "../../config/colors";

export const MyStatistics = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.backgroundColor};
  margin: -70px auto 0 auto;
  padding: 140px 0 70px 0;
  position: relative;
  z-index: 0;
  text-align: center;

  h2 {
    margin-top: 200px;
    font-size: 30px;
    font-weight: 700;
    color: ${colors.title};
  }

  h3 {
    font-size: 20px;
    color: ${colors.title};
    margin: 30px 0 10px 0;
  }

  p {
    font-weight: 500;
    color: ${colors.text};
  }

  @media (min-width: 800px) {
    > h2,
    > p {
      width: 530px;
    }

    h2 {
      font-size: 40px;
      margin-top: 80px;
    }
  }
`;

export const Dashboards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  span {
    width: 90%;
    display: grid;
    place-items: center;
    background-color: #fff;
    padding: 25px;
    border-radius: 4px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.03);
    }

    div {
      width: 70px;
      height: 70px;
      display: grid;
      place-items: center;
      background-color: ${colors.statisticsCircle};
      margin-top: -55px;
      border-radius: 50%;
    }
  }

  > div {
    height: 80px;
    border: 3px solid ${colors.button};
  }

  @media (min-width: 800px) {
    flex-direction: row;
    width: 90%;

    span {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: start;

      p {
        text-align: start;
      }
    }

    span:nth-child(3) {
      margin-top: 90px;
    }

    span:nth-child(5) {
      margin-top: 190px;
    }

    > div {
      width: 70px;
      height: 8px;
      background-color: ${colors.button};
      margin-top: 60px;
    }
  }
`;
