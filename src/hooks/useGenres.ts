import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    genreService
      .getGenres()
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { genres };
};

export default useGenres;
