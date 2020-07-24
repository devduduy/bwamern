import React, { Component } from "react";
import { JsonItemDetails } from "../../assets";
import {
  FeaturedImage,
  Header,
  PageDetailDescription,
  PageDetailTitle,
} from "../../components";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={JsonItemDetails} />
        <FeaturedImage data={JsonItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={JsonItemDetails} />
            </div>
            <div className="col-5">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsPage;
