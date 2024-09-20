// END POINTS

const CREATE_PRODUCT_ENQUIRY_END_POINT = `${API_BASE_URL}/website/service-enquiry/create-service-enquiry`;

async function handleCreateProductEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const productEnquiryForm = event.target;
    const websiteID = getWebsiteID();

    const payload = {
      [PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        productEnquiryForm.querySelector(
          `input[name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"]`
        ).value,
      [PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        productEnquiryForm.querySelector(
          `input[name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"]`
        ).value,
      [PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        productEnquiryForm.querySelector(
          `input[name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"]`
        ).value,
      [PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS]:
        productEnquiryForm.querySelector(
          `textarea[name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"]`
        ).value,
      [PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE]:
        productEnquiryForm.querySelector(
          `input[name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE}"]`
        ).value,
      [WEBSITE_ID_KEY]: websiteID,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_PRODUCT_ENQUIRY_END_POINT, {
      method: FETCH_METHODS.POST,
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display a toast message
    callToastMessage(toast, data?.message, "var(--success)");

    productEnquiryForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById("product-enquiry-form-button").disabled = false;
}

const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById("product-enquiry-form-button").disabled = true;
  handleCreateProductEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
