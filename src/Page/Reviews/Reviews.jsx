import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMoviesReviews } from "../../services/api";
import ReviewsCards from "../../components/ReviewsCards/ReviewsCards";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesReviews(id).then((data) => {
      setReviews(data.results);
    });
  }, [id]);

  return (
    <>
      {reviews.length ? (
        <ReviewsCards reviewsContent={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
