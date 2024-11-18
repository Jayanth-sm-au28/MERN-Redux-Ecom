import { Outlet } from "react-router-dom";
import ShopingHeader from "./header";

function ShopingLayout() {
  return (
    <div className=" flex flex-col overflow-hidden bg-white">
      {/* commom header */}
      <ShopingHeader/>
      <main className=" flex flex-col w-full"></main>
      <Outlet />
    </div>
  );
}
export default ShopingLayout;
