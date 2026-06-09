import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";

import styles from "./Login.module.scss";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const {
    mutate,
    isPending,
    error,
  } = useLogin();

  const onSubmit = (
    data: LoginFormData
  ) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className={styles.login}>

    {/* LEFT SIDE */}
    <div className={styles.brandingSection}>
      <div className={styles.brandingContent}>

        <div className={styles.logo}>
          Datta Ghee
        </div>

        <h1 className={styles.heading}>
          Learn Smarter with Datta
        </h1>

        <p className={styles.subtext}>
          Personalized learning powered by
          modern Datta tools and interactive
          experiences.
        </p>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className={styles.formSection}>
      <div className={styles.loginCard}>

        {/* TOP */}
        <div className={styles.top}>
          <h2>Welcome Back Datta!</h2>

          <p>
            Login to continue your journey.
          </p>
        </div>

        {/* FORM */}
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* EMAIL */}
          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required:
                  "Email is required",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message:
                    "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <span className={styles.error}>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className={styles.formGroup}>

            <div
              className={
                styles.passwordHeader
              }
            >
              <label>Password</label>

              <button
                type="button"
                className={
                  styles.forgotPassword
                }
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required:
                  "Password is required",

                minLength: {
                  value: 6,

                  message:
                    "Minimum 6 characters",
                },
              })}
            />

            {errors.password && (
              <span className={styles.error}>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* API ERROR */}
          {error && (
            <div className={styles.apiError}>
              Invalid email or password
            </div>
          )}

          {/* ACTIONS */}
          <div className={styles.actions}>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isPending}
            >
              {isPending
                ? "Logging in..."
                : "Login"}
            </button>
          </div>

        </form>

        {/* FOOTER */}
        <div className={styles.footer}>
          Don’t have an account?{" "}
          <span>Sign up</span>
        </div>

      </div>
    </div>

  </div>
  );
};

export default Login;