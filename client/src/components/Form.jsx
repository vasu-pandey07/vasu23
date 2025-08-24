import React, { useState } from "react";

export default function Form({ fields, onSubmit, buttonText }) {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !values[field.name]) {
        newErrors[field.name] = "Required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(values);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={values[field.name]}
            onChange={handleChange}
            required={field.required}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors[field.name] && (
            <span className="text-red-500 text-sm">{errors[field.name]}</span>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
}