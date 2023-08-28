import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForm(validate) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    if (!errors) {
      let endpoint = "register";
      if (e.target.action.endsWith("signin")) {
        endpoint = "signin";
      }
      fetch('http://localhost:5000/' + endpoint, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(values)
      }).then( res => res.json())
        .then( data => {
          localStorage.setItem('token', data.token);
          endpoint = e.target.action.endsWith("register") ? "/signin" : "/";
          navigate(endpoint);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      navigate("/");
    }
  }, [errors]);

  return { handleChange, values, errors, handleSubmit };
}
