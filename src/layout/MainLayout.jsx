import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import "./MainLayout.module.scss"
import MobileSideBar from "../components/mobile/mobileSideBar";
function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet/>
      </main>
      <MobileSideBar/>

    </>
  );
}

export default MainLayout;
