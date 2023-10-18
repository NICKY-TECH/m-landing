function Testimonies(props) {
  return (
    <figure>
      <div className="figure-image-container">
      <div className="figure-image">
        <img src={props.url} />
      </div>
      </div>
      <p className="figure-title">{props.title}</p>
      <figcaption className="content">{props.text}</figcaption>
    </figure>
  );
}

export default Testimonies;
