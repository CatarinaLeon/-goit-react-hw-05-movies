import { ReactComponent as ArrowUp } from "../../images/arrow-up.svg";
import s from "./BtnScrollUp.module.css";

export default function BtnScrollUp() {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(handlerScrollUp, 10);
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // });
    }
  };

  return (
    <div className={s.btnScrollUp} onClick={handlerScrollUp}>
      <ArrowUp className={s.btnArrowUp} />
    </div>
  );
}
