import React from "react";

import "components/search/search.styles.scss";

export default function Search() {
  return (
    <div className="search">
      <div className="ui icon input search__input">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
    </div>
  );
}
