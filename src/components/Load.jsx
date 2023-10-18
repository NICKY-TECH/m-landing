
let notActive = {
    backgroundColor: "white",
    borderColor: "hsl(12, 88%, 59%)",
    borderWidth: "2px",
  };

  let active = {
    backgroundColor: "hsl(12, 88%, 59%)",
  };

function Load(props) {
  return (
    <div
      className="load" 
      style={props.old!==props.index?notActive:props.new===props.index?active:notActive}
      onClick={()=>{props.slide(props.index)}}
    ></div>
  );
}

export default Load;
