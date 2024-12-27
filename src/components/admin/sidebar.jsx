import { ChartNoAxesCombined } from "lucide-react";
import {
  BadgePoundSterling,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

function AdminSideBar({ open, setOpen }) {
  const AdminSideBarItems = [
    {
      id: "dashboard",
      label: "DashBoard",
      path: "/admin/dashboard",
      icons: <LayoutDashboard />,
    },
    {
      id: "products",
      label: "Products",
      path: "/admin/products",
      icons: <ShoppingBasket />,
    },
    {
      id: "orders",
      label: "Orders",
      path: "/admin/orders",
      icons: <BadgePoundSterling />,
    },
  ];
  const navigate = useNavigate();
  function MenuItems({ setOpen }) {
    const navigate = useNavigate();

    return (
      <nav className="mt-8 flex-col flex gap-2">
        {AdminSideBarItems.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path);
              setOpen ? setOpen(false) : null;
            }}
            className="flex text-xl item-center gap-2 rounded-md px-3 py-2 text-muted-foreground cursor-pointer hover:bg-muted hover:text-foreground"
          >
            {menuItem.icons}
            <span>{menuItem.label}</span>
          </div>
        ))}
      </nav>
    );
  }
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />

                <span>Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Pannel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}
export default AdminSideBar;
