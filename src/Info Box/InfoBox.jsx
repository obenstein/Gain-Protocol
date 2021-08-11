import React from "react";
import "./InfoBox.css";
import Swap from "../Images/pancakeswap.png";
import Swap1 from "../Images/Fr2RjyB2SwzW554KPyTTBijzYB588mNs.png";

function InfoBox() {
  return (
    <div className="infobox_wrap">
      <div className="infobox_title">
        <h1>
          The future of <br /> <span>Tokenomics</span>
        </h1>
      </div>
      <div className="infobox_desc">
        <p>
          Gain Protocol solves major tokenomics issues, enhances safety and
          provides daily rewards. We are happy community that always enjoys
          gains. Our platfroms exists to maximize benefits and provide
          comprehensive strategies that actually work for the user.
        </p>
      </div>
      <p>
        <b>Buy on</b>
      </p>
      <div className="infobox_buttons">
        <button className="the_buttons">
          {" "}
          <i>
            <img src={Swap} className="image_icon" />
          </i>
          PANCAKESWAP
        </button>
        <button className="the_buttons">
          {" "}
          <i>
            <img src={Swap1} className="image_icon_swap" />
          </i>{" "}
          SWAP
          <span
            style={{
              color: "purple",
              fontWeight: "100",
            }}
          >
            X
          </span>
        </button>
        <button className="the_buttons" id="buy_button">
          {" "}
          HOW TO BUY GAIN?
        </button>

        {/* <Button
          className="the_button"
          variant="contained"
          color="secondary"
          size="large"
        >
          Delete
        </Button>
        <Button
          className="the_button"
          variant="contained"
          color="secondary"
          size="large"
        >
          Delete
        </Button>
        <Button
          className="the_button"
          variant="contained"
          color="secondary"
          size="large"
          color="white"
        >
          How to buy gain
        </Button> */}
      </div>
    </div>
  );
}

export default InfoBox;
