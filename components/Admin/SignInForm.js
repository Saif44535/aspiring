import { useRef } from "react";
import styles from "./SignInForm.module.css";

const SignInForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submissionHandler = async (event) => {
    event.preventDefault();
    await props.onSignIn(
      emailInputRef.current.value,
      passwordInputRef.current.value
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 m-auto">
            {props.error && (
              <p
                id={styles.invalid}
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *Invalid Credentials! Try again.
              </p>
            )}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to View Details
            </h2>
            <form
              className="mt-8 space-y-6"
              action="#"
              onSubmit={submissionHandler}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  ref={passwordInputRef}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
