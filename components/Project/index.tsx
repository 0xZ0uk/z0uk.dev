import React from "react";
import CustomLink from "../Link";
import styles from "./index.module.scss";

type Props = {
  state?: "Coming Soon" | "WIP" | "Launched";
  title: string;
  description?: string;
  slug?: string;
};

const ProjectSingle: React.FC<Props> = ({
  state,
  title,
  description,
  slug,
}) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>
        <p className={styles.state}>{state}</p>
        <h3 className={styles.title}>{title}</h3>
        {!!description && (
          <p className={styles.description}>
            {description.substring(0, 255)}
            {description.length > 255 && "..."}
          </p>
        )}
        <div className={styles.readmore}>
          <CustomLink label='Read More' to={`/projects/${slug}`} />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectSingle;
