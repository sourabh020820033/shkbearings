function productEnquiryDetails() {
  // fetch service type from query
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");

  const productEnquiryFormContainer = document.getElementById(
    "product-enquiry-form-container"
  );

  productEnquiryFormContainer.innerHTML = `
  <form class="feedback-form pt-8" onsubmit="onSubmit(event)">
  <div class="group-input">
      <div class="form-field me-md-6 mb-6 mb-md-0">
          <input type="text" name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" placeholder="Name*" class="input-field" required="true">
      </div>
      <div class="form-field">
          <input type="text" name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" placeholder="Contact Number*" minLength="10" maxLength="10" class="input-field" required="true">
      </div>
  </div>
  <div class="group-input mt-6">    
      <div class="form-field me-md-6 mb-6 mb-md-0">
          <input type="email" name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" placeholder="Your Email" class="input-field">
      </div>
       <div class="form-field">
          <input type="text" name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE}" placeholder="Product*" class="input-field" value="${productName}" readonly="true" required="true">
      </div>
  </div>

  <div class="form-field mt-6">
      <textarea name="${PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}" placeholder="Remarks" class="textarea-field"></textarea>
  </div>
  <div class="button-wrap mt-8">
      <button type="submit" value="submit" id="product-enquiry-form-button" class="btn btn-custom-size lg-size btn-primary" name="submit">Submit</button>
  </div>
</form>
  `;
}

productEnquiryDetails();
