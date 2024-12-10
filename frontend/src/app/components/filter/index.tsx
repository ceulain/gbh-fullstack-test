import styles from "./styles.module.css";
import { fetchFilters } from "@/app/lib/data";
import CheckboxList from "./checkboxList";

const Filter = async () => {
  const filters = await fetchFilters();

  return (
    <div className={styles.wrapper}>
      {filters.map(({ filter, type, name }) => (
        <CheckboxList filter={filter} key={type} name={name} type={type} />
      ))}
    </div>
  );
};

export default Filter;
