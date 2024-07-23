import dashboard from "assets/images/sideNavBar/dashboard.svg";
import Assets from "assets/images/sideNavBar/assets.svg";
import Incidents from "assets/images/sideNavBar/incidents.svg";
import Services from "assets/images/sideNavBar/services.svg";
import Request from "assets/images/sideNavBar/requests.svg";
import Users from "assets/images/sideNavBar/users.svg";
import Reports from "assets/images/sideNavBar/reports.svg";

import downArrow from "assets/images/sideNavBar/downArrow.svg";

import ContactUS from "assets/images/sideNavBar/contactUs.svg";
import Logout from "assets/images/sideNavBar/logout.svg";

export const navBarList = [
  {
    image: dashboard,
    name: "Dashboard"
  },
  {
    image: Assets,
    name: "Assets",
    arrow: downArrow
  },
  {
    image: Incidents,
    name: "Incidents"
  },
  {
    image: Services,
    name: "Services"
  },
  {
    image: Request,
    name: "Request"
  },
  {
    image: Users,
    name: "Users",
    arrow: downArrow
  },
  {
    image: Reports,
    name: "Reports",
    arrow: downArrow
  }
];

export const contactButtons = [
  {
    image: ContactUS,
    name: "Contact us"
  },
  {
    image: Logout,
    name: "Log Out"
  }
];
