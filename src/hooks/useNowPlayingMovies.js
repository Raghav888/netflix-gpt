import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  //This below code basically fetching the data and put these movies into store

  //So,basically we are trying to fetch movies data from TMDB API and update store with all those movies

  const dispatch = useDispatch();

  //Make An Api Call Here
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  //I will make an "API" Call using "useEffect" so that I will make an "API" call only once
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
