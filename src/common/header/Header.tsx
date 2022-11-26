import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/dispatchHooks";
const drawerWidth = 240;
const Header = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cartReducer);
  const onHandleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h6" noWrap component="div">
            Store Cart
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            sx={{ pr: 3, position: "relative", cursor: "pointer" }}
            noWrap
            component="div"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Typography>
          <Typography
            onClick={onHandleLogOut}
            variant="h6"
            noWrap
            component="div"
            sx={{ cursor: "pointer" }}
          >
            Log out
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
