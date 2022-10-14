import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  category?: any;
  title: string;
  description?: string;
  author: string;
  slug: string;
  date?: string;
};

const Post: React.FC<Props> = ({
  category,
  title,
  description,
  author,
  slug,
  date,
}) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>
        <div className={styles.preInfo}>
          {!!category && (
            <Link href={`/categories/${category.slug}`}>
              <p className={styles.category}>{category.name}</p>
            </Link>
          )}
          {!!date && <p className={styles.date}>{date}</p>}
        </div>
        <Link href={`/posts/${slug}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        {!!description && (
          <Link href={`/posts/${slug}`}>
            <p className={styles.description}>
              {description.substring(0, 255)}
              {description.length > 255 && "..."}
            </p>
          </Link>
        )}
      </div>
      <p className={styles.author}>by {author}</p>
    </div>
  </div>
);

export default Post;
