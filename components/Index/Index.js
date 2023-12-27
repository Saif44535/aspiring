"use client";

import { Fragment } from "react";
import IndexImage from "./IndexImage";
import Services from "./Services";
import FavDestinations from "./FavDestinations";

const Index = () => {
  return (
    <Fragment>
      <IndexImage />
      <Services />
      <FavDestinations />
    </Fragment>
  );
};

export default Index;
