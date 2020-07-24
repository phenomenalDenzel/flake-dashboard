import React from "react";
import styles from "./ScrapeLoader.module.css";
function ScrapeLoader() {
  return (
    <div className={styles.Loader}>
      <div className={styles.Text}>Scraping Data [This may take a while]</div>
      <div className={styles.Dots}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ScrapeLoader;
