import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    genreService
      .getGenres()
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  return { genres, isLoading };
};

export default useGenres;
