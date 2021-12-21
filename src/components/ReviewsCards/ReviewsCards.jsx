const ReviewsCards = ({ reviewsContent }) => {
  return (
    <ul>
      {reviewsContent.map((review) => {
        return (
          <li key={review.author}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsCards;
