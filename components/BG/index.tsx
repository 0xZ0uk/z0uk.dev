import React from "react";
import styles from "./index.module.scss";

type Props = {
  children?: JSX.Element;
};

const Header: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <div className={styles.bgOverlay} />
    <div className={styles.bg}>
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.blob1}
      >
        <path
          fill='#AF67DC'
          d='M61.5,-60.5C78.1,-45,88.6,-22.5,87.4,-1.2C86.3,20.2,73.4,40.3,56.9,55.5C40.3,70.7,20.2,80.8,1.3,79.5C-17.6,78.2,-35.2,65.5,-45.2,50.3C-55.2,35.2,-57.6,17.6,-57.3,0.4C-56.9,-16.9,-53.7,-33.7,-43.7,-49.2C-33.7,-64.7,-16.9,-78.8,2.8,-81.6C22.5,-84.4,45,-76,61.5,-60.5Z'
          transform='translate(100 100)'
        />
      </svg>
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.blob2}
      >
        <path
          fill='#af67dc'
          d='M38.9,-40.5C51.2,-26.6,62.5,-13.3,64.1,1.6C65.8,16.6,57.8,33.2,45.5,46.7C33.2,60.3,16.6,70.9,-1,71.8C-18.5,72.8,-37,64.2,-47.7,50.6C-58.4,37,-61.3,18.5,-63.1,-1.8C-64.9,-22.1,-65.5,-44.1,-54.8,-58.1C-44.1,-72.1,-22.1,-77.9,-4.4,-73.5C13.3,-69.1,26.6,-54.5,38.9,-40.5Z'
          transform='translate(100 100)'
        />
      </svg>
    </div>
  </React.Fragment>
);

export default Header;
