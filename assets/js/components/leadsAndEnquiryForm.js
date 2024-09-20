const currentPage = window.location.pathname.split("/").pop();

function leadsAndEnquiryDetails() {
  const leadsAndEnquiryFormContainer = document.getElementById(
    "leads-and-enquiry-form-container"
  );

  leadsAndEnquiryFormContainer.innerHTML = `
  <form class="feedback-form pt-8" onsubmit="onSubmit(event)">
  <div class="group-input">
      <div class="form-field me-md-6 mb-6 mb-md-0">
          <input type="text" name="${
            LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME
          }" placeholder="Name*" class="input-field" required="true">
      </div>
      <div class="form-field">
          <input type="text" name="${
            LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER
          }" placeholder="Contact Number*" minLength="10" maxLength="10" class="input-field" required="true">
      </div>
  </div>
  <div class="group-input mt-6">    
      <div class="form-field me-md-6 mb-6 mb-md-0">
          <input type="email" name="${
            LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL
          }" placeholder="Your Email" class="input-field">
      </div>
      ${
        currentPage === "dealership.html"
          ? `
        <div class="form-field">
           <input type="text" name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.STATE}" placeholder="State*" class="input-field" required="true">
       </div>      
        `
          : ""
      }
      
      ${
        currentPage?.includes("business-segment.html")
          ? `
        <div class="form-field">
           <input type="text" name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.FIRM_NAME}" placeholder="Firm Name*" class="input-field" required="true">
       </div>
        `
          : ""
      }
  </div>

  ${
    currentPage === "dealership.html"
      ? `
      <div class="group-input mt-6">
      <div class="form-field me-md-6 mb-6 mb-md-0">
      <input type="text" name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.CITY}" placeholder="City*" class="input-field" required="true">

      </div>

   <div class="form-field">
      <input type="text" name="${LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.PINCODE}" placeholder="Pincode" class="input-field">
  </div>
  </div>    
    `
      : ""
  }

  <div class="form-field mt-6">
      <textarea name="${
        LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS
      }" placeholder="Remarks" class="textarea-field"></textarea>
  </div>
  <div class="button-wrap mt-8">
      <button type="submit" value="submit" id="leads-and-enquiry-form-button" class="button-class" name="submit">Submit</button>
  </div>
</form>
  `;
}

leadsAndEnquiryDetails();
