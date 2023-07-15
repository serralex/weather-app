import { ReactNode } from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <div className="bg-[#111111] text-white min-h-full font-primary">
      <Header />
      <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
export default Layout;
