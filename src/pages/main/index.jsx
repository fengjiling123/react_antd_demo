import React from "react";
import SideMenu from "@/components/sideMenu";
import MainRouter from "@/routes/mainRouter";
import Header from "@/components/header";

import "./index.less";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="--main">
        <SideMenu />
        <div className="main-right">
          <Header />
          <div className="routes">
            <MainRouter />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
