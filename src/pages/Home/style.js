import styled from "styled-components";

export const HeaderHome = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0;
    background-image: linear-gradient(to right, #009688, #4db6ac, #b2dfdb);

    .box-logo {
      h1 {
        font-size: 25px;
        color: white;
      }
    }

    nav {
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        cursor: pointer;
      }

      ul {
        display: ${(props) => (props.ismodal ? "flex" : "none")};
        position: absolute;

        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;

          color: white;
          width: 100%;
          font-size: 25px;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      span {
        display: none;
      }

      ul {
        display: flex;
        position: relative;
        top: 0;
        width: 100%;
        flex-direction: row;

        li:nth-child(1) {
          cursor: pointer;
        }

        li {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          background-color: transparent;
          color: white;
          width: 100%;
          font-size: 30px;
          margin: 0 20px;
        }

        .carrinho::after {
          position: absolute;
          top: 13px;
          left: 11px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px;
          color: blue;
          font-size: 15px;
          content: "${(props) => props.qtdcarrinho || ""} ";
        }
      }
    }
  }
`;

export const MainHome = styled.main`
  @media screen and (min-width: 320px) {
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      list-style-type: none;

      li {
        width: 320px;
        font-size: 30px;
        padding: 20px 0;
        margin: 20px;

        .name-product {
          display: flex;
          text-align: center;
          padding: 10px;
          h1 {
            font-size: 16px;
          }
        }

        .img-product {
          width: 100%;

          img {
            width: 320px;
            height: 240px;
            object-fit: contain;
          }
        }

        .price-product {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
        }

        button {
          margin: 0 auto;
          background-color: #2e7d32;
          border: 1px solid white;
          color: white;
        }
      }
    }
  }
`;
