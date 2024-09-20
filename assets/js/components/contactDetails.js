function contactDetails() {
  const contactDetailsContainer = document.getElementById(
    "contact-details-container"
  );
  const contactFormContainer = document.getElementById(
    "contact-form-container"
  );

  contactDetailsContainer.innerHTML = `
  <div class="col-lg-4 col-sm-6">
  <div class="shipping-item">
    <div class="shipping-img">
      <img
        src="assets/images/shipping/icon/phone.png"
        alt="Shipping Icon"
      />
    </div>
    <div class="shipping-content">
      <h2 class="title">Toll Free</h2>
      <p class="short-desc mb-0"><a href="tel://${WEBSITE_MOBILE_NUMBER}">${WEBSITE_MOBILE_NUMBER}</a></p>
    </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 pt-4 pt-xl-0">
  <div class="shipping-item">
    <div class="shipping-img">
      <img
        src="assets/images/shipping/icon/message.png"
        alt="Shipping Icon"
      />
    </div>
    <div class="shipping-content">
      <h2 class="title">Email</h2>
      <p class="short-desc mb-0"><a href="mailto:${WEBSITE_EMAIL_ONE}">${WEBSITE_EMAIL_ONE}</a></p>
    </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 pt-4 pt-xl-0">
  <div class="shipping-item">
    <div class="shipping-img">
      <img
        src="assets/images/shipping/icon/home.png"
        alt="Shipping Icon"
      />
    </div>
    <div class="shipping-content">
      <h2 class="title mt-7">Address:</h2>
      <p class="short-desc mb-0"> ${WEBSITE_ADDRESS}</p>
    </div>
  </div>
</div>
 `;

  contactFormContainer.innerHTML = `
                 
                 <form
                    id="contact-form"
                    class="contact-form"
                    onsubmit="onSubmit(event)"
                  >
                    <h4 class="contact-form-title mb-7">Send Us a Message</h4>
                    <div class="group-input">
                      <div class="form-field me-xl-6">
                        <input
                          type="text"
                          name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"
                          id="con_name"
                          placeholder="Name*"
                          class="input-field"
                          required="true"
                          />
                          </div>
                          <div class="form-field mt-6 mt-xl-0">
                          <input
                          type="text"
                          name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"
                          id="con_email"
                          placeholder="Contact Number*"
                          class="input-field"
                          required="true"
                        />
                      </div>
                    </div>
                    <div class="group-input mt-6">
                      <div class="form-field mt-6 mt-xl-0">
                        <input
                          type="text"
                          name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"
                          id="con_email"
                          placeholder="Email"
                          class="input-field"
                        />
                      </div>
                    </div>
                    <div class="form-field mt-6">
                      <textarea
                        name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"
                        id="con_message"
                        placeholder="Message"
                        class="textarea-field"
                      ></textarea>
                    </div>
                    <div class="button-wrap mt-8">
                      <button
                        type="submit"
                        value="submit"
                        id="contact-form-button"
                        class="button-class"
                        name="submit"
                      >
                        Submit
                      </button>
                      <p class="form-message mt-3 mb-0"></p>
                    </div>
                  </form>
  `;
}

contactDetails();
