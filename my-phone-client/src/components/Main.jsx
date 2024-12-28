import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
