"use client";

import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { Fragment, useEffect, useState } from "react";
import MultiSelector from "./MultiSelector";
// import POST from "@/app/api/register/route";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const SignupForm = (props) => {
  const [multiSelectorIsValid, setMultiSelectorIsValid] = useState(true);
  const router = useRouter();

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: studyLevelValue,
    isValid: studyLevelIsValid,
    hasError: studyLevelHasError,
    valueChangeHandler: studyLevelChangeHandler,
    inputBlurHandler: studyLevelBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: contactValue,
    isValid: contactIsValid,
    hasError: contactHasError,
    valueChangeHandler: contactChangeHandler,
    inputBlurHandler: contactBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  let destinationsValue = [];

  const selectionHandler = (multiSelectIsValid, destinations) => {
    destinationsValue = destinations;
    useEffect(() => {
      setMultiSelectorIsValid(multiSelectIsValid);
    });
  };

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    cityIsValid &&
    studyLevelIsValid &&
    contactIsValid &&
    multiSelectorIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const studentData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      city: cityValue,
      studyLevel: studyLevelValue,
      contact: contactValue,
      destinations: destinationsValue,
    };
    const response = await fetch("../../api/register", {
      method: "POST",
      body: JSON.stringify(studentData),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      alert("Registeration successfull!");
    }
    router.push("/");
  };

  return (
    <Fragment>
      <div className="max-w-3xl m-auto p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-5 mt-2">
        <div className="bg-blue-500 rounded-lg pl-2 p-1 mb-2">
          <h1 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white text-center">
            Interested in studying abroad?{" "}
          </h1>
          <p className="mb-6 text-md font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
            Enter your details below and we'll call you back when it suits you.
          </p>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="name"
              id="firstName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              required
            />
            {firstNameHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *First name cannont be empty!
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="name"
              id="lastName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              required
            />
            {lastNameHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *Last name cannont be empty!
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
            />
            {emailHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold"
              >
                *Enter a valid email, email must contain '@'!
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="name"
              id="city"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={cityValue}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              required
            />
            {cityHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *City name cannont be empty!
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <MultiSelector onSelect={selectionHandler} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="degree"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Preferred study level
            </label>
            <select
              id="degree"
              className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={studyLevelValue}
              onChange={studyLevelChangeHandler}
              onBlur={studyLevelBlurHandler}
            >
              <option value="" disabled defaultValue>
                Choose a study level
              </option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Foundation">Foundation</option>
              <option value="Diploma">Diploma</option>
              <option value="Pre Masters">Pre Masters</option>
            </select>
            {studyLevelHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *Must select study level!
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+92 3021234556"
              pattern="[0-9]{4}-[0-9]{7}"
              value={contactValue}
              onChange={contactChangeHandler}
              onBlur={contactBlurHandler}
              required
            />
            {contactHasError && (
              <p
                id="filled_error_help"
                className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold font-semiboldfont-semibold"
              >
                *Enter contact info!
              </p>
            )}
          </div>
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className={`${
            formIsValid
              ? "text-white bg-blue-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              : "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          }`}
        >
          Submit
        </button>
      </div>
    </Fragment>
  );
};

export default SignupForm;
