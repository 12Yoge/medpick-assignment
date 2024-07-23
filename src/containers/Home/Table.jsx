import { tableData, tableHeadData } from "constants/tableData";

import filterImg from "assets/images/header/filter.svg";
import indicatorImg from "assets/images/header/indicator.svg";
import downloadImg from "assets/images/header/download.svg";
import searchIcon from "assets/images/header/searchIcon.svg";
import plusIcon from "assets/images/header/plusIcon.svg";

const Table = () => {
  return (
    <section className="table">
      <div className="tableData">
        <div className="tableControls">
          <div className="tableInput">
            <img src={searchIcon} alt="searchIcon" />
            <input type="text" placeholder="Search" className="searchInput" />
          </div>
          <select className="monthDropdown">
            <option value="September">September</option>
          </select>
          <select className="year-dropdown">
            <option value="2023">2023</option>
          </select>
          <div className="tableIcons">
            <img src={filterImg} alt="filterImg" />
            <img src={indicatorImg} alt="filterImg" />
            <img src={downloadImg} alt="filterImg" />
          </div>
        </div>
        <div className="tableButton">
          <span>
            Add Incident <img src={plusIcon} alt="plusIcon" />{" "}
          </span>
        </div>
      </div>

      <table className="tableList">
        <thead>
          <tr>
            {tableHeadData.map((item, index) => (
              <th key={index}>{item?.tableHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item?.assetData}</td>
              <td>{item?.code}</td>
              <td>{item?.Dept}</td>
              <td>{item?.dateTime}</td>
              <td>{item?.downTime}</td>
              <td className={`${item?.status === "Open" ? "tableStatus" : ""}`}>
                {item?.status}
              </td>
              <td>
                <img src={item?.report} alt="Report Icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
