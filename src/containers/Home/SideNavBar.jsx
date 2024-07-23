import companyLogo from "assets/images/sideNavBar/logo.png";

import { contactButtons, navBarList } from "constants/navBarList";

const SideNavBar = () => {
  return (
    <nav className="sideBar">
      <div className="sideBarLogo">
        <img src={companyLogo} alt="companyLogo" />
      </div>
      <ul>
        {navBarList.map((item, index) => (
          <li key={index}>
            <img src={item?.image} alt="list" /> {item?.name}{" "}
            <span> {item?.arrow && <img src={item?.arrow} alt="arrow" />}</span>
          </li>
        ))}
      </ul>
      <div className="sideBarBtn">
        {contactButtons.map((item, index) => (
          <>
            <div className="sideBarBtnList">
              <span key={index}>
                <img src={item?.image} alt="buttonLogo" /> {item?.name}
              </span>
            </div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default SideNavBar;
