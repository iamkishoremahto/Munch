import * as Yup from "yup";

const MobileRegex = /^[6-9]\d{9}$/;
// Minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const PassWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const onlyCharSpace = /^[a-zA-Z ]*$/;

