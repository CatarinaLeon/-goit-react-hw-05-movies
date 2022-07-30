import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from "../../services/api";
import ActorCards from "../../components/ActorCards/ActorCards";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesCredits(id).then((data) => {
      setCast(data.cast);
    });
  }, [id]);

  return <>{cast && <ActorCards actorsList={cast} />}</>;
};

export default Cast;
