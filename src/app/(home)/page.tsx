"use client";
import MovieCardSkeleton from "@/components/skeletons/movie-card-skeleton";
import { Suspense } from "react";
import SoonMovies from "@/app/(home)/components/soon-movies";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<MovieCardSkeleton />}>
        <SoonMovies />
      </Suspense>
    </div>
  );
}
