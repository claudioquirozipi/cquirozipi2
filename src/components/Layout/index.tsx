import * as React from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
