import styled from "styled-components";

export const SectionCarrinho = styled.section`
  display: ${(props) => (props.carrinhoBol ? "flex" : "none")};
  position: absolute;
  right: 0;
  flex-direction: column;
  width: 320px;
  background-color: #ccc;
  border: 5px solid #000;

  h1 {
    margin-top: 20px;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
  }
`;
