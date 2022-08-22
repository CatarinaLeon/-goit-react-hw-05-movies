import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";
import sprite from "../../images/sprite.svg";

import s from "./BtnScrollUp.module.css";

export default function BtnScrollUp() {
  const [status, setStatus] = useState("hide");

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(500, (e) => scrollWatch())
    );
  });

  const scrollWatch = () => {
    let scroll_position = window.scrollY;
    scroll_position > 140 ? setStatus("visible") : setStatus("hide");
  };

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {status === "visible" && (
        <div className={s.btnScrollUp} onClick={handlerScrollUp}>
          <svg className={s.btnArrowUp} width="35px" height="30px">
            <use href={sprite + "#icon-arrow-up"} />
          </svg>
        </div>
      )}
    </>
  );
}

// import { ReactComponent as ArrowUp } from "../../images/arrow-up.svg";
// import s from "./BtnScrollUp.module.css";

// export default function BtnScrollUp() {
//   const handlerScrollUp = () => {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//       window.scrollBy(0, -50);
//       setTimeout(handlerScrollUp, 10);
//       // window.scrollTo({
//       //   top: 0,
//       //   left: 0,
//       //   behavior: "smooth",
//       // });
//     }
//   };

//   return (
//     <div className={s.btnScrollUp} onClick={handlerScrollUp}>
//       <ArrowUp className={s.btnArrowUp} />
//     </div>
//   );
// }
