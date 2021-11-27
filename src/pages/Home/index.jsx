import { HeaderHome, MainHome } from "./style";
import { FiLogIn, FiMenu, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../Components/Buttons";
import { Carrinho } from "../Carrinho";
import { addProductsListThunk } from "../../store/modules/products/thunk";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [ismodal, setIsModal] = useState(false);
  const [carrinhoBol, setCarrinhoBol] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const { productsFilter } = useSelector((store) => store);

  const modal = () => {
    setIsModal(!ismodal);
  };

  const modalCarrinho = () => {
    setCarrinhoBol(!carrinhoBol);
  };

  const idCarrinhoList = (id) => {
    const productsFilter = products.find((elem) => elem.id === id);
    dispatch(addProductsListThunk(productsFilter));
  };

  return (
    <>
      <HeaderHome ismodal={ismodal} qtdcarrinho={productsFilter.length}>
        <div className="box-logo">
          <h1>KenzieShop</h1>
        </div>

        <nav>
          <span onClick={modal}>
            <FiMenu />
          </span>

          <ul>
            <li className="carrinho" onClick={modalCarrinho}>
              <FiShoppingCart />
              Carrinho
            </li>

            <li>
              <FiLogIn />
              Login
            </li>
          </ul>
        </nav>
      </HeaderHome>

      <Carrinho carrinhoBol={carrinhoBol} />

      <MainHome>
        <ul>
          {products.map((elem) => (
            <li key={elem.id}>
              <div className="name-product">
                <h1>{elem.name}</h1>
              </div>

              <figure className="img-product">
                <img src={elem.image} alt="" />
              </figure>

              <span className="price-product">R$ {elem.price}</span>

              <Button onClick={() => idCarrinhoList(elem.id)}>
                Add Carrinho
              </Button>
            </li>
          ))}
        </ul>
      </MainHome>
    </>
  );
};
