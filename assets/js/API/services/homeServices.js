// IMAGE PATH
const imageBucketPath = "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/";
// END POINTS
const fetchCategoriesEndPoint = (projectId) =>
  `${API_BASE_URL}/website/category/get-all-categories/${projectId}`;
const fetchProductsForHomeEndPoint = (projectId) =>
  `${API_BASE_URL}/website/product-management/get-all-products/${projectId}`;
const fetchTestimonialsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/testimonial/get-all-testimonials/${projectId}`;
const fetchBlogsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;
const fetchClientelesEndPoint = (projectId) =>
  `${API_BASE_URL}/website/association/get-all-associations/${projectId}?type=${ASSOCIATE_TYPES.CLIENT}`;
const fetchBannersEndPoint = (projectId) =>
  `${API_BASE_URL}/website/banner/get-all-banners/${projectId}?type=${BANNER_TYPES.HOME_BANNER}`;

// Utility function to handle fetch requests
async function fetchData(endpoint) {
  try {
    const websiteID = getWebsiteID();

    if (!websiteID) {
      console.error("WebsiteId is not available.");
      return;
    }

    const response = await fetch(endpoint(websiteID), {
      method: FETCH_METHODS.GET,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data?.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Function to map testimonial data to HTML
function mapTestimonialItem(item) {
  return `
  <div class="swiper-slide testimonial-item">
  <div class="user-info mb-3">
    
  
  <div class="user-content" style="display: flex;">
  <div style="width: 33%;margin-right: 10px">
  <img
  style="width: 55px;aspect-ratio: 1/1;border-radius: 50%;object-fit: cover"
  src="${getFormattedImageURL(item?.image)}" 
  alt="${item?.name}"
  />
  </div>
  <div class="" style="text-align: left">
  <h4 class="user-name mb-1">${item?.name}</h4>
  <span class="user-occupation">${item?.companyProfile}</span>
  </div>
    </div>
  </div>
  <p class="user-comment mb-6" style="text-align: left">
  ${item?.review}
  </p>
</div>
  `;
}

// Function to map clientele data to HTML
function mapBlogItem(item) {
  const postedDate = formatDate(item?.createdAt);
  const detailPagePath = `blog-detail.html?slug=${item?.seoDetails?.slug}`;
  const blogImage =
    item?.banner?.bannerType === MEDIA_TYPES.IMAGE
      ? getFormattedImageURL(item?.banner?.image)
      : "img/logo.jpeg";
  return `
  <div class="swiper-slide">
  <div class="blog-item">
    <div class="blog-img img-hover-effect">
      <a class="img-zoom-effect" href="${detailPagePath}">
        <img
          class="img-full blogimg"
          src="${blogImage}"
          alt="${item?.title}"
        />
      </a>
    </div>
    <div class="blog-content blog-desc">
      <h2 class="">
        <a style="font-size: 24px;line-height: 20px; color: black; font-weight: 600" href="${detailPagePath}"
          >${item?.title}</a
        >
      </h2>
      <p class="">
      ${item?.description?.slice(0, 80) + "..."}
      </p>
      <div class="button-wrap">
        <a class="read-more-btn gradient-text"
          href="${detailPagePath}"
          >Read More</a
        >
      </div>
    </div>
  </div>
</div>
  `;
}

// Function to map clientele data to HTML
function mapClienteleItem(item) {
  return `
  
     <div class="swiper-slide" style="width: 500px; margin-right: 20px;">
       <a class="brand-item" href="${item?.hyperLink || ""}">
         <img
          style="width: 100%;height: auto;object-fit: contain"
           src="${getFormattedImageURL(item?.logo)}"
           alt="${item?.name}"
         />
       </a>
     </div>
  `;
}

// Function to map banner data to HTML
function mapBannerItem(item) {
  var imgUrl = item?.bannerImage?.webView;
  var className = "bannerimg";
  const width = $(window).width();

  if (width <= 768) {
    imgUrl = item?.bannerImage?.mobileView;
    className = ""; // Optional: you might want to use a different class or none
  }

  return `
    <div class="swiper-slide slide-style-2">
      <div
        class="slide-inner background-responsive-style banner-img-wrapper"
        style="
        background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        <div class="container zoomoutheader1">
          <div class="row">
           
            <div class="col-lg-12 col-md-12 d-flex justify-content-center align-items-center position-relative">
              <div class="inner-img">
                <img src="assets/images/slider/bg/des.png" alt="Background Image" class="background-img"/>
                <img src="${getFormattedImageURL(imgUrl)}" class="${className} bannerimgs" alt="Banner Image"/>
                <div class="bannertitle"> ${item?.title}</div>
              </div>
            </div> 
             <div class="col-lg-12 col-md-12 d-flex justify-content-end align-items-center" style="">
              <a href="tel:1800-203-3323" class="call-us-text">Toll free: 1800-203-3323</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to map category data to HTML
