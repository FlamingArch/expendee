import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <div className="base">
      {props.title && <p className="title">{props.title}</p>}
      {props.children}
    </div>
  );
};

export default Toolbar;
