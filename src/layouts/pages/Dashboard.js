import React from "react"

export default function Dashboard() {
  return (
    <>
      <div class='intro-slider-container'>
        <div
          class='owl-carousel owl-simple owl-light owl-nav-inside'
          data-toggle='owl'
          data-owl-options='{"nav": false}'>
          <div
            class='intro-slide'
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-2/slider/slide-7.jpg)",
            }}>
            <div class='container intro-content'>
              <h3 class='intro-subtitle'>Lorem, ipsum dolor.</h3>
              <h1 class='intro-title'>
                amet <br />
                repellat perspiciatis
              </h1>

              <a href='category.html' class='btn btn-primary'>
                <span>Shop Now</span>
                <i class='icon-long-arrow-right'></i>
              </a>
            </div>
          </div>

          <div
            class='intro-slide'
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-2/slider/slide-4.jpg)",
            }}>
            <div class='container intro-content'>
              <h3 class='intro-subtitle'>adipisicing elit.</h3>
              <h1 class='intro-title'>
                Ypperlig <br />
                sit amet. <br />
                <span class='text-primary'>
                  <sup>$</sup>49,99
                </span>
              </h1>

              <a href='category.html' class='btn btn-primary'>
                <span>Shop Now</span>
                <i class='icon-long-arrow-right'></i>
              </a>
            </div>
          </div>

          <div
            class='intro-slide'
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-2/slider/slide-6.jpg)",
            }}>
            <div class='container intro-content'>
              <h3 class='intro-subtitle'>cursus sem</h3>
              <h1 class='intro-title'>
                Duis nec <br />
                elementum nibh.
                <br />
                <span class='text-primary'>
                  <sup class='text-white font-weight-light'>from</sup>
                  <sup>$</sup>9,99
                </span>
              </h1>

              <a href='product' class='btn btn-primary'>
                <span>Shop Now</span>
                <i class='icon-long-arrow-right'></i>
              </a>
            </div>
          </div>

          <span class='slider-loader text-white'></span>
        </div>

        <div class='mb-3 mb-lg-5'></div>

        <div class='banner-group'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12 col-lg-5'>
                <div class='banner banner-large banner-overlay'>
                  <a href='#'>
                    <img
                      src='assets/images/demos/demo-2/banners/banner-6.jpg'
                      alt='Banner'
                    />
                  </a>

                  <div class='banner-content banner-content-top'>
                    <h4 class='banner-subtitle'>banner</h4>
                    <h3 class='banner-title text-white'>felis convallis</h3>
                    <div class='banner-text text-white'>from $19.99</div>
                    <a href='#' class='btn btn-outline-white banner-link'>
                      Shop Now<i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-3'>
                <div class='banner banner-overlay'>
                  <a href='#'>
                    <img
                      src='assets/images/demos/demo-2/banners/banner.jpg'
                      alt='Banner'
                    />
                  </a>

                  <div class='banner-content banner-content-bottom'>
                    <h4 class='banner-subtitle text-grey'>On Sale</h4>
                    <h3 class='banner-title text-white'>
                      Blandit <br />
                      nibh
                    </h3>
                    <div class='banner-text text-white'>from $39.99</div>
                    <a href='#' class='btn btn-outline-white banner-link'>
                      Discover Now<i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-4'>
                <div class='banner banner-overlay'>
                  <a href='#'>
                    <img
                      src='assets/images/demos/demo-2/banners/banner-3.jpg'
                      alt='Banner'
                    />
                  </a>

                  <div class='banner-content banner-content-top'>
                    <h4 class='banner-subtitle text-grey'>New Arrivals</h4>
                    <h3 class='banner-title text-white'>
                      Suscipit <br />
                      faucibus quam
                    </h3>
                    <a href='#' class='btn btn-outline-white banner-link'>
                      Discover Now<i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                </div>

                <div class='banner banner-overlay banner-overlay-light'>
                  <a href='#'>
                    <img
                      src='assets/images/demos/demo-2/banners/banner-4.jpg'
                      alt='Banner'
                    />
                  </a>

                  <div class='banner-content banner-content-top'>
                    <h4 class='banner-subtitle'>On Sale</h4>
                    <h3 class='banner-title'>Morbi semper</h3>
                    <div class='banner-text'>up to 30% off</div>
                    <a href='/product' class='btn btn-outline-gray banner-link'>
                      Shop Now<i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='mb-3'></div>

        <div class='container'>
          <ul
            class='
              nav nav-pills nav-border-anim nav-big
              justify-content-center
              mb-3
            '
            role='tablist'>
            <li class='nav-item'>
              <a
                class='nav-link active'
                id='products-featured-link'
                data-toggle='tab'
                href='#products-featured-tab'
                role='tab'
                aria-controls='products-featured-tab'
                aria-selected='true'>
                Featured
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link'
                id='products-sale-link'
                data-toggle='tab'
                href='#products-sale-tab'
                role='tab'
                aria-controls='products-sale-tab'
                aria-selected='false'>
                On Sale
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link'
                id='products-top-link'
                data-toggle='tab'
                href='#products-top-tab'
                role='tab'
                aria-controls='products-top-tab'
                aria-selected='false'>
                Top Rated
              </a>
            </li>
          </ul>
        </div>

        <div class='container-fluid'>
          <div class='tab-content tab-content-carousel'>
            <div
              class='tab-pane p-0 fade show active'
              id='products-featured-tab'
              role='tabpanel'
              aria-labelledby='products-featured-link'>
              <div
                class='
                  owl-carousel owl-simple
                  carousel-equal-height carousel-with-shadow
                '
                data-toggle='owl'
                data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-1-1.png'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-1-2.png'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Mobile tripod stand</a>
                    </h3>
                    <div class='product-price'>$201,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>
                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-2-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-2-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Octo 4240</a>
                    </h3>
                    <div class='product-price'>$746,00</div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: "#1f1e18" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: "#e8e8e8" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <span class='product-label label-circle label-new'>
                      New
                    </span>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-3-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-3-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>bibendum tellus mattis</a>
                    </h3>
                    <div class='product-price'>$970,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <span class='product-label label-circle label-sale'>
                      Sale
                    </span>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-4-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-4-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>vel turpis sit</a>
                    </h3>
                    <div class='product-price'>
                      <span class='new-price'>$337,00</span>
                      <span class='old-price'>Was $449,00</span>
                    </div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: "#878883" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: "#dfd5c2" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-5-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-5-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>sapien eu interdum</a>
                    </h3>
                    <div class='product-price'>$675,00</div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: " #74543e" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: "#e8e8e8" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-6-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-6-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>tellus mattis</a>
                    </h3>
                    <div class='product-price'>$457,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-1-1.png'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-1-2.png'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>facilisis odio sit</a>
                    </h3>
                    <div class='product-price'>$251,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='tab-pane p-0 fade'
              id='products-sale-tab'
              role='tabpanel'
              aria-labelledby='products-sale-link'>
              <div
                class='
                  owl-carousel owl-simple
                  carousel-equal-height carousel-with-shadow
                '
                data-toggle='owl'
                data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-5-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-5-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>facilisis odio sit</a>
                    </h3>
                    <div class='product-price'>$675,00</div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: "#74543e" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: "#e8e8e8" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-6-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-6-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Elephant Armchair</a>
                    </h3>
                    <div class='product-price'>$457,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-1-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-1-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Butler Stool Ladder</a>
                    </h3>
                    <div class='product-price'>$251,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='tab-pane p-0 fade'
              id='products-top-tab'
              role='tabpanel'
              aria-labelledby='products-top-link'>
              <div
                class='
                  owl-carousel owl-simple
                  carousel-equal-height carousel-with-shadow
                '
                data-toggle='owl'
                data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-2-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-2-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Octo 4240</a>
                    </h3>
                    <div class='product-price'>$746,00</div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: "#1f1e18" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: " #e8e8e8" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <span class='product-label label-circle label-new'>
                      New
                    </span>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-3-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-3-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>bibendum tellus mattis</a>
                    </h3>
                    <div class='product-price'>$970,00</div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>

                <div class='product product-11 text-center'>
                  <figure class='product-media'>
                    <span class='product-label label-circle label-sale'>
                      Sale
                    </span>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/products/product-4-1.jpg'
                        alt='Product image'
                        class='product-image'
                      />
                      <img
                        src='assets/images/demos/demo-2/products/product-4-2.jpg'
                        alt='Product image'
                        class='product-image-hover'
                      />
                    </a>

                    <div class='product-action-vertical'>
                      <a href='#' class='btn-product-icon btn-wishlist'>
                        <span>add to wishlist</span>
                      </a>
                    </div>
                  </figure>

                  <div class='product-body'>
                    <h3 class='product-title'>
                      <a href='product'>Roots Sofa Bed</a>
                    </h3>
                    <div class='product-price'>
                      <span class='new-price'>$337,00</span>
                      <span class='old-price'>Was $449,00</span>
                    </div>

                    <div class='product-nav product-nav-dots'>
                      <a
                        href='#'
                        class='active'
                        style={{ background: " #878883" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                      <a href='#' style={{ background: "#dfd5c2" }}>
                        <span class='sr-only'>Color name</span>
                      </a>
                    </div>
                  </div>
                  <div class='product-action'>
                    <a href='cart' class='btn-product btn-cart'>
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='mb-5'></div>
        <div class='bg-light deal-container pt-5 pb-3 mb-5'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-9'>
                <div class='deal'>
                  <div class='deal-content'>
                    <h4>Limited Quantities</h4>
                    <h2>Deal of the Day</h2>

                    <h3 class='product-title'>
                      <a href='product'>POÄNG</a>
                    </h3>

                    <div class='product-price'>
                      <span class='new-price'>$149.00</span>
                      <span class='old-price'>Was $240.00</span>
                    </div>

                    <div class='deal-countdown' data-until='+10h'></div>

                    <a href='product' class='btn btn-primary'>
                      <span>Shop Now</span>
                      <i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                  <div class='deal-image'>
                    <a href='product'>
                      <img
                        src='assets/images/demos/demo-2/deal/product-1.jpg'
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-lg-3'>
                <div
                  class='
                    banner banner-overlay banner-overlay-light
                    text-center
                    d-none d-lg-block
                  '>
                  <a href='#'>
                    <img
                      src='assets/images/demos/demo-2/banners/banner-5.jpg'
                      alt='Banner'
                    />
                  </a>

                  <div
                    class='
                      banner-content banner-content-top banner-content-center
                    '>
                    <h4 class='banner-subtitle'>The Best Choice</h4>
                    <h3 class='banner-title'>AGEN</h3>
                    <div class='banner-text text-primary'>$49.99</div>
                    <a href='#' class='btn btn-outline-gray banner-link'>
                      Shop Now<i class='icon-long-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='mb-6'></div>
        <div class='container'>
          <div class='heading heading-center mb-3'>
            <h2 class='title'>Top Selling Products</h2>

            <ul
              class='nav nav-pills nav-border-anim justify-content-center'
              role='tablist'>
              <li class='nav-item'>
                <a
                  class='nav-link active'
                  id='top-all-link'
                  data-toggle='tab'
                  href='#top-all-tab'
                  role='tab'
                  aria-controls='top-all-tab'
                  aria-selected='true'>
                  All
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  id='top-fur-link'
                  data-toggle='tab'
                  href='#top-fur-tab'
                  role='tab'
                  aria-controls='top-fur-tab'
                  aria-selected='false'>
                  Furniture
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  id='top-decor-link'
                  data-toggle='tab'
                  href='#top-decor-tab'
                  role='tab'
                  aria-controls='top-decor-tab'
                  aria-selected='false'>
                  Decoration
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  id='top-light-link'
                  data-toggle='tab'
                  href='#top-light-tab'
                  role='tab'
                  aria-controls='top-light-tab'
                  aria-selected='false'>
                  Lighting
                </a>
              </li>
            </ul>
          </div>

          <div class='tab-content'>
            <div
              class='tab-pane p-0 fade show active'
              id='top-all-tab'
              role='tabpanel'
              aria-labelledby='top-all-link'>
              <div class='products'>
                <div class='row justify-content-center'>
                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-7-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-7-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>facilisis odio sit</a>
                        </h3>
                        <div class='product-price'>$401,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-8-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-8-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>sagittis velit</a>
                        </h3>
                        <div class='product-price'>$401,00</div>

                        <div class='product-nav product-nav-dots'>
                          <a
                            href='#'
                            class='active'
                            style={{ background: "#333333" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                          <a href='#' style={{ background: " #927764" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <span class='product-label label-circle label-sale'>
                          Sale
                        </span>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-9-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-9-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'> vel turpis</a>
                        </h3>
                        <div class='product-price'>
                          <span class='new-price'>$94,00</span>
                          <span class='old-price'>Was $94,00</span>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-10-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-10-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Quisque hendrerit purus</a>
                        </h3>
                        <div class='product-price'>$401,00</div>

                        <div class='product-nav product-nav-dots'>
                          <a
                            href='#'
                            class='active'
                            style={{ background: " #e8e8e8" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                          <a href='#' style={{ background: "#333333" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-11-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-11-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>elementum nibh</a>
                        </h3>
                        <div class='product-price'>$259,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <span class='product-label label-circle label-new'>
                          New
                        </span>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-12-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-12-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>elementum</a>
                        </h3>
                        <div class='product-price'>$3.107,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-13-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-13-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>porttitor auctor</a>
                        </h3>
                        <div class='product-price'>$2.486,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-14-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-14-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>
                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>odio sit amet</a>
                        </h3>
                        <div class='product-price'>$199,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-15-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-15-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>odio sit amet</a>
                        </h3>
                        <div class='product-price'>$199,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-16-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-16-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Aenean ac aliquet</a>
                        </h3>
                        <div class='product-price'>$499,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='tab-pane p-0 fade'
              id='top-fur-tab'
              role='tabpanel'
              aria-labelledby='top-fur-link'>
              <div class='products'>
                <div class='row justify-content-center'>
                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <span class='product-label label-circle label-sale'>
                          Sale
                        </span>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-9-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-9-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Garden Armchair</a>
                        </h3>
                        <div class='product-price'>
                          <span class='new-price'>$94,00</span>
                          <span class='old-price'>Was $94,00</span>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <span class='product-label label-circle label-new'>
                          New
                        </span>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-12-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-12-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>2-Seater</a>
                        </h3>
                        <div class='product-price'>$3.107,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-13-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-13-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Furniture</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Wingback Chair</a>
                        </h3>
                        <div class='product-price'>$2.486,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='tab-pane p-0 fade'
              id='top-decor-tab'
              role='tabpanel'
              aria-labelledby='top-decor-link'>
              <div class='products'>
                <div class='row justify-content-center'>
                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-8-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-8-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Madra Log Holder</a>
                        </h3>
                        <div class='product-price'>$401,00</div>

                        <div class='product-nav product-nav-dots'>
                          <a
                            href='#'
                            class='active'
                            style={{ background: "#333333" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                          <a href='#' style={{ background: " #927764" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-11-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-11-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Original Outdoor Beanbag</a>
                        </h3>
                        <div class='product-price'>$259,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-14-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-14-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>odio sit amet</a>
                        </h3>
                        <div class='product-price'>$199,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-15-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-15-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Decor</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>odio sit amet</a>
                        </h3>
                        <div class='product-price'>$199,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class='tab-pane p-0 fade'
              id='top-light-tab'
              role='tabpanel'
              aria-labelledby='top-light-link'>
              <div class='products'>
                <div class='row justify-content-center'>
                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-7-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-7-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>facilisis odio sit</a>
                        </h3>
                        <div class='product-price'>$401,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-10-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-10-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Carronade Large Suspension Lamp</a>
                        </h3>
                        <div class='product-price'>$401,00</div>

                        <div class='product-nav product-nav-dots'>
                          <a
                            href='#'
                            class='active'
                            style={{ background: "#e8e8e8" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                          <a href='#' style={{ ackground: "#333333" }}>
                            <span class='sr-only'>Color name</span>
                          </a>
                        </div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class='col-6 col-md-4 col-lg-3 col-xl-5col'>
                    <div class='product product-11 text-center'>
                      <figure class='product-media'>
                        <a href='product'>
                          <img
                            src='assets/images/demos/demo-2/products/product-16-1.jpg'
                            alt='Product image'
                            class='product-image'
                          />
                          <img
                            src='assets/images/demos/demo-2/products/product-16-2.jpg'
                            alt='Product image'
                            class='product-image-hover'
                          />
                        </a>

                        <div class='product-action-vertical'>
                          <a href='#' class='btn-product-icon btn-wishlist'>
                            <span>add to wishlist</span>
                          </a>
                        </div>
                      </figure>

                      <div class='product-body'>
                        <div class='product-cat'>
                          <a href='#'>Lighting</a>
                        </div>
                        <h3 class='product-title'>
                          <a href='product'>Aenean ac aliquet</a>
                        </h3>
                        <div class='product-price'>$499,00</div>
                      </div>
                      <div class='product-action'>
                        <a href='cart' class='btn-product btn-cart'>
                          <span>add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='container'>
          <hr class='mt-1 mb-6' />
        </div>
      </div>
    </>
  )
}
