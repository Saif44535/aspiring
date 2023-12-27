const FavDestinations = () => {
  return (
    <section id="destinations" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 dark:text-white">
            Favorite International Study Destinations
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <figure className="h-auto max-w-full rounded-lg relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="usa.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>USA</p>
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="australia.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>Australia</p>
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="canada.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>Canada</p>
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="uk.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>UK</p>
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="uae.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>UAE</p>
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg2 relative transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="germany.jpg"
            />
            <figcaption className="relative px-4 text-xl font-bold text-white bottom-6">
              <p>Germany</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FavDestinations;
