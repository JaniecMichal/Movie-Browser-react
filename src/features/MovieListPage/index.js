import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React from "react";
import moviePoster from "assets/images/jpg/poster.jpg";
import starIcon from "assets/images/svg/star.svg";
import Pagination from "common/Pagination";
import { Link } from 'react-router-dom';
import { toMovieDetails } from "routes";
import { StyledLink } from "./styled"

const MovieListPage = () => {
  const movie = {
    poster: moviePoster,
    header: "Mulan",
    subheader: "2020",
    tags: ["film", "film"],
    review: starIcon,
    description:
      "A young Chinese maiden disguises herself as a male warrior in order to save her father",
  };
  return (
    <Container>
      <Tiles
        title="Popular movies"
        body={
          <StyledLink to={toMovieDetails}>
            <Tile
              poster={movie.poster}
              header={movie.header}
              subheader={movie.subheader}
              tags={movie.tags}
              review={movie.review}
              description={movie.description}
            />
          </StyledLink>
        }
      />
      <Pagination />
    </Container>
  );
};

export default MovieListPage;
