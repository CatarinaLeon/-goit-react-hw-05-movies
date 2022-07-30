import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../services/api";
import ReviewsCards from "../../components/ReviewsCards/ReviewsCards";
import BtnScrollUp from "../../common/BtnScrollUp/BtnScrollUp";

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
        <>
          <ReviewsCards reviewsContent={reviews} />
          <BtnScrollUp />
        </>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
