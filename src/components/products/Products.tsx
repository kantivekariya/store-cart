import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../common/Cards/Cards";
import { getBySpecificCategory } from "../../reduce/action/products/ProductsAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../utils/hooks/dispatchHooks";

const ProductsList = () => {
  const { category } = useParams<{ category: string }>();
  const [sortedValue, setSortedValue] = useState("desc");
  const dispatch = useAppDispatch();
  const { productsList } = useAppSelector((state) => state.productList);
  useEffect(() => {
    // @ts-ignore
    if (category) dispatch(getBySpecificCategory(category));
  }, [category]);

  const handleChange = (event: any) => {
    setSortedValue(event.target.value);
    // @ts-ignore
    dispatch(getBySpecificCategory(category, sortedValue));
  };

  return (
    <>
      <Grid columns={{ sm: 4 }} sx={{ textAlign: "end" , p:5}}>
        <FormControl sx={{ width: 240 }}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortedValue}
            label="Sort By"
            onChange={(event) => handleChange(event)}
          >
            <MenuItem value={`desc`}>Desc</MenuItem>
            <MenuItem value={"asce"}>Asce</MenuItem>
          </Select>
        </FormControl>
      </Grid>

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
