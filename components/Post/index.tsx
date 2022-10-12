import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  category?: string;
  title: string;
  description?: string;
  author: string;
  slug: string;
};

const Post: React.FC<Props> = ({
  category,
  title,
  description,
  author,
  slug,
}) => (
  <div className={styles.container}>
    <Link href={`/posts/${slug}`}>
      <div className={styles.wrapper}>
        <div>
          {!!category && <p className={styles.category}>{category}</p>}
          <h3 className={styles.title}>{title}</h3>
          {!!description && (
            <p className={styles.description}>
              {description.substring(0, 55)}
              {description.length > 55 && "..."}
            </p>
          )}
        </div>
        <p className={styles.author}>by {author}</p>
      </div>
    </Link>
  </div>
);

export default Post;
