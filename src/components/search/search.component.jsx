import React from "react";
import { Input } from "semantic-ui-react";

import "components/search/search.styles.scss";

export default function Search() {
  return (
    <div className="search">
      <Input icon="search" placeholder="Search..." className="search__input" />
    </div>
  );
}
