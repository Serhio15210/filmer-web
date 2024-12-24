import React from "react";
import styles from "@/app/(home)/components/homeComponents.module.scss";
import { useSoonMoviesQuery } from "@/api/movies/queries";
import MovieCardSkeleton from "@/components/skeletons/movie-card-skeleton";
import CustomButton from "@/components/custom-button";

const SoonMovies = () => {
  const { data, isLoading, isError, error } = useSoonMoviesQuery();
  return isLoading ? (
    <MovieCardSkeleton />
  ) : (
    <div className={styles.listContainer}>
      <h1>Upcoming</h1>
      <div className={styles.content}>
        <div className={styles.bigBox}>
          <img
            src={process.env.IMG_URI + data?.results[0].backdrop_path}
            alt={""}
          />
          <div className={styles.info}>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
          </div>
        </div>

        <div className={styles.smallBox}>
          <img
            src={process.env.IMG_URI + data?.results[1].backdrop_path}
            alt={""}
          />
          <div className={styles.info}>
            <h1>{data?.results[1].title}</h1>
            <p>{data?.results[1].overview}</p>
          </div>
        </div>
        <div className={styles.smallBox}>
          <img
            src={process.env.IMG_URI + data?.results[2].backdrop_path}
            alt={""}
          />

          <div className={styles.info}>
            <h1>{data?.results[2].title}</h1>
            <p>{data?.results[2].overview}</p>
          </div>
        </div>
        <div className={styles.smallBox}>
          <img
            src={process.env.IMG_URI + data?.results[3].backdrop_path}
            alt={""}
          />
          <div className={styles.info}>
            <h1>{data?.results[3].title}</h1>
            <p>{data?.results[3].overview}</p>
          </div>
        </div>
        <CustomButton text={"See More"} />
      </div>
    </div>
  );
};

export default SoonMovies;
