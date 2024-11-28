"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to toggle between login and create account forms

  const onSubmit = (data) => {
    // Hardcoded validation for email
    if (data.email === "test@example.com" && data.password === "password123") {
      // Simulate successful login
      router.push("/Menu");
    } else {
      alert("Invalid email or password.");
    }
  };

  const onCreateAccountSubmit = async (data) => {
    try {
      // Make the real API call to register the user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send email and password as JSON
      });
  
      if (response.ok) {
        // If registration is successful, redirect the user
        alert("Account created successfully!");
        router.push("/Menu"); // Redirect to menu or other page after registration
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Account creation failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while creating the account.");
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>{isCreatingAccount ? "Create Account" : "Login"}</h2>

      {/* Login Form */}
      {!isCreatingAccount && (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
          </div>
          <button type="submit" style={{ padding: "0.5rem", backgroundColor: "blue", color: "white" }}>Login</button>
        </form>
      )}

      {/* Create Account Form */}
      {isCreatingAccount && (
        <form onSubmit={handleSubmit(onCreateAccountSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
          </div>
          <button type="submit" style={{ padding: "0.5rem", backgroundColor: "blue", color: "white" }}>Create Account</button>
        </form>
      )}

      {/* Toggle Button for Login/Account Creation */}
      <p>{isCreatingAccount ? "Already have an account?" : "Don't have an account?"}</p>
      <button 
        onClick={() => setIsCreatingAccount(!isCreatingAccount)} 
        style={{ padding: "0.5rem", backgroundColor: "green", color: "white", marginTop: "1rem" }}
      >
        {isCreatingAccount ? "Login" : "Create Account"}
      </button>
    </div>
  );
};

export default Login;
