import { Button } from "../Buttons";
import { Lis } from "./style";
import { useDispatch } from "react-redux";
import { removeProductsList } from "../../store/modules/products/actions";

export const Cards = ({ name, image, price, id }) => {
  const dispatch = useDispatch();

  const removendoCarrinho = (id) => {
    dispatch(removeProductsList(id));
  };

  return (
    <Lis key={id}>
      <div className="name">
        <h1>{name}</h1>
      </div>

      <figure className="img">
        <img src={image} alt={name} />
      </figure>

      <span className="price">R$ {price}</span>

      <Button onClick={() => removendoCarrinho(id)}>X</Button>
    </Lis>
  );
};
