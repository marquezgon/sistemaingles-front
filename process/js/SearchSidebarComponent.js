var React = require('React');

class SearchSidebarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false, isActive: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleClick() {
    this.setState({isClicked: true});
  }

  handleChange() {
    this.props.onUserInput(this.refs.searchInput.value);
  }

  handleBlur() {
      if(this.props.filterText.length <= 0) {
          setTimeout(() => {
              this.setState({isClicked: false});
          }, 500);
          this.setState({isActive: false});
      }
  }

  handleFocus() {
      this.setState({isActive: true});
  }

  render() {
    return (
      <form className="search-sidebar">
        <span className={this.state.isClicked ? "hide-element" : "" }>Quizes</span>
        <input className={this.state.isActive ? "active-search" : null } onClick={this.handleClick} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} title="Buscar" type="search" ref="searchInput"value={this.props.filterText} />
      </form>
    )
  }
}

module.exports = SearchSidebarComponent;
