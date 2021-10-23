import { baseService } from "./baseService";
import * as yup from "yup";
import { TOKEN } from "../util/config";

// Validation form
export const signUpUserSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phone: yup
    .string()
    .required("Phone is requied")
    .matches(/^[0-9]+$/g, "Phone must be number"),
  password: yup.string().required("Password is required"),
  certification: yup.string().required("Certification is required"),
  birthdate: yup.string().required("Birthdate is required"),
  skill: yup.string().required("Skill is required")
});

export const signInUserSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required")
});

export class AuthService extends baseService {
  constructor() {
    super();
  }

  signIn = (data) => {
    return this.post(`api/auth/signin`, data);
  };

  signUp = (data) => {
    return this.post(`api/auth/signup`, data);
  };

  fetchMe = () => {
    return this.get(`api/users`);
  };
}

export const authSerivce = new AuthService();
