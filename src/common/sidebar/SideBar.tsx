import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  useAppDispatch,
  useAppSelector,
} from "../../utils/hooks/dispatchHooks";
import { getAllCategories } from "../../reduce/action/products/ProductsAction";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(getAllCategories());
    if (categoryList?.[0])
      navigate(`/category/${categoryList[0]}`, { replace: true });
  }, [dispatch, categoryList?.[0]]);

  const onHandlePushUrlParams = (params: string) => {
    navigate(`/category/${params}`, { replace: true });
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography>Category</Typography>
      </Toolbar>
      <List>
        {categoryList.map((text, index) => (
          <ListItem
            onClick={() => onHandlePushUrlParams(text)}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
