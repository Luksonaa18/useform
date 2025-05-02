"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: firstName ? "" : "First Name cannot be empty",
      lastName: lastName ? "" : "Last Name cannot be empty",
      email: email
        ? /\S+@\S+\.\S+/.test(email)
          ? ""
          : "Looks like this is not an email"
        : "Email cannot be empty",
      password: password ? "" : "Password cannot be empty",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (!hasErrors) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <>
      <main>
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Learn to code by watching others</h1>
          <span>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </span>
        </motion.div>
        <div className="inside">
          <motion.div
            className="trying"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span>
              Try it free 7 days <span className="bold">then $20/mo.</span>
            </span>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="input">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  border: errors.firstName ? "1px solid red" : undefined,
                }}
              />
              {errors.firstName && (
                <motion.div
                  className="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    textAlign: "right",
                  }}
                >
                  {errors.firstName}
                </motion.div>
              )}
            </div>

            <div className="input">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  border: errors.lastName ? "1px solid red" : undefined,
                }}
              />
              {errors.lastName && (
                <motion.div
                  className="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    textAlign: "right",
                  }}
                >
                  {errors.lastName}
                </motion.div>
              )}
            </div>

            <div className="input">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: errors.email ? "1px solid red" : undefined,
                }}
              />
              {errors.email && (
                <motion.div
                  className="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    textAlign: "right",
                  }}
                >
                  {errors.email}
                </motion.div>
              )}
            </div>

            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  border: errors.password ? "1px solid red" : undefined,
                }}
              />
              {errors.password && (
                <motion.div
                  className="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    textAlign: "right",
                  }}
                >
                  {errors.password}
                </motion.div>
              )}
            </div>

            <motion.button
              onClick={handleClick}
              id="submit"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CLAIM YOUR FREE TRIAL
            </motion.button>

            <div className="info">
              <span>
                By clicking the button, you are agreeing to our{" "}
                <a href="#">Terms and Services</a>
              </span>
            </div>
          </motion.form>
        </div>
      </main>
    </>
  );
}
