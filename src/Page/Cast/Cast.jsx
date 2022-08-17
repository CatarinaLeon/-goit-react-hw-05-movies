import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataMovies } from "../../services/api";
import ActorCards from "../../components/ActorCards/ActorCards";

const Cast = ({ lang }) => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDataMovies(`movie/${id}/credits`, 1, lang).then((data) => {
      setCast(data.cast);
    });
  }, [id, lang]);

  return <>{cast && <ActorCards actorsList={cast} />}</>;
};

export default Cast;
