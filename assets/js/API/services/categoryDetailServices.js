// END POINTS
const fetchCategoryDetailsEndPoint = (projectId, id) =>
  `${API_BASE_URL}/website/category/get-category-by-id/${projectId}?id=${id}`;

// to fetch category details
async function handleFetchCategoryDetails() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get("id");

    if (websiteID && categoryId) {
      const response = await fetch(
        fetchCategoryDetailsEndPoint(websiteID, categoryId),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const categoryImageContainer = document.getElementById(
        "category-image-container"
      );
      const categoryGrandHeadingContainer = document.getElementById(
        "category-grand-heading-container"
      );
      const categoryContentContainer = document.getElementById(
        "category-content-container"
      );

      const categoryDetail = data?.data;
      const categoryStandardName = convertToStandardName(categoryDetail?.name);

      categoryImageContainer.innerHTML = `
      <div
      class="mb-3"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <img
        src="assets/images/logo/dark.svg"
        style="width: 100px; object-fit: contain"
        alt="Header Logo"
      />
    </div>
    <h2 class="mb-3" style="text-align: center; color: white">
      ${categoryDetail?.name}
    </h2>
    <h5
      class="short-desc mb-5"
      style="text-align: center; color: white; font-weight: 300"
    >
      ${categoryDetail?.subTitle}
    </h5>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <img
        src="${getFormattedImageURL(categoryDetail?.icon)}"
        class="category-detail-banner-image"
        alt="${categoryDetail?.name}"
      />
    </div>
      `;
      categoryGrandHeadingContainer.innerHTML = `  <h2 class="grand-light-heading mb-10">
              ${categoryDetail?.name}
            </h2>`;

      categoryContentContainer.innerHTML = `
      <h4 class="mb-5" style="text-align: center;text-transform: uppercase;">
              ${categoryDetail?.subTitle}
            </h4>
            <p class="short-desc mb-10" style="text-align: justify">
              ${categoryDetail?.description}
            </p>

            <p class="mt-10 mb-10">
              At SHK BEARINGS, we are committed to providing
              high-quality bearing solutions backed by exceptional customer
              service. Contact us today to discuss your bearing requirements and
              experience the difference.
            </p>
            <div style="display: flex; justify-content: center">
              <div class="button-wrap">
                <a
                  class="btn btn-custom-size lg-size btn-primary"
                  href="product-enquiry.html?product=${categoryStandardName}"
                  >Reach Us</a
                >
              </div>
            </div>
      `;
    } else {
      console.error("WebsiteId or BlogID is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function homeServicesCallback() {
  await handleFetchCategoryDetails();
}

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
