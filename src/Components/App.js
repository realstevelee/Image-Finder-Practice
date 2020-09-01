import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: term  
            },
            headers: {
                Authorization: 'Client-ID TYcT4uNPf5MAA_lik14T_BOuHWfVOFsNY2fu4feP15Q'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App
