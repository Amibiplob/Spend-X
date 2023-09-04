"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
          <h1 className="text-3xl font-semibold">LogIn Here</h1>
          <p className="text-sm">Log in to access your account</p>
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
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <div>
              <input
                placeholder="Your Password"
                type="password"
                {...register("Password", {
                  required: "Password is required",
                })}
                className="w-full px-3 py-2  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-2 hover:border-teal-600 focus:border-teal-800 p-2 rounded-md text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 focus:-translate-y-1 focus:scale-105 duration-75"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm pl-1">
                  {errors.Password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              href="reset-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="">
            <button
              type="submit"
              className="border w-full border-sky-700 bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white rounded-md p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
            >
              Login
            </button>
          </div>
          <div className="flex justify-around items-center w-full">
            <hr className="border-1 w-2/12" />
            <h1>Login with social accounts</h1>
            <hr className="border-1 w-2/12" />
          </div>
          <div className="flex justify-center space-x-4 -0">
            <button
              type="button"
              aria-label="Log in with Google"
              className="rounded-sm p-3"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                    c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                    c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                    C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                    c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              aria-label="Log in with Twitter"
              className="rounded-sm p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-primary"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
            <button
              type="button"
              aria-label="Log in with GitHub"
              className="rounded-sm p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-center text-sm dark:text-gray-5 sm:px-6 flex gap-2">
            <span>Don&#39;t have an account?</span>
            <Link
              href="/register"
              className="text-lg text-blue-600 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
