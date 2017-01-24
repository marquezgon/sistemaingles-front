var React = require('React');
var Select2 = require('react-select2-wrapper');

class BookDropdown extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.booksAndSections.length !== nextProps.booksAndSections.length) {
            return true;
        }

        return false;
    }

    render() {
        if(!this.props.booksAndSections) {
            return <div>Loading...</div>
        }

        const books = this.props.booksAndSections.map((item, index) => {
            return {text: item.book.name, id: index};
        });

        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <h4 className="text-right">Libro</h4>
                </div>
                <div className="col-md-6">
                    <Select2 onChange={event => { this.props.changeSelectOption(event.target.selectedIndex) }} className="select2-quiz" data={books}
                      options={
                        {
                          placeholder: 'Selecciona un libro',
                        }
                      }
                    />
                </div>
            </div>
        );
    }
}

module.exports = BookDropdown;
