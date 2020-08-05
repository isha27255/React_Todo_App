import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delete_item = this.delete_item.bind(this)
    this.update_item = this.update_item.bind(this)
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e)
  {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if(newItem.text!==""){
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
    }

  }
  
  delete_item(key)
  {
    const filtered = this.state.items.filter(x => x.key!==key);
    this.setState({
      items: filtered
    })
  }

  update_item(text, key)
  {
    const updated = this.state.items
    updated.map(item => {
      if(item.key===key)
      item.text = text
    })
    this.setState({
      items: updated
    })
  }
  render(){
    return (
      <div className="App">
        <header>
          <form id="todo_form" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter the text" 
        value={this.state.currentItem.text} onChange={this.handleInput}></input>
        <button type="submit">Add</button>
        </form>
        </header>
        <Listing items={this.state.items} delete_item={this.delete_item} 
        update_item={this.update_item}></Listing>
      </div>
    );
  }
}


export default App;
