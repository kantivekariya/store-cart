import Cards from "../../common/Cards/Cards";
import { Grid, Button } from "@mui/material";
import { useAppSelector } from "../../utils/hooks/dispatchHooks";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cartReducer);
  return (
    <>
      <Grid columns={{ sm: 4 }} sx={{ p: 5 }}>
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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <AddShoppingCartIcon sx={{ fontSize: 100 }} />
                <h1>Cart Empty</h1>
                <Button onClick={() => navigate("/category/")}>Browse Items</Button>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Cart;
