import React, { useState, useEffect } from "react";
import styles from "./Acquire.module.css";
import Button from "../../../../ui/button/button";
import Amazon from "../../../../assets/images/amazon.png";
import Abe from "../../../../assets/images/abe.png";

const Acquire = (props) => {
  const [radioSelect, setRadioSelect] = useState("amazon");
  const [barWidth, setBarWidth] = useState(0);

  const onSelectRadio = (e) => {
    setRadioSelect(e.target.value);
  };

  useEffect(() => {
    setBarWidth(50);
  });

  return (
    <div className={styles.Container}>
      <div className={styles.SummaryContainer}>
        <div className={styles.RadioContainer}>
          <label className={styles.Radio}>
            Amazons
            <input
              type="radio"
              name="radio"
              value="amazon"
              checked={radioSelect === "amazon"}
              onChange={onSelectRadio}
            />
            <span className={styles.Circle}></span>
          </label>
          <label className={styles.Radio}>
            AbeBook
            <input
              type="radio"
              name="radio"
              value="abe"
              checked={radioSelect === "abe"}
              onChange={onSelectRadio}
            />
            <span className={styles.Circle}></span>
          </label>
        </div>

        <div className={styles.Summary}>
          <div className={styles.LeftView}>
            <img
              src="https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"
              alt="book-image"
            />
            <Button btnType="stroke" style={{ marginTop: "20px" }}>
              Check Usefulness
            </Button>
          </div>
          <ul>
            <li>Name: </li>
            <li>Publisher: </li>
            <li>PublishedDate: </li>
            <li>Edition: </li>
            <li>Price: </li>
            <li>Summary: </li>
          </ul>
        </div>
      </div>
      <div className={styles.vendorBox}>
        <label>
          <input
            type="radio"
            name="vendor"
            checked={radioSelect === "amazon"}
            value="amazon"
            onChange={onSelectRadio}
          />
          <span className={styles.Amazon}>
            <img src={Amazon} alt="amazon" />
          </span>
        </label>
        <label>
          <input
            type="radio"
            name="vendor"
            checked={radioSelect === "abe"}
            value="abe"
            onChange={onSelectRadio}
          />
          <span className={styles.Abe}>
            <img src={Abe} alt="abe" />
          </span>
        </label>
      </div>
      <div className={styles.reviewSection}>
        <ul className={styles.reviews}>
          <li>
            <div className={styles.userAvatar}></div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <div className={styles.date}>
                <span>2020/4/12</span>
              </div>
              <div className="clr"></div>
              <div className={styles.message}>
                <p>
                  Good enough buh a little bit of speed is needed, i waited for
                  a long time before the reference librarian could give me the
                  info i needed. Thank you for listening
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </li>
          <li>
            <div className={styles.userAvatar}></div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <div className={styles.date}>
                <span>2020/4/12</span>
              </div>
              <div className="clr"></div>
              <div className={styles.message}>
                <p>
                  Good enough buh a little bit of speed is needed, i waited for
                  a long time before the reference librarian could give me the
                  info i needed. Thank you for listening
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </li>
          <li>
            <div className={styles.userAvatar}></div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <div className={styles.date}>
                <span>2020/4/12</span>
              </div>
              <div className="clr"></div>
              <div className={styles.message}>
                <p>
                  Good enough buh a little bit of speed is needed, i waited for
                  a long time before the reference librarian could give me the
                  info i needed. Thank you for listening
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </li>
          <li>
            <div className={styles.userAvatar}></div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <div className={styles.date}>
                <span>2020/4/12</span>
              </div>
              <div className="clr"></div>
              <div className={styles.message}>
                <p>
                  Good enough buh a little bit of speed is needed, i waited for
                  a long time before the reference librarian could give me the
                  info i needed. Thank you for listening
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </li>
        </ul>
        <div className={styles.avgRatingWrapper}>
          <p>Audience rating summary</p>
          <div className={styles.avgRatings}>
            <ul>
              <li className={styles.rate}>
                <h4>5</h4>
                <span className={styles.outerBar}>
                  <span
                    className={styles.innerBar}
                    style={{ width: `${barWidth}%` }}
                  ></span>
                </span>
              </li>
              <li className={styles.rate}>
                <h4>4</h4>
                <span className={styles.outerBar}>
                  <span
                    className={styles.innerBar}
                    style={{ width: `${barWidth}%` }}
                  ></span>
                </span>
              </li>
              <li className={styles.rate}>
                <h4>3</h4>
                <span className={styles.outerBar}>
                  <span
                    className={styles.innerBar}
                    style={{ width: `${barWidth}%` }}
                  ></span>
                </span>
              </li>
              <li className={styles.rate}>
                <h4>2</h4>
                <span className={styles.outerBar}>
                  <span
                    className={styles.innerBar}
                    style={{ width: `${barWidth}%` }}
                  ></span>
                </span>
              </li>
              <li className={styles.rate}>
                <h4>1</h4>
                <span className={styles.outerBar}>
                  <span
                    className={styles.innerBar}
                    style={{ width: `${barWidth}%` }}
                  ></span>
                </span>
              </li>
            </ul>
            <div className={styles.avg}>
              <h3>2.5</h3>
            </div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
      <Button btnType="stroke">click</Button>
    </div>
  );
};

export default Acquire;
