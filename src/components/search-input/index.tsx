import React from "react";
import styles from "./searchInput.module.scss";
import Form from "next/form";
import SearchIcon from "#/icons/svg/searchIcon";

type SearchInputProps = {
  // value:string;
  // onSubmit:()=>void;
};
const SearchInput = ({ onSubmit, value }: SearchInputProps) => {
  return (
    <Form action="/search" className={styles.searchForm}>
      <input name="query" placeholder="Searh..." />
      <button type="submit">
        <SearchIcon width={18} height={18} color={"#fff"} />
      </button>
    </Form>
  );
};

export default SearchInput;