function mapCategoryItem(item) {
  const detailPagePath = `category-detail.html?id=${item?._id}`;
  return `
  <div class="col-lg-4">
  <a href="${detailPagePath}">
  <div class="category-card">
  <div class="image">
  <img src="${getFormattedImageURL(item?.icon)}"/>
  </div>
  <p class="mt-2 pb-5">${item?.name}</p>
  </div>
  </a>
  </div>
  `;
}
// map product 
function mapProductItem111(item){
  const detailPagePath = `product-detail.html?id=${item?.seoDetails?.slug}`;
  return `
  <div class="col-lg-3">
  <a href="${detailPagePath}">
  <div class="category-card">
  <div class="image">
  <img src="${getFormattedImageURL(item?.arrays?.arrayOne[0])}"/>
  </div>
  <p class="mt-2 pb-5">${item?.title}</p>
  </div>
  </a>
  </div>
  `;
}
function mapProductItem(item) {
  const postedDate = formatDate(item?.createdAt);
  const detailPagePath = `product-detail.html?id=${item?.seoDetails?.slug}`;
  const blogImage =
    item?.banner?.bannerType === MEDIA_TYPES.IMAGE
      ? getFormattedImageURL(item?.banner?.image)
      : "img/logo.jpeg";
  return `
  <div class="swiper-slide">
  <div class="blog-item">
    <div class="blog-img">
      <a class="" href="${detailPagePath}">
        <img
          class="img-full blogimg"
          src="${getFormattedImageURL(item?.arrays?.arrayOne[0])}"
          alt="${item?.title}"
        />
      </a>
    </div>
    <div class="blog-content blog-desc" style="text-align: center; margin-top: 50px;">
      <h2 class="">
        <a style="font-size: 24px;line-height: 20px; color: black; font-weight: 600" href="${detailPagePath}"
          >${item?.title}</a
        >
      </h2>
      
      
    </div>
  </div>
</div>
  `;
}
// to fetch testimonials
async function handleFetchTestimonials() {
  const testimonialData = await fetchData(fetchTestimonialsEndPoint);

  const testimonialContainer = document.getElementById(
    "home-testimonial-container"
  );
  const testimonialItems =
    testimonialData?.length > 0
      ? testimonialData?.map((item) => mapTestimonialItem(item))?.join("")
      : "";

  testimonialContainer.innerHTML = testimonialItems
    ? `
      <div     
        class="testimonial-area bg-white-smoke"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
            <div class="section-title style-2">
              <div class="swiper-container testimonial-slider">
             
                <div
                  class="swiper-wrapper"
                >${testimonialItems}</div>
                <!-- Add Pagination -->
                <div class="testimonial-pagination with-bg"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  `
    : "";
}

// to fetch banners
async function handleFetchBanners() {
  const bannerData = await fetchData(fetchBannersEndPoint);
  console.log("bannerData=", bannerData);
  const bannerContainer = document.getElementById("home-banner-container");
  const mobileBannerContainer = document.getElementById("home-mobile-banner-container");
  const bannerItems =
    bannerData?.length > 0
      ? bannerData?.map((item) => mapBannerItem(item))?.join("")
      : "";

  bannerContainer.innerHTML = bannerItems;
}

// to fetch categories
async function handleFetchCategories() {
  const categoryData = await fetchData(fetchCategoriesEndPoint);

  const categoryContainer = document.getElementById("home-category-container");
  const categoryItems =
    categoryData?.length > 0
      ? categoryData?.map((item) => mapCategoryItem(item))?.join("")
      : "";

  // categoryContainer.innerHTML = categoryItems;
}

// to fetch categories
async function handleFetchProducts11() {
  const productData = await fetchData(fetchProductsForHomeEndPoint);

  const productContainer = document.getElementById("home-product-container");
  const productItems =
  productData?.length > 0
      ? productData?.slice(0, 4)?.map((item) => mapProductItem(item))?.join("")
      : "";

      productContainer.innerHTML = productItems;
}
async function handleFetchProducts() {
  const productData = await fetchData(fetchProductsForHomeEndPoint);

  const productContainer = document.getElementById("home-product-container");
  const productItems =
  productData?.length > 0
      ? productData?.map((item) => mapProductItem(item))?.join("")
      : "";

      productContainer.innerHTML = productItems
    ? `
  <div class="blog-area mt-lg-10 mb-lg-10">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="swiper-container blog-slider">
          <div class="swiper-wrapper">${productItems}</div>
            <!-- Add Pagination -->
        </div>
      </div>
    </div>
  </div>
</div>
  `
    : "";
}
// this swiper code is not working need some changes 
// async function handleFetchProducts() {
  
//   const productData = await fetchData(fetchProductsForHomeEndPoint);
//  document.querySelector("#home-product-container .swiper-wrapper");

  
//   productContainer.innerHTML =
//     productData?.length > 0
//       ? productData.slice(0, 4).map(item => <div class="swiper-slide">${mapProductItem(item)}</div>).join("")
//       : "";

//   // Initialize Swiper
//   const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 10, 
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {

//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     },
//   });
// }

// to fetch blogs
async function handleFetchBlogs() {
  const blogData = await fetchData(fetchBlogsEndPoint);

  const blogContainer = document.getElementById("home-blog-container");
  const blogItems =
    blogData?.length > 0
      ? blogData?.map((item) => mapBlogItem(item))?.join("")
      : "";

  blogContainer.innerHTML = blogItems
    ? `
  <div class="blog-area mt-lg-10 mb-lg-10">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="swiper-container blog-slider">
          <div class="swiper-wrapper">${blogItems}</div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
    : "";
}

// to fetch clientele
async function handleFetchClienteles() {
  const clienteleData = await fetchData(fetchClientelesEndPoint);

  const clienteleContainer = document.getElementById(
    "home-clientele-container"
  );
  const clienteleItems =
    clienteleData?.length > 0
      ? clienteleData?.map((item) => mapClienteleItem(item))?.join("")
      : "";

  clienteleContainer.innerHTML = clienteleItems
    ? `
    <div class="brand-area section-space-y-axis-100 white-smoke-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="swiper-container brand-slider">
              <div class="swiper-wrapper">
                ${clienteleItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

`
    : "";
}

const homeServicesCallback = async () => {
  await handleFetchBanners();
  await handleFetchProducts();
  await handleFetchCategories();
  await handleFetchTestimonials();
  await handleFetchBlogs();
  await handleFetchClienteles();
  reUploadSwiperClassesScript();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
