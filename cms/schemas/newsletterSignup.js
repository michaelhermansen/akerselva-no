import { FiLayout } from "react-icons/fi";

export default {
  name: "newsletterSignup",
  type: "document",
  title: "Newsletter signup",
  icon: FiLayout,
  fields: [
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Signup date",
      name: "signupDate",
      type: "date",
    },
  ],
};
