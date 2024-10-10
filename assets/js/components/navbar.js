function navbarDesign() {
  // ELEMENT SELECTORS
  const navbarContainer = document.getElementById("navbar-layout-container");

  navbarContainer.innerHTML = `   
  <header class="main-header-area">
  <div class="header-top border-bottom d-none d-lg-block">

  
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="header-top-left">
            <ul class="dropdown-wrap text-matterhorn">
              <li class="pt-4 pb-4">
              
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="header-top-right text-matterhorn">
            <p class="shipping mb-0">
              Email <a href="mailto:${WEBSITE_EMAIL_ONE}"><span>${WEBSITE_EMAIL_ONE}</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-middle header-sticky py-3 py-lg-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="header-middle-wrap position-relative">
            <a href="index.html" class="header-logo">
              <img src="assets/images/logo/dark.svg" style="object-fit: contain;" alt="Header Logo" />
            </a>

            <div class="main-menu d-none d-lg-block">
              <nav class="main-nav">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>

                  <li class="drop-holder">
                    <a href="#"
                      >Products
                      <i class="pe-7s-angle-down"></i>
                    </a>
                    <ul class="drop-menu">
                    <li>
                    <ul id="navbar-category-list-container" >
                     
                    </ul>
                  </li>
                    </ul>
                  </li>

                  
                  <li class="drop-holder">
                    <a href="#"
                      >Segment
                      <i class="pe-7s-angle-down"></i>
                    </a>
                    <ul class="drop-menu">
                      <li>
                        <a href="business-segment.html#automotive">Automotive</a>
                      </li>
                      <li>
                        <a href="business-segment.html#industrial">Industrial</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="dealership.html">enquiry</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="header-right">
              <ul>
                <li class="dropdown d-none d-lg-block">
                  <ul
                    class="dropdown-menu right-side"
                    aria-labelledby="settingButton"
                  >
                    <li>
                      <a class="dropdown-item" href="my-account.html"
                        >My account</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="login-register.html"
                        >Login | Register</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="mobile-menu_wrap d-block d-lg-none">
                  <a
                    href="#mobileMenu"
                    class="mobile-menu_btn toolbar-btn pl-0"
                  >
                    <i class="pe-7s-menu" style="color: #ffffff;padding-right: 10px"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu_wrapper" id="mobileMenu">
    <div class="tromic-offcanvas-body">
      <div class="inner-body">
        <div class="tromic-offcanvas-top">
          <a href="#" class="button-close"><i class="pe-7s-close"></i></a>
        </div>
        
        <div class="offcanvas-menu_area">
          <nav class="offcanvas-navigation">
            <ul class="mobile-menu">             
              <li>
                <a href="index.html">
                  <span class="mm-text">Home</span>
                </a>
              </li>
              <li>
                <a href="about.html">
                  <span class="mm-text">About Us</span>
                </a>
              </li>                                        
              <li>
                <a href="business-segment.html">
                  <span class="mm-text">Business Segment</span>
                </a>
              </li>
              <li>
                <a href="blog.html">
                  <span class="mm-text">Blog</span>
                </a>
              </li>
              <li>
                <a href="dealership.html">
                  <span class="mm-text">Dealer & Distributors</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <span class="mm-text">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            data-tippy="Close"
            data-tippy-inertia="true"
            data-tippy-animation="shift-away"
            data-tippy-delay="50"
            data-tippy-arrow="true"
            data-tippy-theme="sharpborder"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-search">
            <span class="searchbox-info"
              >Start typing and press Enter to search or ESC to
              close</span
            >
            <form action="#" class="hm-searchbox">
              <input
                type="text"
                name="Search entire store here..."
                value="Search entire store here..."
                onblur="if(this.value==''){this.value='Search entire store here...'}"
                onfocus="if(this.value=='Search entire store here...'){this.value=''}"
              />
              <button
                class="search-btn"
                type="submit"
                aria-label="searchbtn"
              >
                <i class="pe-7s-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offcanvas-minicart_wrapper" id="miniCart">
    <div class="tromic-offcanvas-body">
      <div class="minicart-content">
        <div class="minicart-heading">
          <h4 class="mb-0">Shopping Cart</h4>
          <a href="#" class="button-close"
            ><i
              class="pe-7s-close"
              data-tippy="Close"
              data-tippy-inertia="true"
              data-tippy-animation="shift-away"
              data-tippy-delay="50"
              data-tippy-arrow="true"
              data-tippy-theme="sharpborder"
            ></i
          ></a>
        </div>
        <ul class="minicart-list">
          <li class="minicart-product">
            <a class="product-item_remove" href="#"
              ><i
                class="pe-7s-trash"
                data-tippy="Wanna Remove?"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i
            ></a>
            <a href="shop.html" class="product-item_img">
              <img
                class="img-full"
                src="assets/images/product/small-size/1-1-70x70.png"
                alt="Product Image"
              />
            </a>
            <div class="product-item_content">
              <a class="product-item_title" href="shop.html"
                >Tail Light</a
              >
              <span class="product-item_quantity">1 x $80.00</span>
            </div>
          </li>
          <li class="minicart-product">
            <a class="product-item_remove" href="#"
              ><i
                class="pe-7s-trash"
                data-tippy="Wanna Remove?"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i
            ></a>
            <a href="shop.html" class="product-item_img">
              <img
                class="img-full"
                src="assets/images/product/small-size/1-2-70x70.png"
                alt="Product Image"
              />
            </a>
            <div class="product-item_content">
              <a class="product-item_title" href="shop.html"
                >Wiper Blades</a
              >
              <span class="product-item_quantity">1 x $80.00</span>
            </div>
          </li>
          <li class="minicart-product">
            <a class="product-item_remove" href="#">
              <i
                class="pe-7s-trash"
                data-tippy="Wanna Remove?"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i>
            </a>
            <a href="shop.html" class="product-item_img">
              <img
                class="img-full"
                src="assets/images/product/small-size/1-3-70x70.png"
                alt="Product Image"
              />
            </a>
            <div class="product-item_content">
              <a class="product-item_title" href="shop.html"
                >Suspension</a
              >
              <span class="product-item_quantity">1 x $80.00</span>
            </div>
          </li>
          <li class="minicart-product">
            <a class="product-item_remove" href="#">
              <i
                class="pe-7s-trash"
                data-tippy="Wanna Remove?"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i>
            </a>
            <a href="shop.html" class="product-item_img">
              <img
                class="img-full"
                src="assets/images/product/small-size/1-4-70x70.png"
                alt="Product Image"
              />
            </a>
            <div class="product-item_content">
              <a class="product-item_title" href="shop.html"
                >Air Filter</a
              >
              <span class="product-item_quantity">1 x $80.00</span>
            </div>
          </li>
          <li class="minicart-product">
            <a class="product-item_remove" href="#">
              <i
                class="pe-7s-trash"
                data-tippy="Wanna Remove?"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i>
            </a>
            <a href="shop.html" class="product-item_img">
              <img
                class="img-full"
                src="assets/images/product/small-size/1-5-70x70.png"
                alt="Product Image"
              />
            </a>
            <div class="product-item_content">
              <a class="product-item_title" href="shop.html"
                >Car Brakes</a
              >
              <span class="product-item_quantity">1 x $80.00</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="minicart-item_total">
        <span>Subtotal</span>
        <span class="ammount">$240.00</span>
      </div>
      <div class="group-btn_wrap d-grid gap-2">
        <a href="cart.html" class="btn btn-dark btn-primary-hover"
          >View Cart</a
        >
        <a href="checkout.html" class="btn btn-dark btn-primary-hover"
          >Checkout</a
        >
      </div>
    </div>
  </div>
  <div class="global-overlay"></div>
</header>
`;
}

navbarDesign();
