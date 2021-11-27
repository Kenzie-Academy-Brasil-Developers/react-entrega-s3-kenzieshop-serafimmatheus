import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes` 
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }

`;

export const Lis = styled.li`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    font-size: 30px;
    padding: 10px 20px;
    /* margin: 20px; */
    border-bottom: 2px solid red;
    animation: ${fadeIn} 2s;

    .name {
      display: flex;
      text-align: center;
      padding: 10px;
      h1 {
        font-size: 14px;
      }
    }

    .img {
      width: 100%;
      margin: 0 10px;

      img {
        width: 100px;
        object-fit: contain;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    button {
      margin: 0 auto;
      background-color: #2e7d32;
      border: 1px solid white;
      color: white;
    }
  }
`;
