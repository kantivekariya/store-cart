import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../common/Cards/Cards";
import { getBySpecificCategory } from "../../reduce/action/products/ProductsAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../utils/hooks/dispatchHooks";

const ProductsList = () => {
  const { category } = useParams<{ category: string }>();
  const dispatch = useAppDispatch();
  const { productsList } = useAppSelector((state) => state.productList);
  useEffect(() => {
    // @ts-ignore
    if (category) dispatch(getBySpecificCategory(category));
  }, [category]);
  return (
    <>
      {productsList.map((item) => (
        <Cards key={item.id} />
      ))}
    </>
  );
};

export default ProductsList;
