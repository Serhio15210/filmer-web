import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCardSkeleton = () => {
  return (
    <SkeletonTheme>
      <Skeleton
        count={3}
        enableAnimation
        baseColor="#202020"
        highlightColor="#fff"
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
      />
    </SkeletonTheme>
  );
};

export default MovieCardSkeleton;
