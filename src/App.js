import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoItems from './component/TodoItems/TodoItems'
import AddItem from './component/AddItem/AddItem'

class App extends React.Component{

  state = {
    items : [
      {name : 'Jengkol'},
      {name : 'Semur'},
      {name : 'Kol Goreng'},
      {name : 'Sayur asem'} 
    ]
  }

  deleteItem = (id)=>{
    let items = this.state.items;
    let i = items.findIndex(item=> item.id === id)
    items. splice(i,1)
    this.setState({items})
  }


  addItem = (x) =>{
    x.id = Math.random();
    let items = this.state.items;
    items.push(x);
    this.setState({items})
  }


  render(){
    return(

      <div  className='text-center' style={{width:'100%', minHeight:'75px', marginBottom:'80px'}}>
        <h1 >HEADER</h1><br/><br/><br/><br/>
        <div>
        <p>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
        </p>
        </div>
        <div className='text-center' style={{backgroundColor:'lightgrey', height:'75px', position:'absolute', bottom:'0px', width:'100%'}}>
              <h1>FOOTER</h1>
            </div>
      </div>
     //testing 1 2
    )
  }
}



export default App;
