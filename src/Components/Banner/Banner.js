import React from "react";

const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1612969308146-066d55f37ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Best seller Book 1</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Best seller Book 2</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 "
            src="https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Best seller Book 3</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Banner;
