import "./Button.css";
export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={"Button " + props.className}
    ></button>
  );
}
