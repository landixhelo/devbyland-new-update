import { Link } from "react-router-dom";

type Props = {
  title: string;
  text: string;
};

export function CtaBand({ title, text }: Props) {
  return (
    <section className="cta-band">
      <div className="container reveal">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn-brand" to="/contact">
          Fillo tani
        </Link>
      </div>
    </section>
  );
}
