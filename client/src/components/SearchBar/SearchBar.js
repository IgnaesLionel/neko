import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGender = this.handleMaleGender.bind(this);
        this.handleFemaleGender = this.handleFemaleGender.bind(this);
  
    }

    handleFilterTextChange(e){
        const incoming = e.target.value

        function jsUcfirst(string) 
        {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const maj= jsUcfirst(incoming)

        this.props.onFilterTextChange(maj)
    }

    handleMaleGender(e){
        this.props.onMaleGenderChange(e.target.checked)
        this.props.onFemaleGenderChange(false)
    }

    handleFemaleGender(e){
        this.props.onFemaleGenderChange(e.target.checked)
        this.props.onMaleGenderChange(false)
    }

    render() {
        const {filterText, maleGender, femaleGender, robotGender} = this.props
        return (
            <>
                <div className="form-group mb-0">
                    <input type="text" value={filterText} className="form-control" id="search" name="search" placeholder="Rechercher" onChange={this.handleFilterTextChange}/>
                    <div className="form-check">
                        <input type="checkbox" checked={maleGender} className="form-check-input" id="char1" onChange={this.handleMaleGender}/>
                        <label htmlFor="char1" className="form-check-label"> Mâle </label>

                        <input type="checkbox" checked={femaleGender} className="form-check-input" id="char2" onChange={this.handleFemaleGender}/>
                        <label htmlFor="char2" className="form-check-label"> Femelle </label>
                        
                    </div>
                </div>

            </>
        );
    }
}

export default SearchBar;
