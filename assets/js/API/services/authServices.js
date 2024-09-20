const FETCH_WEBSITE_DETAILS_END_POINT = `${API_BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;

const fetchCategoriesForNavbarEndPoint = (projectId) =>
  `${API_BASE_URL}/website/category/get-all-categories/${projectId}`;
const fetchProductsForNavbarEndPoint = (projectId) =>
  `${API_BASE_URL}/website/product-management/get-all-products/${projectId}`;

// to fetch the website details
async function handleFetchWebsiteDetails(callbackServices = () => {}) {
  try {
    const response = await fetch(FETCH_WEBSITE_DETAILS_END_POINT, {
      method: FETCH_METHODS.GET,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data?.data) {
      // store the website details in session storage
      sessionStorage.setItem(WEBSITE_DATA_KEY, JSON.stringify(data?.data));

      const categoryResponse = await fetch(
        fetchCategoriesForNavbarEndPoint(data?.data?._id),
        {
          method: FETCH_METHODS.GET,
        }
      );
      const productResponse = await fetch(
        fetchProductsForNavbarEndPoint(data?.data?._id),
        {
          method: FETCH_METHODS.GET,
        }
      );
      console.log("productResponse=", productResponse);
      // if (!categoryResponse.ok) {
      //   throw new Error(`HTTP error! Status: ${categoryResponse.status}`);
      // }
      if (!productResponse.ok) {
        throw new Error(`HTTP error! Status: ${productResponse.status}`);
      }

      // const categoryData = await categoryResponse.json();
      const productData = await productResponse.json();

      if (productResponse) {
        const navbarCategoryListContainer = document.getElementById(
          "navbar-category-list-container"
        );
        navbarCategoryListContainer.innerHTML =
        productData?.data?.length > 0
            ? productData?.data
                ?.map((item) => {
                  const detailPagePath = `product-detail.html?id=${item?.seoDetails?.slug}`;

                  return `
        <li 
        style="
        font-size: 15px;      
        margin: 25px 0;
        "
        >
        <a style="color: #848484;" href="${detailPagePath}">${item?.title}</a>
      </li>
        `;
                })
                ?.join("")
            : "";
      }

      // callback other APIs
      callbackServices();
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Call the function
handleFetchWebsiteDetails();
