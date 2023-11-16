import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./Imagelist";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { images: [] };
    }


    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=40707071-a38a370aceed1bb52b63cef2c&q=${entry}&image_type=photo`);
        this.setState({ images: response.data.hits });
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
            
        )
    }
}

export default App;