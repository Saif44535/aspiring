const Services = () => {
  return (
    <section
      id="services"
      className="text-gray-600 body-font dark:text-gray-200"
    >
      <div className="container px-5 py-12 lg:py-24 md:py-12 mx-auto ">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-4 dark:text-white">
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap ">
          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center mb-3">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-counseling-mental-health-flaticons-lineal-color-flat-icons.png"
                alt="external-counseling-mental-health-flaticons-lineal-color-flat-icons"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              Study Abroad Counselling
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Choose your best fit program and avail international study
              guidance from professional counsellors
            </p>
          </div>
          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center mb-3">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-scholarship-university-flaticons-flat-flat-icons-2.png"
                alt="external-scholarship-university-flaticons-flat-flat-icons-2"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              University &amp; scholarship guidance
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Avail maximum vatity of international scholarships for Pakistani
              students to study at one of the top Universities in the World
            </p>
          </div>
          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/color/48/visa.png"
                alt="visa"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              Student Visa Facilitation
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Get the facility of the mock interview for your favorite study
              destination and equip yourself to successfully student visa grant.
            </p>
          </div>
          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center mb-8">
              <img
                width="78"
                height="78"
                src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Financial-Statement-life-skills-filled-color-icons-papa-vector.png"
                alt="external-Financial-Statement-life-skills-filled-color-icons-papa-vector"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              Personal Statement Assistance
            </h2>
            <p className="leading-relaxed text-base mb-4">
              The admissions team is interested to know you. Articulate your
              reflection, achievements, and opinions in the best way by taking
              assistance from our SPO expert team.
            </p>
          </div>

          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center mb-6">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/training.png"
                alt="training"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              Professional Training
            </h2>
            <p className="leading-relaxed text-base mb-4">
              We groom students to make professional through our internships and
              mentorship programs.
            </p>
          </div>

          <div className=" lg:w-1/2 md:w-full px-8 py-6 border-2 border-gray-200 border-opacity-60">
            <div className=" flex justify-center mb-2">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-departure-vacation-planning-flaticons-lineal-color-flat-icons.png"
                alt="external-departure-vacation-planning-flaticons-lineal-color-flat-icons"
              />
            </div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
              Pre &amp; Post Departure Guide
            </h2>
            <p className="leading-relaxed text-base mb-4">
              We host number of pre and post depatures sessions so that you can
              navigate personal and Cultural opportunities abroad to make you
              feel at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
