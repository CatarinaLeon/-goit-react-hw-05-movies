import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDataMovies } from "../../services/api";
import ReviewsCards from "../../components/ReviewsCards/ReviewsCards";
import BtnScrollUp from "../../common/BtnScrollUp/BtnScrollUp";

const Reviews = ({ lang }) => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    getDataMovies(`movie/${id}/reviews`, 1, lang).then((data) => {
      setReviews(data.results);
    });
  }, [id, lang]);

  return (
    <>
      {reviews.length ? (
        <>
          <ReviewsCards reviewsContent={reviews} />
          <BtnScrollUp />
        </>
      ) : (
        <p>{t("reviews.p")}</p>
      )}
    </>
  );
};

export default Reviews;
