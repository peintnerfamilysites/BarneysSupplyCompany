import { useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  serviceNeeded: "General Inquiry",
  message: "",
};

export function useEstimateForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      service_requested: formData.serviceNeeded,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env?.VITE_EMAILJS_SERVICE_ID,
        import.meta.env?.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env?.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
}
