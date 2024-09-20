const API_BASE_URL =
  "https://api.webbuilder.technolitics.com/api/v1/website-builder";
// const API_BASE_URL = "http://localhost:9685/api/v1/website-builder";
const WEBSITE_UID = "PRJ00014";
const S3_BASE_URL =
  "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket";

const WEBSITE_DATA_KEY = "websiteData";
const WEBSITE_ID_KEY = "websiteProjectId";

const FETCH_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const MEDIA_TYPES = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
};

const ASSOCIATE_TYPES = {
  ASSOCIATE: "ASSOCIATE",
  CLIENT: "CLIENT",
};
const BANNER_TYPES = {
  HOME_BANNER: "HOME_BANNER",
  POPUP_BANNER: "POPUP_BANNER",
};

const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  REMARKS: "remarks",
};

const LEADS_AND_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  REMARKS: "remarks",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  ENQUIRY_TYPE: "enquiryType",
  FIRM_NAME: "strings.stringThree",
  STATE: "strings.stringFour",
  CITY: "strings.stringFive",
  PINCODE: "strings.stringSix",
};

const PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  REMARKS: "remarks",
  SERVICE_TYPE: "serviceType",
};

const ENQUIRY_TYPES = {
  DEALERSHIP_ENQUIRY: "DEALERSHIP_ENQUIRY",
  AUTOMOTIVE_ENQUIRY: "AUTOMOTIVE_ENQUIRY",
  INDUSTRIAL_ENQUIRY: "INDUSTRIAL_ENQUIRY",
};
