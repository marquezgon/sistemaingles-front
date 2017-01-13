var React = require('React');

class SearchSidebarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick() {
    this.setState({isClicked: true});
  }

  handleBlur() {
    this.refs.searchInput.value = '';
    setTimeout(() => {
      this.setState({isClicked: false});
    }, 400);
  }

  render() {
    return (
      <form className="search-sidebar">
        <span className={this.state.isClicked ? "hide-element" : "" }>Quizes</span>
        <input onClick={this.handleClick} onBlur={this.handleBlur} title="Buscar" type="search" ref="searchInput" placeholder="Buscar" />
      </form>
    )
  }
}

module.exports = SearchSidebarComponent;
