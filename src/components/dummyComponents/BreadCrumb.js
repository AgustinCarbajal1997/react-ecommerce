import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props) => {
  const {
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x); // x=>x quiere decir que cada vez que esta vacio , no lo agrega al array
  if (pathnames[pathnames.length - 1].split("-").length > 1) {
    let separateId = pathnames[pathnames.length - 1]
      .split("-")
      .slice(1)
      .join(" ");
    pathnames[pathnames.length - 1] = separateId;
  }
  return (
    <div className="breadcrumb-container">
      <div>
        <Link to="/" className="breadcrumb-item">
          Home
        </Link>
      </div>

      {pathnames.map((name, index) => {
        const routTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <div key={index}>
            <IoIosArrowForward color="#d8d8d8" />
            <Link className="breadcrumb-item" to={routTo}>
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(BreadCrumb);
