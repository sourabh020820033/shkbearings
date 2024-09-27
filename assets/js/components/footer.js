function footerDesign() {
  const footerContainer = document.getElementById("footer-layout-container");
  const currentDate = new Date();
  const cuurentYear = currentDate.getFullYear();
  footerContainer.innerHTML = `
    <div class="footer-area">
        <div
        style="background-color: rgb(5, 5, 31)"
          class="footer-top section-space-y-axis-100 text-lavender"
          
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="widget-item">
                  <div class="footer-logo pb-4">
                    <a href="index.html">
                     
                       <img src="assets/images/logo/dark.svg" style="object-fit: contain; width: 180px" alt="Logo" />
                    </a>
                  </div>
                  <p class="short-desc mb-2">
                  SHK BEARINGS, dedicated to crafting precision components that drive innovation and empower progress.
                  </p>
                  <div class="social-link pt-2">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-tippy="Twitter"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-tippy="Tumblr"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i class="fa fa-tumblr"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-tippy="Facebook"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-tippy="Instagram"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 pt-8 pt-lg-0">
                <div class="widget-item">
                  <h3 class="widget-title mb-5">Quick Links</h3>
                  <ul class="widget-list-item">
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="index.html#home-products-wrapper">Products</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="business-segment.html">Business Segment</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="dealership.html">Dealer & Distributors</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 pt-8 pt-lg-0">
                <div class="widget-item">
                  <h3 class="widget-title mb-5">Company</h3>
                  <ul class="widget-list-item">
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="index.html#home-clientele-container">Clientele</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="index.html#home-testimonial-container">Testimonials</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="blog.html">Blogs</a>
                    </li>
                    <li>
                      <i class="fa fa-chevron-right"></i>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 pt-8 pt-lg-0">
                <div class="widget-item">
                  <h3 class="widget-title mb-5">Reach Us</h3>
                </div>
                <div class="widget-contact-info pb-2">
                  <ul>
                    <li>
                      ${WEBSITE_ADDRESS}
                    </li>
                    <li>
                    <a href="mailto:${WEBSITE_EMAIL_ONE}">${WEBSITE_EMAIL_ONE}</a>
                    </li>
                    <li>
                    <a href="tel://${WEBSITE_MOBILE_NUMBER}">${WEBSITE_MOBILE_NUMBER}</a>
                    </li>
                  </ul>
                </div>       
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom bg-midnight-express py-3">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright">
                  <span class="copyright-text"
                    >© ${cuurentYear} 
                    <a
                      href="https://${WEBSITE_LINK}"
                      rel="noopener"
                      target="_blank"
                      >${WEBSITE_NAME}</a
                    >. All rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
}

footerDesign();
