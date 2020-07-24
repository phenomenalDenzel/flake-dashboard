import React, { useState } from "react";
import styles from "./SelectBox.module.css";

const SelectBox = (props) => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState([
    {
      label: "Automobiles",
      value: "automobile",
    },

    {
      label: " Film & Animations",
      value: "film",
    },

    {
      label: "Science & Technology",
      value: "science",
    },

    {
      label: "Art",
      value: "art",
    },

    {
      label: "Music",
      value: "music",
    },

    {
      label: "Travel & Events",
      value: "travel",
    },

    {
      label: "Sports & Entertaiment",
      value: "sports",
    },

    {
      label: "News & Politics",
      value: "news",
    },

    {
      label: "Tutorials",
      value: "tutorials",
    },
  ]);
  const [selectedValue, setSetectedValue] = useState(props.selected);
  const optionsClasses = [styles.OptionsContainer];
  if (toggle) {
    optionsClasses.push(styles.Active);
  }

  return (
    <div className={styles.SelectBox}>
      <div className={optionsClasses.join(" ")}>
        {data.map((entry) => (
          <div className={styles.Option}>
            <label
              onClick={() => {
                setSetectedValue(entry.label);
                setToggle(!toggle);
              }}
            >
              <input type="radio" className={styles.Radio} name="category" />
              {entry.label}
            </label>
          </div>
        ))}
      </div>
      <div className={styles.Selected} onClick={() => setToggle(!toggle)}>
        {selectedValue}
      </div>
    </div>
  );
};

export default SelectBox;
