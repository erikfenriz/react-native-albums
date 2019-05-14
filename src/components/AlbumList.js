import React, {Component} from 'react';
import {ScrollView} from "react-native";
import axios from "axios";
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({albums: response.data}));
    }

    get renderAlbums() {
        return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums}
            </ScrollView>
        );
    }
};