import Table from "containers/Home/Table";

import arrow from "assets/images/header/rightArrow.svg";
import downArrow from "assets/images/header/downArrow.svg";
import qrCode from "assets/images/header/qrCodeIcon.svg";
import notification from "assets/images/header/notification.svg";
import { header } from "constants/header";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="headerList">
          <div className="headerNavigator">
            <img src={arrow} alt="arrow" />
            <span>Incidents</span>
          </div>

          <div className="headerListData">
            <div className="headerListText">
              <span>B</span>
              Non Bio Medical
            </div>

            <div className="headerListText data">
              Vijayanagar
              <img src={downArrow} alt="downArrow" />
            </div>

            <img src={qrCode} alt="qrCode" />

            <img src={notification} alt="qrCode" />

            <div className="headerListText specialText">
              <span>A</span>
            </div>
          </div>
        </div>

        <ul className="headerCards">
          {header.map((item, index) => (
            <li key={index}>
              <span>{item?.number}</span>

              <div className="headerCardsName">
                <label>{item?.text}</label>
                <img className="headerCardsImg" src={item?.image} alt="arrow" />
              </div>
            </li>
          ))}
        </ul>

        <Table />
      </section>
    </>
  );
};

export default Header;
