import "./Dossier.scss";
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
       <SortIcon className="deplacer"/>
        <img src={`images-dossiers/${id}.png`} alt={titre}></img>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
        <MoreVertIcon className="Plus"/>
      </div>
  
    </article>
  );
}