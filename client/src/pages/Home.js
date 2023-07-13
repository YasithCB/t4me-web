import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import ProductList from "../components/ProductList";
import Heading3 from "../components/Heading3";

const Home = () => {
  return (
    <>
      <Meta title={"T4Me"} />

      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="\images\rib-tshirt\IMG_2528.jpg"
                  className="img-fluid rouded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Rib T-shirts</h4>
                  <p>From 990LKR</p>
                  <Link className="btn-blue link">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0011.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton White</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0050.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Black</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0033.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Gray</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="\images\plain-tshirt\DSC_0024.jpg"
                    className="img-fluid rouded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>100% Cotton Pink</h4>
                    <p>From 990LKR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="\images\service-icons\local_shipping_black_24dp.svg"
                    alt="services"
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 fs-small">
                      From all orders over 3000LKR
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="\images\service-icons\redeem_black_24dp.svg"
                    alt="services"
                  />
                  <div>
                    <h6>Surpice Offers</h6>
                    <p className="mb-0 fs-small">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="\images\service-icons\support_agent_black_24dp.svg"
                    alt="services"
                  />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0 fs-small">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="\images\service-icons\discount_black_24dp.svg"
                    alt="services"
                  />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0 fs-small">Get factory default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="\images\service-icons\credit_card_black_24dp.svg"
                    alt="services"
                  />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0 fs-small">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center p-5">
                <div className="d-flex align-items-center justify-content-center gap-30">
                  <div>
                    <h6>Plain T-shirts</h6>
                    <p>20+ items</p>
                  </div>
                  <img
                    src="\images\categories\category-1.jpg"
                    alt="plain-tshirt"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-30">
                  <div>
                    <h6>Printed T-shirts</h6>
                    <p>20+ items</p>
                  </div>
                  <img
                    src="\images\categories\category-2.jpg"
                    alt="plain-tshirt"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-30">
                  <div>
                    <h6>Rib T-shirts</h6>
                    <p>20+ items</p>
                  </div>
                  <img
                    src="\images\categories\category-3.jpg"
                    alt="plain-tshirt"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-30">
                  <div>
                    <h6>Frocks</h6>
                    <p className="pe-5">20+ items</p>
                  </div>
                  <img
                    src="\images\categories\category-4.jpg"
                    alt="plain-tshirt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5">
  <div className="container">
    <div className="row">
      <div className="section-heading col-12">
        <Heading3 text="Our Latest Items" />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <ImageCard
          imgPath="..\images\plain-tshirt\DSC_0011.jpg"
          title="Plain White"
          desc="100% Cotton 190GSM White plain t-shirt. Made in Sri Lanka"
          btnText="Read More"
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <ImageCard
          imgPath="..\images\plain-tshirt\DSC_0024.jpg"
          title="Plain Pink"
          desc="100% Cotton 190GSM Pink plain t-shirt. Limited stock available. Made in Sri Lanka"
          btnText="Read More"
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <ImageCard
          imgPath="..\images\plain-tshirt\DSC_0050.jpg"
          title="Plain Black"
          desc="100% Cotton 190GSM Black plain t-shirt. Made in Sri Lanka"
          btnText="Read More"
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <ImageCard
          imgPath="..\images\plain-tshirt\DSC_0033.jpg"
          title="Plain Gray"
          desc="100% Cotton 190GSM Gray plain t-shirt. Limited stock available. Made in Sri Lanka"
          btnText="Read More"
        />
      </div>
    </div>
  </div>
</section>


      <section className="productList-wrapper">
        <div className="container my-5">
          <Heading3 text="Featured Collection" />
          <div className="row">
            <ProductList
              img="..\images\printed-tshirts\d1.png"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="images\printed-tshirts\d2.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d3.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d4.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d5.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
            <ProductList
              img="..\images\printed-tshirts\d6.jpg"
              heading="Freedom"
              category="Printed T-shirts"
              oldPrice="1690LKR"
              newPrice="1350LKR"
              stock="10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
