"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
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
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
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
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {/* First Name */}
            <div className="input" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First Name cannot be empty",
                  pattern: {
                    value: /^[A-Za-z]{2,}$/,
                    message: "First Name must contain only letters",
                  },
                })}
                style={{
                  border: errors.firstName ? "1px solid red" : undefined,
                  paddingRight: "30px",
                }}
              />
              {errors.firstName && (
                <MdError
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    color: "red",
                    fontSize: "18px",
                  }}
                />
              )}
              {errors.firstName?.message && (
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
                  {errors.firstName.message}
                </motion.div>
              )}
            </div>

            {/* Last Name */}
            <div className="input" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", {
                  required: "Last Name cannot be empty",
                  pattern: {
                    value: /^[A-Za-z]{2,}$/,
                    message: "Last Name must contain only letters",
                  },
                })}
                style={{
                  border: errors.lastName ? "1px solid red" : undefined,
                  paddingRight: "30px",
                }}
              />
              {errors.lastName && (
                <MdError
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    color: "red",
                    fontSize: "18px",
                  }}
                />
              )}
              {errors.lastName?.message && (
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
                  {errors.lastName.message}
                </motion.div>
              )}
            </div>

            {/* Email */}
            <div className="input" style={{ position: "relative" }}>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Looks like this is not an email",
                  },
                })}
                style={{
                  border: errors.email ? "1px solid red" : undefined,
                  paddingRight: "30px",
                }}
              />
              {errors.email && (
                <MdError
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    color: "red",
                    fontSize: "18px",
                  }}
                />
              )}
              {errors.email?.message && (
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
                  {errors.email.message}
                </motion.div>
              )}
            </div>

            {/* Password */}
            <div className="input" style={{ position: "relative" }}>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password cannot be empty",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must be at least 6 characters with a number",
                  },
                })}
                style={{
                  border: errors.password ? "1px solid red" : undefined,
                  paddingRight: "30px",
                }}
              />
              {errors.password && (
                <MdError
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    color: "red",
                    fontSize: "18px",
                  }}
                />
              )}
              {errors.password?.message && (
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
                  {errors.password.message}
                </motion.div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
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
