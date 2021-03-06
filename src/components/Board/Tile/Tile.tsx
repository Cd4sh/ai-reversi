import "./Tile.css";
import{
  PieceType,
}from "../../../Constants";

interface Props {
  id :string;
  image?: string;
  ptype: PieceType;
}

export function Button({id, ptype, image }: Props){
  if(id==="104"){
    return (
      <div className="text">
        {<div id={id} ><h3>Select Difficulty: </h3></div>}
      </div>
    )
  }else{
    var lvl:number = (+id)-100;
    let className = "button".concat(`${lvl}`.toString());
    return (
      <div className="tile">
        {<div id={id} className={className}> </div>}
      </div>
    )
  }
}

export function Tile({id, ptype, image }: Props) {
  if(ptype === PieceType.BLACK) {
    return (
      <div className="tile">
        {image && <div id={id} style={{backgroundImage: `url(${image})`}} className="piece"></div>}
      </div>
    );
  }else if(ptype === PieceType.WHITE){
    return (
      <div className="tile">
        {image && <div id={id} style={{backgroundImage: `url(${image})`}} className="piece"></div>}
      </div>
    );
  }else if(ptype === PieceType.CANDIDATE){
    return(
      <div className="tile" >
        {image && <div id={id} style={{backgroundImage: `url(${image})`}} className="candidate"></div>}
      </div>
    );
  }else{
    return (
        <div className="tile">
          <div id={id} className="piece"></div>
        </div>
    );
  }
}

const _ = {
  Button,
  Tile
}

export default _;
