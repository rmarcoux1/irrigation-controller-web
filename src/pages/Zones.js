import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            zoneNumber: ''
        }
    }

    toggleZone() {
        axios.get('http://192.168.1.113:9999/system/zone/' + this.state.zoneNumber)
            .then(resp => resp.json())
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    handleClick = ev => {
        const value = ev.currentTarget.value;
        console.log(value)
        this.setState({zoneNumber : value},this.toggleZone)
    }

    render() {
        return (
            <div>
                <button  value={'1'} onClick={this.handleClick}>Zone 1 (Front Yard)</button><br/>
                <button  value={'2'} onClick={this.handleClick}>Zone 2 (Front Yard)</button><br/>
                <button  value={'3'} onClick={this.handleClick}>Zone 3 (Front Yard)</button><br/>
                <button  value={'4'} onClick={this.handleClick}>Zone 4 (Front Yard)</button><br/>
                <button  value={'5'} onClick={this.handleClick}>Zone 5 (Front Yard)</button><br/>
                <button  value={'6'} onClick={this.handleClick}>Zone 6 (Front Yard)</button>
            </div>
        );
    }
}
