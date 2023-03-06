import React from "react";
import { useLocation } from "react-router-dom";
import {
  Gown,
  Jumpsuit,
  LongDress,
  NewIn,
  Playsuit,
  ShortDress,
  TwoPiece,
} from "./Items";

const Category = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const DefaultComponent = NewIn;
  switch (type) {
    case "gown":
      return <Gown />;
    case "jumpsuit":
      return <Jumpsuit />;
    case "long-dress":
      return <LongDress />;
    case "short-dress":
      return <ShortDress />;
    case "new-in":
      return <NewIn />;
    case "two-piece":
      return <TwoPiece />;
    case "playsuit":
      return <Playsuit />;
    default:
      return <DefaultComponent />;
  }
};

export default Category;
