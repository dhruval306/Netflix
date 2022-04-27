import React from "react";
import MovieData from "./MovieData";
import Card from "./Cards";

const Movie = (prop) => {  console.log(prop.search);
  return (
    <>
      {MovieData.map((value, index) => {
        if (
          prop.only === "all" &&
          prop.check === "check" &&
          prop.search === ""
        ) {
          return (
            <Card
              key={index}
              name={value.name}
              type_of_content={value.type_content}
              from={value.created_by}
              brief={value.description}
              link={value.linkk}
              logo={value.image}
              rating={value.imdb}
            />
          );
        }

        if (value.type_content === prop.only && prop.search === "") {
          return (
            <Card
              key={index}
              name={value.name}
              type_of_content={value.type_content}
              from={value.created_by}
              brief={value.description}
              link={value.linkk}
              logo={value.image}
              rating={value.imdb}
            />
          );
        }
        if (prop.search === value.name) {
          console.log(value.name);
          return (
            <Card
              key={index}
              name={value.name}
              type_of_content={value.type_content}
              from={value.created_by}
              brief={value.description}
              link={value.linkk}
              logo={value.image}
              rating={value.imdb}
            />
          );
        }
      })}
    </>
  );
};
export default Movie;
