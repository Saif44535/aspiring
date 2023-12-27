import { Fragment, useState } from "react";

const MultiSelector = (props) => {
  const [destinations, setDestinations] = useState([]);
  const [isTouched, setIsTouched] = useState(false);
  const changeHandler = (e) => {
    setIsTouched(true);
    if (e.target.checked) {
      setDestinations((prevDestinations) => {
        return [...prevDestinations, e.target.value];
      });
    }
    if (!e.target.checked) {
      setDestinations((prevDestinations) => {
        return [...prevDestinations.filter((key) => key !== e.target.value)];
      });
    }
  };

  const multiSelectIsValid = destinations.length !== 0;
  const multiSelectHasError = !multiSelectIsValid && isTouched;

  props.onSelect(multiSelectIsValid, destinations);

  return (
    <Fragment>
      <div>Choose preferred destination(s)</div>
      <div className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-2">
        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value="UK"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-1"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                UK
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value="USA"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-2"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                USA
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value="Australia"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-3"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Australia
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-4"
                type="checkbox"
                value="Malaysia"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-4"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Malaysia
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-5"
                type="checkbox"
                value="Germany"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-5"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Germany
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-6"
                type="checkbox"
                value="Ireland"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-6"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Ireland
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-7"
                type="checkbox"
                value="Sweden"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-7"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Sweden
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-8"
                type="checkbox"
                value="UAE"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-8"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                UAE
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-9"
                type="checkbox"
                value="Canada"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-9"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Canada
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-10"
                type="checkbox"
                value="Netherland"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-10"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Netherland
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-11"
                type="checkbox"
                value="France"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-11"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                France
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-12"
                type="checkbox"
                value="Other"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={changeHandler}
              />
              <label
                htmlFor="checkbox-item-12"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Other
              </label>
            </div>
          </li>
        </ul>
      </div>
      {multiSelectHasError && (
        <p
          id="filled_error_help"
          className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold"
        >
          *Choose atleast one destination!
        </p>
      )}
    </Fragment>
  );
};

export default MultiSelector;
