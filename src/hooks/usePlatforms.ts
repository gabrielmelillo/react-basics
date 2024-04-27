import { useEffect, useState } from "react";
import platformService, { Platform } from "../services/platform-service";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  useEffect(() => {
    platformService
      .getPlatforms()
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { platforms };
};

export default usePlatforms;
