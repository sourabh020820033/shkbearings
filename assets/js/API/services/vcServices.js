// END POINTS
const fetchStaffEndPoint = (projectId, mobileNumber) =>
  `${API_BASE_URL}/website/staff-management/get-website-staff-by-mobile-number/${projectId}/${mobileNumber}`;

// to fetch blogs
async function handleFetchStaff() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const mobileNumber = urlParams.get("mobileNumber");
    if (websiteID && mobileNumber) {
      const response = await fetch(
        fetchStaffEndPoint(websiteID, mobileNumber),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const blogContainer = document.getElementById("blog-list-item");

      // Assuming data?.data is an array
      const blogItemsHTML = (data?.data || [])
        .map((item) => {
          const postedDate = formatDate(item?.createdAt);
          const detailPagePath = `blog-details.html?slug=${item?.seoDetails?.slug}`;
          const blogImage =
            item?.banner?.bannerType === MEDIA_TYPES.IMAGE
              ? getFormattedImageURL(item?.banner?.image)
              : "img/logo.jpeg";

          return `
          <article class="cxu-post cxu-fade" data-ease="back">
            <div class="thumb">
              <a href=${detailPagePath}>
                <img src=${blogImage} alt=${item?.title}/>
              </a>
            </div>
            <div class="content">
              <ul class="meta">
                <li><a>${postedDate}</a></li>
              </ul>
              <h4 class="title">
                <a href=${detailPagePath}>${item?.title}</a>
              </h4>
              <a href=${detailPagePath} class="link cxu-btn-border">Read More</a>
            </div>
          </article>
        `;
        })
        .join("");

      // set it in the innerHTML of the given element by id
      blogContainer.innerHTML = blogItemsHTML;
    } else {
      console.error("WebsiteId Or Mobile Number is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchStaff();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
