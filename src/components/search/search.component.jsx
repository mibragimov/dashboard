import React from "react";
import _ from "lodash";
import { Input, Icon, Image } from "semantic-ui-react";
import "components/search/search.styles.scss";

const initialState = { isLoading: false, term: "" };

export default class Search extends React.Component {
  state = initialState;

  handleChange = e => {
    this.setState({ term: e.target.value, isLoading: true });

    setTimeout(() => {
      if (this.state.term.length < 1) return this.setState(initialState);

      this.setState({ isLoading: false });
    }, 300);
  };

  handleResultSelect = (fName, lName) =>
    this.setState({ term: fName + " " + lName + " " });

  renderResults = () => {
    const { users } = this.props;
    const { term } = this.state;

    if (users.length) {
      if (term === "") {
        return;
      }

      const regex = new RegExp(_.escapeRegExp(term), "i");
      const isMatch = result =>
        regex.test(result.name.first + result.name.last);

      const results = _.filter(users, isMatch);

      if (results.length === 0 && term.indexOf(" ") === -1) {
        return <div className="search__results__container">No Results</div>;
      } else {
        return results.map(result => {
          return (
            <div className="search__results__container" key={result.id.value}>
              <div className="search__results__container--image">
                <Image
                  centered
                  rounded
                  src={result.picture.thumbnail}
                  alt={result.name.first}
                />
              </div>
              <div className="search__results__container--content">
                <div
                  className="search__results__container--content--title"
                  onClick={() =>
                    this.handleResultSelect(result.name.first, result.name.last)
                  }
                >
                  {result.name.first + " " + result.name.last}
                </div>
                <div className="search__results__container--content--description">
                  <Icon name="mail" /> {result.email}
                </div>
                <div className="search__results__container--content--description">
                  <Icon name="map marker alternate" /> {result.location.city}
                </div>
              </div>
            </div>
          );
        });
      }
    } else {
      return;
    }
  };

  render() {
    const { isLoading, term } = this.state;
    const { icon, placeholder, dashboard, required } = this.props;

    return (
      <div className="search">
        <Input
          icon={icon}
          placeholder={placeholder}
          className={dashboard ? "search__input" : "users__input"}
          loading={isLoading}
          value={term}
          onChange={this.handleChange}
          required={required}
        />
        <div className="search__results transition">{this.renderResults()}</div>
      </div>
    );
  }
}
