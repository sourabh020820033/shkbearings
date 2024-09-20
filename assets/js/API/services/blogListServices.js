// END POINTS
const fetchBlogsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;

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
      const blogContainer = document.getElementById("blog-list-container");

      // Assuming data?.data is an array
      const blogItemsHTML = (data?.data || [])
        .map((item) => {
          const postedDate = formatDate(item?.createdAt);
          const detailPagePath = `blog-detail.html?slug=${item?.seoDetails?.slug}`;
          const blogImage =
            item?.banner?.bannerType === MEDIA_TYPES.IMAGE
              ? getFormattedImageURL(item?.banner?.image)
              : "img/logo.jpeg";

          return `
          <div class="col-12 mb-7">
                    <div class="blog-item row gx-md-8">
                      <div class="col-lg-6">
                        <div class="blog-img img-hover-effect">
                          <a class="img-zoom-effect" href="${detailPagePath}">
                            <img
                              class="img-full"
                              src="${blogImage}"
                              alt="${item?.title}"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="blog-content pt-5 pt-lg-0">
                          <div class="blog-meta text-paynes-grey pb-1">
                            <ul>                            
                              <li class="date">
                                <i class="pe-7s-date"></i>
                                ${postedDate}
                              </li>
                            </ul>
                          </div>
                          <h2 class="mb-3">
                            <a class="title" href="${detailPagePath}"
                              >${item?.title}</a
                            >
                          </h2>
                          <p class="short-desc mb-7">
                            ${item?.description?.slice(0, 80) + "..."}
                          </p>
                          <div class="button-wrap">
                          <button class="button-class" style="margin-top: 0px; padding: 5px 15px">
                            <a
                              class="" style="color: white"
                              href="${detailPagePath}"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
        `;
        })
        .join("");

      blogContainer.innerHTML = blogItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchBlogs();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
