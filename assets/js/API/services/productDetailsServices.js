// END POINTS
const fetchProductDetailsEndPoint = (projectId, id) =>
    `${API_BASE_URL}/website/product-management/get-product-by-slug/${projectId}?slug=${id}`;
  
  // to fetch category details
  async function handleFetchCategoryDetails() {
    try {
      // get id from session storage
      const websiteID = getWebsiteID();
      const urlParams = new URLSearchParams(window.location.search);
      const categoryId = urlParams.get("id");
  
      if (websiteID && categoryId) {
        const response = await fetch(
            fetchProductDetailsEndPoint(websiteID, categoryId),
          {
            method: FETCH_METHODS.GET,
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("productdetails=", data);
        const categoryImageContainer = document.getElementById(
          "category-image-container"
        );
        const categoryGrandHeadingContainer = document.getElementById(
          "category-grand-heading-container"
        );
        const categoryContentContainer = document.getElementById(
          "category-content-container"
        );
  
        const productDetail = data?.data;
        const categoryStandardName = convertToStandardName(productDetail?.title);
  
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
        ${productDetail?.title}
      </h2>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <img
          src="${getFormattedImageURL(productDetail?.arrays?.arrayOne[0])}"
          class="category-detail-banner-image"
          alt="${productDetail?.title}"
        />
      </div>
        `;
        categoryGrandHeadingContainer.innerHTML = `  <h2 class="grand-light-heading mb-10">
                ${productDetail?.title}
              </h2>`;
  
        categoryContentContainer.innerHTML = `
        
              <p class="short-desc mb-10" style="text-align: justify">
                ${productDetail?.description}
              </p>
  
              <p class="mt-10 mb-10">
                At SHK BEARINGS, we are committed to providing
                high-quality bearing solutions backed by exceptional customer
                service. Contact us today to discuss your bearing requirements and
                experience the difference.
              </p>
              <div style="display: flex; justify-content: center">
                <div class="button-wrap">
                   <button class="button-class"><a
                    class="" style="color: white;"
                    href="product-enquiry.html?product=${categoryStandardName}"
                    >Reach Us</a
                  > </button>
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
  