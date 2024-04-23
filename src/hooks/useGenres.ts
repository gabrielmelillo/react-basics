import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    genreService
      .getGenres()
      .then((res) => {
        const response = res.data.results;

        const newGenres = response.map((genre) => {
          const index =
            genre.image_background.indexOf("/media/") + "/media/".length;

          const croppedURL =
            genre.image_background.slice(0, index) +
            "crop/600/400/" +
            genre.image_background.slice(index);

          return { ...genre, image_background: croppedURL };
        });

        setGenres(newGenres);

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
