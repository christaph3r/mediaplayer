import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer d-flex align-item-center justify-content-evenly w-100 mb-5">
        <div style={{ width: "400px" }}>
          <h4>
            <i class="fa-solid fa-video text-warning me-4"></i>Media Player
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni rem
            autem dolorem magnam quaerat quae quos omnis, tempora quod
            dignissimos quas, sunt ab esse asperiores et cumque? Saepe, neque
            eum?
          </h6>
        </div>
        <div>
          <h4>links</h4>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h6>landing page</h6>
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h6>home page</h6>
          </Link>
          <Link to={"/watch"} style={{ textDecoration: "none" }}>
            <h6>watch history</h6>
          </Link>
        </div>
        <div>
          <h4>Guides</h4>
          <h6>react</h6>
          <h6>react bootstrap</h6>
          <h6>bootswatch</h6>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="enter your email"
              className="form-control"
            />
            <button className="btn btn-warning ms-2">subscribe</button>
          </div>
          <div className="d-flex align-item-center justify-content-evenly fs-4 mt-3">
            <i class="fa-brands fa-instagram "></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>copyright &#169; 2023. mediaplayer build with react </p>
      </div>
    </>
  );
}
