import avatar from '../images/avatar.png';
import "./Entete.scss";

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets(Beta)</div>
      <div className="avatar">Camille Semaan <img src={avatar} alt="Camille Semaan" /></div>
    </header>
  );
}