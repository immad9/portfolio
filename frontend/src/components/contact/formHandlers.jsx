const API = import.meta.env.VITE_EMAIL_API

const validation = (value) => {
  const errors = {};
  let isValid = true;

  // Name validation
  if (!value.name || value.name.trim().length === 0) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Email validation
  if (!value.email || value.email.trim().length === 0) {
    errors.email = "Email is required";
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
  }

  // Subject validation
  if (!value.subject || value.subject.trim().length === 0) {
    errors.subject = "Subject is required";
    isValid = false;
  }

  // Message validation
  if (!value.message || value.message.trim().length === 0) {
    errors.message = "Message is required";
    isValid = false;
  }
  return { isValid, errors };
};

const formSubmitHandler = async (data, setErrors, setSnackbar, setLoader) => {
  const { isValid, errors } = validation(data);
  setLoader(true)
  setErrors(errors);

  if (!isValid) {
    setLoader(false)
    return
  };

  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
        setSnackbar({ open: true, message: "Something went wrong. Please try again." });
      throw new Error("Failed to submit form");
    }

    // const result = await response.json();
    setSnackbar({ open: true, message: "Thank you for reaching out! I’ll respond as soon as possible." });

  } catch (error) {
    console.log(error)
     setSnackbar({ open: true, message: "Something went wrong. Please try again." });
  } finally {
    setLoader(false)
  }
};





export default formSubmitHandler