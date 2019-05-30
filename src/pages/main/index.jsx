import React from "react";
import SideMenu from '../../components/sideMenu';
import MainRouter from "../../routes/mainRouter";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="--main">
        <SideMenu />
        <div>
          <MainRouter />
        </div>
      </div>
    );
  }
}

export default IndexPage;
