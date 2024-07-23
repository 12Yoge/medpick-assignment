import SideNavBar from "containers/Home/SideNavBar";
import Header from "containers/Home/Header";

import "containers/Home/home.scss";

const Home = () => {
  return (
    <div className="task">
      <SideNavBar />
      <Header />
    </div>
  );
};

export default Home;
