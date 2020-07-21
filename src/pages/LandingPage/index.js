import React, { Component } from "react";
import {
  Header,
  Hero,
  MostPicked,
  Categories,
  Testimony,
  Footer,
} from "../../components";

import { JsonLandingPage } from "../../assets";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={JsonLandingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={JsonLandingPage.mostPicked}
        />
        <Categories data={JsonLandingPage.categories} />
        <Testimony data={JsonLandingPage.testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
