Day 17: Forms with libraries (React Hook Form)

Why React Hook Form?
Less re-renders

Better performance

Cleaner code

Built-in validation with easy integration

Step 1: Install React Hook Form

npm install react-hook-form

Step 2: Simple Form Example with Validation
📁 App.js

import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Contact Form</h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            }
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <textarea
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className="w-full border p-2 rounded"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}