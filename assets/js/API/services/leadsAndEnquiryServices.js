// END POINTS

const CREATE_LEADS_AND_ENQUIRY_END_POINT = `${API_BASE_URL}/website/dealership-enquiry/create-dealership-enquiry`;

async function handleCreateLeadsAndEnquiry(event) {
  const toast = document.getElementById("custom-toast");
  const currentPage = window.location.pathname.split("/").pop();
  let enquiryType = "";

  if (currentPage === "dealership.html") {
    enquiryType = ENQUIRY_TYPES.DEALERSHIP_ENQUIRY;
  } else if (currentPage?.includes("business-segment.html")) {
    // Get all tab-pane elements within the tab-content container
    const tabPanes = document.querySelectorAll(".tab-content .tab-pane");

    // Find the active tab
    let activeTab;
    tabPanes.forEach((tabPane) => {
      if (
        tabPane.classList.contains("show") &&
        tabPane.classList.contains("active")
      ) {
        activeTab = tabPane.id;
      }
    });

    if (activeTab === "automotive") {
      enquiryType = ENQUIRY_TYPES.AUTOMOTIVE_ENQUIRY;
    } else if (activeTab === "industrial") {
      enquiryType = ENQUIRY_TYPES.INDUSTRIAL_ENQUIRY;
    }
  }

  try {
    event.preventDefault();
    const leadsAndEnquiryForm = event.target;
    const websiteID = getWebsiteID();

    const payload = {
      [LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"]`
        ).value,
      [LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"]`
        ).value,
      [LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"]`
        ).value,
      [LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS]:
        leadsAndEnquiryForm.querySelector(
          `textarea[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"]`
        ).value,
      [LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.ENQUIRY_TYPE]:
        enquiryType,
      [WEBSITE_ID_KEY]: websiteID,
    };

    if (currentPage === "dealership.html") {
      payload[LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.STATE] =
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.STATE}"]`
        ).value;
      payload[LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CITY] =
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CITY}"]`
        ).value;
      payload[LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.PINCODE] =
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.PINCODE}"]`
        ).value;
    } else if (currentPage?.includes("business-segment.html")) {
      payload[LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.FIRM_NAME] =
        leadsAndEnquiryForm.querySelector(
          `input[name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.FIRM_NAME}"]`
        ).value;
    }

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_LEADS_AND_ENQUIRY_END_POINT, {
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

    leadsAndEnquiryForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById("leads-and-enquiry-form-button").disabled = false;
}

const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById("leads-and-enquiry-form-button").disabled = true;
  handleCreateLeadsAndEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
