import { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: ""
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => 
    {
    e.preventDefault(); // prevent reload

    console.log(form); // abhi ke liye console

    alert("Form Submitted ");

    setForm({
      name: "",
      email: "",
      phone: "",
      query: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Contact Us
        </h1>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Query */}
        <textarea
          name="query"
          placeholder="Your Query..."
          value={form.query}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default ContactUs;