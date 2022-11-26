import { CssBaseline, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          pt: 10,
          height: "calc(100vh - 160px)",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
