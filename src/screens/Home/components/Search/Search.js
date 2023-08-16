import React from 'react'
import css from "./Search.module.css";
import { ReactComponent as SearchPhone } from "../../../../assets/search-phone.svg";

const Search = () => {
  return (
    <div className={css.formDiv}>
      <form className={css.search} id="search-form">
        <input
          className={css.input}
          type="text"
          placeholder="Введіть назву товару або артикул"
        />
        <button type="submit" className={css.buttonSearch}>
          <div
            href="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className={css.iconSearch}
          >
            <SearchPhone />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Search

