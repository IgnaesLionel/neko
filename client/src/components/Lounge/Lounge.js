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
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGenderFilter = this.handleMaleGenderFilter.bind(this);
        this.handleFemaleGenderFilter = this.handleFemaleGenderFilter.bind(this);
     
        
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
    
    handleRobotGenderFilter (robotGender) {
        this.setState({robotGender})
    }

    render() {
        
        return (
            <div className="lounge">
                <div className="searchbar">
              
                <SearchBar
                onMaleGenderChange={this.handleMaleGenderFilter} 
                onFemaleGenderChange={this.handleFemaleGenderFilter}
               
                onFilterTextChange={this.handleFilterTextChange} 
                filterText={this.state.filterText} 
                maleGender={this.state.maleGender}
                femaleGender={this.state.femaleGender}
           
                />
                </div>
                
                <div>
         
                   <Characters data={this.props.data} 
                   filterText={this.state.filterText} 
                   maleGender={this.state.maleGender} 
                   femaleGender={this.state.femaleGender}
            
                   />
                </div>
                
            </div>
        );
    }
}
export default Lounge;