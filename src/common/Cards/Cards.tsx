import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { addToCart, removeItem } from "../../reduce/features/cartSlice";
import { useAppDispatch } from "../../utils/hooks/dispatchHooks";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const Cards = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: CartItemType) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        maxWidth: 400,
        pt: 2,
        boxShadow: 3,
        border: "1px solid lightblue",
      }}
    >
      <CardMedia
        component="img"
        height="500"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 150 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={{ height: 140, overflow: "hidden" }}
        >
          {description}
        </Typography>
        <Typography variant="h4">$ {price}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="small"
          onClick={() => dispatch(addToCart({ id, title, image, price }))}
        >
          Add to Item
        </Button>
        <Button
          size="small"
          onClick={() => dispatch(removeItem({ id, title, image, price }))}
        >
          Remove Cart Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
