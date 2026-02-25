import "./Card.css";

const Card = (props) => {
  const layer = props.layer;
  let classes = props.className;

  switch (layer) {
    case "1":
      classes += " bg-surface-1";
      break;
    case "2":
      classes += " bg-surface-2";
      break;
    case "3":
      classes += " bg-surface-3";
      break;
    default:
      classes += " bg-surface-1";
  }

  classes += " card";

  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
