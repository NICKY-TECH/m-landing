import "../styles/destination.css";
import logo from "../images/logo.svg";
import Button from "../components/Button";
import illustration from "../images/illustration-intro.svg";
import About from "../components/About";
import Testimonies from "../components/Testimonies";
import light from "../images/light-logo.svg";
import t1 from "../images/avatar-ali.png";
import t2 from "../images/avatar-anisha.png";
import t3 from "../images/avatar-richard.png";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import t4 from "../images/avatar-shanai.png";
import Load from "../components/Load";
import { screen } from "@testing-library/react";

const imagesArray = [
  {
    url: t1,
    title: "Anisha Li",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    url: t2,
    title: "Ali Bravo",
    text: "“We have been able to cancel so many other subscriptions since using  Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    url: t3,
    title: "Richard Watts",
    text: '"“Manage allows us to provide structure and process. It keeps us organized  and focused. I can’t stop recommending them to everyone I talk to!”',
  },
  {
    url: t4,
    title: "Shanai Gough",
    text: " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

function Main() {
  const [validate, setValidate] = useState("");
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  console.log("outside");
  console.log(isOpen);
  let style = {
    backgroundColor: "hsl(12, 88%, 59%)",
  };
  let screenWidtho = window.screen.width;
  // console.log(screenWidtho);

  let ham = document.querySelector(".ham");
  let img = document.querySelector(".under-img");
  let overLay = document.querySelector(".over-lay");
  // window.addEventListener("resize", function () {
  //   let screenWidths = window.screen.width;
  // console.log(screenWidths);
  // if (screenWidths > 639 && overLay) {
  //   let overLay = document.querySelector(".over-lay");
  //   overLay.style.display = "none";
  // ham.style.display = "none";
  // console.log("yeee");
  //   }
  // });
  // showNav(isOpen);
  // function show() {
  //   if (showNav) {
  //     let overLay = document.querySelector(".over-lay");
  //     overLay.style.display = "block";
  //     setShowNav(!showNav);
  //   } else {
  //     let overLay = document.querySelector(".over-lay");
  //     overLay.style.display = "none";
  //     setShowNav(!setShowNav);
  //   }
  // }
  // show();

  // console.log(overLay);
  // console.log(window.screenWidth);
  function open() {
    // let overLay = document.querySelector(".over-lay");
    // if (isOpen === false) {
    //   console.log("ahhhhhhhhhhhhhhhhhhhhhhhhhh");
    //   overLay.style.display = "block";
    //   return setIsOpen(true);
    // } else if (isOpen === true) {
    //   console.log("norm");
    // ham.style.display = "flex";
    // img.style.display = "flex";
    // overLay.style.display = "none";

    //  return setIsOpen(false);
    // }
    setIsOpen(!isOpen);
    // setShowNav(!showNav);

  }

  function email() {
    let mail = document.getElementsByClassName("input-field");
    let emailRg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mailValue = mail[0].value;
    if (!emailRg.test(mailValue) || mailValue === "") {
      setValidate("Please enter a valid emaii");
    } else {
      setValidate("");
    }
  }

  function slideTo(id) {
    setPrev(current);
    setCurrent(() => {
      return id;
    });
    console.log(prev);
    console.log(current);
  }
  return (
    <main>
      <section className="section-one">
        <header>
          <nav>
            <img src={logo} className="under-img" />
            <ul>
              <li>Pricing</li>
              <li>Product</li>
              <li>About US</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
            <Button
              text="Get started"
              class="get-started"
              width="15%"
              back="hsl(12, 88%, 59%)"
              color="white"
            />
            {isOpen ? (
              <AiOutlineClose className="ham" onClick={open} />
            ) : (
              <GiHamburgerMenu className="ham" onClick={open} />
            )}
          </nav>
        </header>
        <article className="section-one-part-two">
          <div className="illustration-container">
            <div className="illustration-text">
              <p className="illustration-text-title">
                Bring everyone together to build better products.
              </p>
              <p className="illustration-text-inner-text">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
            </div>
            <Button
              text="Get started"
              class="get-started"
              width="30%"
              back="hsl(12, 88%, 59%)"
              color="white"
            />
          </div>
          <div className="illustration">
            <img src={illustration} />
          </div>
        </article>
      </section>
      <section className="section-two">
        <article className="section-two-part-one">
          <h2 className="title-section-two"> What’s different about Manage?</h2>
          <p className="content">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </article>
        <article className="section-two-part-two">
          <About
            text="01"
            title="Track company-wide progress"
            content="
  See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again."
          />
          <About
            text="02"
            title="Advanced built-in reports"
            content="Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed."
          />
          <About
            text="03"
            title="Everything you need in one place"
            content="Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution."
          />
        </article>
      </section>
      <section className="section-three">
        <div>
          <h3>What they’ve said</h3>
        </div>
        <div className="testimonies">
          <Testimonies
            url={t1}
            title="Anisha Li"
            text="“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <Testimonies
            url={t2}
            title="Ali Bravo"
            text="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
          />
          <Testimonies
            url={t3}
            title="Richard Watts"
            text="Manage allows us to provide structure and process. It keeps us organized  and focused. I can’t stop recommending them to everyone I talk to!”"
          />
        </div>
        <div className="slide-show-container">
          <Testimonies
            url={imagesArray[current].url}
            title={imagesArray[current].title}
            text={imagesArray[current].text}
          />
          <div className="loader-container">
            <Load index="0" slide={slideTo} old={prev} new={current} />
            <Load index="1" slide={slideTo} old={prev} new={current} />
            <Load index="2" slide={slideTo} old={prev} new={current} />
            <Load index="3" slide={slideTo} old={prev} new={current} />
          </div>
        </div>
        <div className="section-three-button">
          <Button
            class="get-started"
            text="Get started"
            width="20%"
            back="hsl(12, 88%, 59%)"
            color="white"
          />
        </div>
      </section>

      <section className="section-four">
        <p className="simplify"> Simplify how your team works today.</p>
        <Button
          text="Get started"
          color="hsl(12, 88%, 59%)"
          width="20%"
          back="white"
          class="get-started"
        />
      </section>
      <section className="section-five">
        <p className="copy-right-2">Copyright 2020. All Rights Reserved</p>
        <div className="section-one-part-five">
          <img src={light} />
          <div className="icons">
            <p>
              {" "}
              <AiFillFacebook />
            </p>
            <p>
              {" "}
              <AiFillYoutube />
            </p>
            <p>
              {" "}
              <AiOutlineTwitter />
            </p>
            <p>
              {" "}
              <BsPinterest />
            </p>
            <p>
              {" "}
              <BsInstagram />
            </p>
          </div>
        </div>
        <div className="footer-links-container">
          <ul className="footer-links">
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul className="footer-links">
            <li> Careers</li>
            <li> Community</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-input">
          <div className="input-set">
            <div className="input-container">
              <input
                placeholder="Update in your inbox..."
                className="input-field"
              />

              <Button
                text="Go"
                color="white"
                sub="go"
                class="go"
                validate={email}
              />
            </div>
            {validate === "" ? "" : <span className="error">{validate}</span>}
          </div>
          <p className="copy-right">Copyright 2020. All Rights Reserved</p>
        </div>
      </section>
      <article className={isOpen ? "over-lay" : "over-lay-remove"}>
        <ul className="overlay-list">
          <li>Pricing</li>
          <li>Product</li>
          <li>About US</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </article>
    </main>
  );
}

export default Main;
