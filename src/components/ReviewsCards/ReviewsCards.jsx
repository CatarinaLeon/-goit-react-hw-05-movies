import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./ReviewsCards.module.css";

const ReviewsCards = ({ reviewsContent }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <ul className={s.reviewList}>
      {reviewsContent.map((review) => {
        return (
          <li key={review.author} className={s.reviewItem}>
            <p className={s.reviewTitle}>
              {t("reviews.Author")}:
              <span
                className={theme === themes.light ? s.lightTheme : s.darkTheme}
              >
                {review.author}
              </span>
            </p>
            <p className={s.reviewText}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsCards;
