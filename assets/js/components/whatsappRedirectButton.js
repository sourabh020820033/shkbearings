function whatsappRedirectButtonDesign() {
  const whatsappRedirectButtonContainer = document.getElementById(
    "whatsapp-redirect-button"
  );
  whatsappRedirectButtonContainer.innerHTML = `
    <div class="switcher__area">
        <a href="${WEBSITE_SOCIAL_LINKS.WHATSAPP}" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
  `;
}
whatsappRedirectButtonDesign();
