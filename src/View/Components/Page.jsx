import "./Page.css";

const Page = (props) => {
  return (
    <div className="style" style={{ gridTemplateRows: "auto 1fr" }}>
      {props.toolbar && (
        <div className="toolbar-slot">
          <div className="w-full backdrop-blur-lg rounded-t-lg overflow-hidden backdrop-filter fixed bg-scaffold bg-opacity-60">
            {props.toolbar}
          </div>
        </div>
      )}
      <div className="flex flex-col p-4">{props.children}</div>
    </div>
  );
};

export default Page;
