import Button from "./Button";

function About(props) {
  return (
      <div className="differerent-about">
        <div className="section-two-inner-content">
  <Button class="get-started" text={props.text} width="13%" color="white" back="hsl(12, 88%, 59%)"/>
  <p className="section-two-part-two-title">{props.title}</p>
      </div>
     
      <p className="content">{props.content}</p>
  </div>
  );
}

export default About;
