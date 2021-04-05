import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGender = this.handleMaleGender.bind(this);
        this.handleFemaleGender = this.handleFemaleGender.bind(this);
        this.handleAvailability = this.handleAvailability.bind(this)
    }

    handleFilterTextChange(e) {
        const incoming = e.target.value

        function jsUcfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const maj = jsUcfirst(incoming)

        this.props.onFilterTextChange(maj)
    }

    handleMaleGender(e) {
        this.props.onMaleGenderChange(e.target.checked)
        this.props.onFemaleGenderChange(false)
    }

    handleFemaleGender(e) {
        this.props.onFemaleGenderChange(e.target.checked)
        this.props.onMaleGenderChange(false)
    }

    handleAvailability(e) {
        this.props.onAvailability(e.target.checked)
    }

    render() {
        const { filterText, maleGender, femaleGender, availability } = this.props
        return (
            <>
                <div className="form-group mb-0">

                    <div className="form-check">
                        <input type="checkbox" checked={maleGender} className="form-check-input" id="char1" onChange={this.handleMaleGender} />
                        <label htmlFor="char1" className="form-check-label"> Mâle </label>

                        <input type="checkbox" checked={femaleGender} className="form-check-input" id="char2" onChange={this.handleFemaleGender} />
                        <label htmlFor="char2" className="form-check-label"> Femelle </label>

                        <input type="checkbox" checked={availability} className="form-check-input" id="char3" onChange={this.handleAvailability} />
                        <label htmlFor="char3" className="form-check-label"> Je recherche une famille </label>

                    </div>
                    <input type="text" value={filterText} className="form-control" id="search" name="search" placeholder="par prénom" onChange={this.handleFilterTextChange} />
                </div>

            </>
        );
    }
}

export default SearchBar;
