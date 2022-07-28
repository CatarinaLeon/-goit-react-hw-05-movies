import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      © 2022 | Developed by
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
}
