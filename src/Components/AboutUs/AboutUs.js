import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>
          <span className="text-warning">about </span>us
        </h1>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div
          className="col-md-6  text-md-left align-self-center content"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            molestiae maxime, error optio quae dolorum laudantium perspiciatis
            blanditiis incidunt suscipit mollitia vitae debitis exercitationem
            beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, asperiores?
          </p>
          <a href="">
            <button className="btn btn-warning ">Learn more</button>
          </a>
        </div>

        <div
          className="col-md-6 my-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="img-fluid rounded"
            src="https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?t=st=1654080615~exp=1654081215~hmac=614626055d2b2b830aaedb73a6e59f4271e966d101df653eeb636716f1b83d4f&w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
