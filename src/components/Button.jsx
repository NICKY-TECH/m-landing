function Button(props) {
  return (<>
  {props.sub==="go"?  <button
      className={props.class}
      style={{
        width: props.width,
        color: props.color,
        backgroundColor: props.back,
      }}
      onClick={props.validate}
    >
      {props.text}
    </button>:  <button
      className={props.class}
      style={{
        width: props.width,
        color: props.color,
        backgroundColor: props.back,
      }}
    >
      {props.text}
    </button>}
  </>
  );
}

export default Button;
