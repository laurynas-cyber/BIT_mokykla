

import Header from "./Header";
import SideBar from "./SideBar";

function Layout({children}) {
  return (
    // <!-- Wrapper -->
    <div id="wrapper">
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner">
          <Header />
          {/* <!-- Banner --> */}
         {children}
        </div>
      </div>

      <SideBar />
    </div>
  );
}

export default Layout;
