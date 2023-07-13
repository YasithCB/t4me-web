import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ImageCard from "../components/ImageCard";

const Blog = () => {
  return (
    <>
      <Meta title={"T4Me | Blog"} />
      <BreadCrumb title="Blog" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Category</h3>
                <div>
                  <ul className="ps-0">
                    <li>Plain T-shirts</li>
                    <li>Printed T-shirts</li>
                    <li>Rib T-shirts</li>
                    <li>Frocks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-9 d-flex flex-wrap justify-content-center gap-10">
              <ImageCard
                imgPath="..\images\plain-tshirt\DSC_0011.jpg"
                title="Plain White"
                desc="100% Cotton 190GSM White plain t-shirt. Made in Sri Lanka"
                btnText="Read More"
              />
              <ImageCard
                imgPath="..\images\plain-tshirt\DSC_0024.jpg"
                title="Plain Pink"
                desc="100% Cotton 190GSM Pink plain t-shirt. Limited stock available. Made in Sri Lanka"
                btnText="Read More"
              />
              <ImageCard
                imgPath="..\images\plain-tshirt\DSC_0050.jpg"
                title="Plain Black"
                desc="100% Cotton 190GSM Black plain t-shirt. Made in Sri Lanka"
                btnText="Read More"
              />
              <ImageCard
                imgPath="..\images\plain-tshirt\DSC_0033.jpg"
                title="Plain Gray"
                desc="100% Cotton 190GSM Gray plain t-shirt. Limited stock available. Made in Sri Lanka"
                btnText="Read More"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
