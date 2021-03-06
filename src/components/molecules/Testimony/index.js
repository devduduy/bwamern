import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Star, Button } from "../../atoms";

import TestimonyFrame from "assets/images/testimonial-landingpages-frame.jpg";

const Testimony = ({ data }) => {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row align-items-center">
          <Zoom>
            <div className="col-auto" style={{ marginRight: 60 }}>
              <div
                className="testimonial-hero"
                style={{ margin: `30px 0 0 30px` }}
              >
                <img
                  src={data.imageUrl}
                  alt="Testimonial"
                  className="position-absolute main-img"
                  style={{ zIndex: 1 }}
                />
                <img
                  src={TestimonyFrame}
                  alt="Testimonial Frame"
                  className="position-absolute"
                  style={{ margin: `-30px 0 0 -30px` }}
                />
              </div>
            </div>
          </Zoom>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>

            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Testimony;
