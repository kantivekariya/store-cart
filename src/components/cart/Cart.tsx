import Cards from "../../common/Cards/Cards";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../utils/hooks/dispatchHooks";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cartReducer);
  return (
    <>
      <Grid columns={{ sm: 4 }} sx={{ textAlign: "end", p: 5 }}>
        {cart.length > 0 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cart.map((item: any, index: number) => (
              <Grid item xs={2} sm={4} md={4}>
                <Cards key={index} {...item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <h1>Cart Empty</h1>
          </>
        )}
      </Grid>
    </>
  );
};

export default Cart;
