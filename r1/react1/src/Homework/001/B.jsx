import C from "./C";


export default function B() {
  return (
    <>
      <div
        className="flex"
        style={{
          border: "green solid 2px",
          width: "380px",
          height: "380px",
          flexDirection: "column",
        }}
      >
        <C />
        <C />
        <C />
      </div>
    
    </>
  );
}
