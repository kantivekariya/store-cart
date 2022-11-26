import Cards from "../../common/Cards/Cards";
import { useAppSelector } from "../../utils/hooks/dispatchHooks";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cartReducer);
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item: any, index: number) => <Cards key={index} {...item} />)
      ) : (
        <>
          <h1>Cart Empty</h1>
        </>
      )}
    </>
  );
};

export default Cart;
