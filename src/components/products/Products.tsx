import { Grid } from "@mui/material";
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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {productsList.map((item) => (
          <Grid item xs={2} sm={4} md={4}>
            <Cards key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
