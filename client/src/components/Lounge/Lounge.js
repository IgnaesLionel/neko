import React, { Component } from 'react';
import Characters from '../Characters/Characters'; 
import SearchBar from '../SearchBar/SearchBar'; 
class Lounge extends Component {

    constructor (props) {
        super(props)

    
        this.state = {
            data : null,
            filterText: '',
            maleGender: false,
            femaleGender: false,
            availability: true,
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGenderFilter = this.handleMaleGenderFilter.bind(this);
        this.handleFemaleGenderFilter = this.handleFemaleGenderFilter.bind(this);
        this.handleAvailability = this.handleAvailability.bind(this);
     
        
    }

    handleFilterTextChange (filterText) {
        this.setState({filterText})
    }

    handleMaleGenderFilter (maleGender) {
        this.setState({maleGender})
        
    }

    handleFemaleGenderFilter (femaleGender) {
        this.setState({femaleGender})
    }

    handleAvailability (availability) {
        this.setState({availability})
    }

    render() {
        
        return (
            <div className="lounge">
                <div className="searchbar">
              
                <SearchBar
                onMaleGenderChange={this.handleMaleGenderFilter} 
                onFemaleGenderChange={this.handleFemaleGenderFilter}
                onAvailability={this.handleAvailability}
                onFilterTextChange={this.handleFilterTextChange} 
                filterText={this.state.filterText} 
                maleGender={this.state.maleGender}
                femaleGender={this.state.femaleGender}
                availability={this.state.availability}
           
                />
                </div>
                
                <div>
         
                   <Characters data={this.props.data} 
                   filterText={this.state.filterText} 
                   maleGender={this.state.maleGender} 
                   femaleGender={this.state.femaleGender}
                   availability={this.state.availability}
                
                   />
                </div>
               
            </div>
        );
    }
}
export default Lounge;