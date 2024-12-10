import Filter from "./components/filter";
import Sort from "./components/sort";
import Content from "./components/content";
import styles from "./page.module.css";
import { Suspense } from "react";
import FilterSkeleton from "./components/filter/skeleton";
import CardSkeleton from "./components/content/vehicle/skeleton";

export type SearchParams = {
  searchParams: Promise<{
    manufacturer?: string;
    page?: string;
    type?: string;
    year?: string;
  }>;
};

export default async function Home({ searchParams }: SearchParams) {
  return (
    <main className={styles.main}>
      <Suspense fallback={<FilterSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <Filter />
      </Suspense>
      <div className={styles.content}>
        <Sort />
        <Suspense fallback={<CardSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <Content searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
