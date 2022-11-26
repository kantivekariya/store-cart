import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import usePagination from "@mui/material/usePagination/usePagination";
import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../common/Cards/Cards";
import { getBySpecificCategory } from "../../reduce/action/products/ProductsAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../utils/hooks/dispatchHooks";

const ProductsList = () => {
  const [page, setPage] = useState(0);
  const PER_PAGE = 5;
  const { category } = useParams<{ category: string }>();
  const [sortedValue, setSortedValue] = useState("desc");
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  const onHandleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Grid columns={{ sm: 4 }} sx={{ textAlign: "end", p: 5 }}>
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
        {productsList
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => (
            <Grid item xs={2} sm={4} md={4}>
              <Cards key={item.id} {...item} />
            </Grid>
          ))}
      </Grid>

      <Grid sx={{ textAlign: "center", m: 5 }}>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={productsList.length}
          page={page}
          onPageChange={onHandleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </>
  );
};

export default ProductsList;
