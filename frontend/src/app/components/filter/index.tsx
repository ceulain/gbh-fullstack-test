import styles from "./styles.module.css";
import { fetchFilters } from "@/app/lib/data";
import Form from "./form";

const Filter = async () => {
  const filters = await fetchFilters();

  return (
    <div className={styles.wrapper}>
      {filters.map(({ filter, type, name }) => (
        <Form filter={filter} key={type} name={name} type={type} />
      ))}
    </div>
  );
};

export default Filter;
