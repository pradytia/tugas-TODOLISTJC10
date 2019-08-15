import React from 'react'
import './AddItem.css'

class AddItem extends React.Component{

    state = {
        name : ''
    }

    handle = (x)=>{
        this.setState({
            [x.target.id] : x.target.value
        })
    }

    submit = (x) =>{
        x.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name : ''
        })
    }
    render(){

        return(
            <div>
                <form onSubmit={this.submit}>
                    <input type='text' placeholder='ENTER NAME' id='name' onChange={this.handle} value={this.state.name}/>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}

export default AddItem;