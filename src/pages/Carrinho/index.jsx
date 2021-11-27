import { SectionCarrinho } from "./style";
import { Cards } from "../../Components/Cards";

import { useSelector } from "react-redux";

export const Carrinho = ({ carrinhoBol }) => {
  const { productsFilter } = useSelector((store) => store);

  //   const local = localStorage.getItem("@Cards:");

  //   console.log(productsFilter);
  return (
    <SectionCarrinho carrinhoBol={carrinhoBol}>
      <h1>Carrinho</h1>

      <ul>
        {productsFilter.length > 0
          ? productsFilter.map((elem) => (
              <>
                <Cards
                  name={elem.name}
                  id={elem.id}
                  image={elem.image}
                  price={elem.price}
                ></Cards>
                <span>
                  Total: R$
                  {productsFilter.reduce(
                    (valAnterior, valAtual) => valAtual.price + valAnterior,
                    0
                  )}
                </span>
              </>
            ))
          : "Carrinho vazio"}
      </ul>
    </SectionCarrinho>
  );
};
