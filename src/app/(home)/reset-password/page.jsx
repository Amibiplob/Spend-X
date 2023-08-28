"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const resetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-400">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Reset Password</h1>
          <p className="text-sm">
            Type your email address to reset your password
          </p>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              placeholder="Your Email Address"
              type="email"
              {...register("Email", {
                required: "Email Address is required",
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full px-3 py-2  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-2 hover:border-teal-600 focus:border-teal-800 p-2 rounded-md text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 focus:-translate-y-1 focus:scale-105 duration-75"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm pl-1">
                {errors.Email.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="border w-full border-sky-700 bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white rounded-md p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default resetPassword;
