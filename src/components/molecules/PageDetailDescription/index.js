import React from "react";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";

const PageDetailDescription = ({ data }) => {
  return (
    <Fade bottom>
      <main>
        <h4>About the place</h4>
        {ReactHtmlParser(data.description)}
        <div className="row" style={{ marginTop: 30 }}>
          {data.features.map((item, index) => {
            return (
              <div
                className="col-3"
                style={{ marginBottom: 20 }}
                key={`feature-${index}`}
              >
                <img
                  width="38"
                  src={item.imageUrl}
                  alt={item.name}
                  className="d-block mb-2"
                />
                <span>{item.qty}</span>{" "}
                <span className="text-gray-500 font-weight-light">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </Fade>
  );
};

export default PageDetailDescription;
