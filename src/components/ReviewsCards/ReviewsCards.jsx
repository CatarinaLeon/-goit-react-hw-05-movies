import s from "./ReviewsCards.module.css";

const ReviewsCards = ({ reviewsContent }) => {
  return (
    <ul className={s.reviewList}>
      {reviewsContent.map((review) => {
        return (
          <li key={review.author} className={s.reviewItem}>
            <p className={s.reviewTitle}>
              Author:
              <span className={s.reviewSubtitle}>{review.author}</span>
            </p>
            <p className={s.reviewText}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsCards;
