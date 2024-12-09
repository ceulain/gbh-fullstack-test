import Filter from "./components/filter";
import Sort from "./components/sort";
import Content from "./components/content";
import styles from "./page.module.css";
import Pagination from "./components/pagination";
import { Suspense } from "react";
import FilterSkeleton from "./components/filter/skeleton";
import CardSkeleton from "./components/content/vehicle/skeleton";

{
}
const TOTAL_PAGE = 20;
const TOTAL__ITEM_PER_PAGE = 4;

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

        <Pagination total={TOTAL_PAGE / TOTAL__ITEM_PER_PAGE} />
      </div>
    </main>
  );
}
