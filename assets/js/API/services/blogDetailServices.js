// END POINTS
const fetchBlogDetailsEndPoint = (projectId, slug) =>
  `${API_BASE_URL}/website/post/get-post-by-slug/${projectId}?slug=${slug}`;
const fetchBlogsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;

const currentPagePath = window.location.href;

// to fetch blog details
async function handleFetchBlogDetails() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const blogSlug = urlParams.get("slug");

    if (websiteID && blogSlug) {
      const response = await fetch(
        fetchBlogDetailsEndPoint(websiteID, blogSlug),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const blogContainer = document.getElementById("blog-details-container");

      const blogDetail = data?.data;

      // setting meta description

      const metaTitle = blogDetail?.seoDetails?.title || "Blog Details";
      const metaDescription =
        blogDetail?.seoDetails?.metaDescription ||
        blogDetail?.seoDetails?.title;
      const metaKeywords =
        blogDetail?.seoDetails?.tags?.length > 0
          ? blogDetail?.seoDetails?.tags.join(", ")
          : blogDetail?.seoDetails?.title;
      const metaImage =
        blogDetail?.banner?.bannerType === MEDIA_TYPES.IMAGE
          ? getFormattedImageURL(blogDetail?.banner?.image)
          : "https://www.atulpublicity.com/assets/imgs/logo/meta_image.png";

      // Update meta tags with dynamic content
      // document.title = metaTitle;
      // document
      //   .querySelector('meta[name="description"]')
      //   .setAttribute("content", metaDescription);
      // document
      //   .querySelector('meta[name="keywords"]')
      //   .setAttribute("content", metaKeywords);
      // document
      //   .querySelector('meta[property="og:title"]')
      //   .setAttribute("content", metaTitle);
      // document
      //   .querySelector('meta[property="og:description"]')
      //   .setAttribute("content", metaDescription);
      // document
      //   .querySelector('meta[property="og:image"]')
      //   .setAttribute("content", metaImage);

      const postedDate = formatDate(blogDetail?.createdAt);
      const blogImage =
        blogDetail?.banner?.bannerType === MEDIA_TYPES.IMAGE
          ? getFormattedImageURL(blogDetail?.banner?.image)
          : "img/logo.jpeg";

      const blogDetailsHTML = `
      <div class="blog-detail-item">
      <div class="blog-img img-hover-effect">
      <img
        class="img-full"
        src="${blogImage}"
        alt="${blogDetail?.title}"
      />
    </div>
    <div class="blog-content pt-5 pt-lg-0">
      <div class="meta-with-title mb-8">
        <div class="blog-meta text-paynes-grey pb-1">
          <ul>
            <li class="date">
              <i class="pe-7s-date"></i>
              ${postedDate}
            </li>
          </ul>
        </div>
        <h2 class="title mb-0">
          ${blogDetail?.title}
        </h2>
      </div>
      <p class="short-desc mb-3 " style="font-size=14px,">
        ${blogDetail?.description}
      </p>

      ${
        blogDetail?.multipleDescriptions?.length > 0
          ? blogDetail?.multipleDescriptions
              ?.map(
                (item) => `
        <p class="short-desc mb-7">
          ${item?.description}
        </p>

        ${
          item?.singleImage?.image
            ? `<div class="mb-20" style="width: 100%;">
          <a
              href=${item?.singleImage?.hyperLink}
              target="_blank"
              style="width: 100%;"
              >
          <img src=${getFormattedImageURL(
            item?.singleImage?.image
          )} alt="" style="width: 100%;max-height: 300px;object-fit: cover;" />
          </a>
          </div>
          `
            : ""
        }

        ${
          item?.multipleImages?.length > 0
            ? `
            <div class="row mb-20">
            ${item?.multipleImages
              ?.map(
                (image) =>
                  `
                  <div class="col-md-6">
                  <img src=${getFormattedImageURL(
                    image
                  )} alt="" style="width:100%;aspect-ratio:4/3;object-fit:cover;" />
                  </div>
                  `
              )
              ?.join("")}
            </div>              
          `
            : ""
        }
       
        ${
          item?.youtube
            ? `
            <iframe
            src="https://www.youtube.com/embed/${item?.youtube
              ?.split("/")
              ?.pop()}"
            style=
              "border:none;
              overflow:hidden;
              height:300px;
              width:100%;
              margin:20px 0px;"
            
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
          />
          `
            : ""
        }
       
        ${
          item?.facebook
            ? `
            <iframe
            src="https://www.facebook.com/plugins/post.php?href=${item?.facebook}&width=1200&show_text=true&height=520&appId"
            style=
              "border:none;
              overflow:hidden;
              height:300px;
              width:100%;
              margin:20px 0px;"
            
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
          />
          `
            : ""
        }
       
        ${
          item?.instagram
            ? `
            <iframe
            src="https://www.instagram.com/p/${
              item?.instagram?.split("/")[4]
            }/embed"
            style=
              "border:none;
              overflow:hidden;
              height:300px;
              width:100%;
              margin:20px 0px;"
            
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
          />
          `
            : ""
        }
       
        ${
          item?.twitter
            ? `
            <iframe
            src="https://twitframe.com/show?url=${item?.twitter}"
            style=
              "border:none;
              overflow:hidden;
              height:300px;
              width:100%;
              margin:20px 0px;"
            
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
          />
          `
            : ""
        }

        `
              )
              ?.join("")
          : ""
      }
       
      
      <p class="short-desc mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magnl
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occa cupidatat non proident, sunt in culpa qui
        officia deserunt mollit Lorem ipsum dolor sit amet,
        consectetur adipisici elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitat ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <div class="meta-wtih-social">
        <div class="meta-item">
          <h5 class="mb-0">Share Via :</h5>
        </div>
        <div class="social-link">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/sharer.php?u=${currentPagePath}"
                target="_blank"
                style="font-size:25px;"
                >
                <i class="fa fa-facebook"></i>
                </a>
                </li>
            <li>
              <a
              href="https://api.whatsapp.com/send?text=${currentPagePath}" 
              target="_blank"              
              style="font-size:25px;"
              >
              <i class="fa fa-whatsapp"></i>
              </a>
              </li>
              <li>
              <a
                href="https://twitter.com/intent/tweet?text=${currentPagePath}"
                target="_blank"
                style="font-size:25px;"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div class="page-navigation py-10"></div>
    </div>
    </div>

  `;
      // Join the array of HTML strings into a single string

      // set it in the innerHTML of given element by id
      blogContainer.innerHTML = blogDetailsHTML;
    } else {
      console.error("WebsiteId or BlogID is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// to fetch blogs
async function handleFetchBlogs() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    if (websiteID) {
      const response = await fetch(fetchBlogsEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const blogContainer = document.getElementById("recent-blogs-container");
      // Assuming data?.data is an array
      const blogItemsHTML = (data?.data || [])?.map((item) => {
        const postedDate = formatDate(item?.createdAt);
        const detailPagePath = `blog-detail.html?slug=${item?.seoDetails?.slug}`;
        const blogImage =
          item?.banner?.bannerType === MEDIA_TYPES.IMAGE
            ? getFormattedImageURL(item?.banner?.image)
            : "img/logo.jpeg";
        return `
                         <div class="swiper-slide">
                            <div class="blog-list-item">
                              <div class="blog-list-img">
                                <a
                                  class="img-zoom-effect"
                                  href="${detailPagePath}"
                                >
                                  <img
                                    class="img-full"
                                    src="${blogImage}"
                                    alt="${item?.title}"
                                  />
                                </a>
                              </div>
                              <div class="blog-list-content">
                                
                                <h2 class="title mb-0">
                                  <a style="font-size: 16px;line-height: 20px" href="${detailPagePath}"
                                    >${item?.title?.slice(0, 50) + "..."}</a
                                  >
                                </h2>
                              </div>
                            </div>
                          </div>
                  
  `;
      }); // Join the array of HTML strings into a single string

      // set it in the innerHTML of given element by id
      blogContainer.innerHTML = `
          
  ${blogItemsHTML?.length > 0 ? blogItemsHTML?.join("") : ""}
                
          `;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function homeServicesCallback() {
  await handleFetchBlogDetails();
  await handleFetchBlogs();
}

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
