"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Register = () => {
  const router = useRouter();
  const { status } = useSession();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const resp = await fetch("/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });

      console.log("Sign up response status:", resp.status);

      if (resp.status === 200) {
        const loginResp = await signIn("credentials", {
          email: newUser.email,
          password: newUser.password,
          redirect: false,
        });

        console.log("Login response status:", loginResp?.status);

        if (loginResp.status === 200) {
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Error during sign up or login:", error);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      console.log("Social login called");
      const resp = await signIn(provider, { redirect: false });
      console.log("Social login response:", resp);

      if (resp?.ok) {
        // router.push("/");
      }
    } catch (error) {
      console.error("Error during social login:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      // router.push("/");
    }
  }, [status, router]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/c6KyHys/travel-concept-with-landmarks-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create an Account</h2>
        <form onSubmit={handleSignUp} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-600">Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-3">
            <button
              onClick={() => handleSocialLogin("google")}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <i className="fab fa-google"></i>
              <span>Google</span>
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
