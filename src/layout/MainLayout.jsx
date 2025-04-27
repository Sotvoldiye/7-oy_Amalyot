import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import style from "./MainLayout.module.scss"
import NavBottom from "../components/navbottom/NavBottom";
const MainLayout = () => {
  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <NavBottom />
      <Outlet />
    </div>
  );
};

export default MainLayout;
