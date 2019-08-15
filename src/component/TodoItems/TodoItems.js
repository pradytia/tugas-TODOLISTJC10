import React from 'react'
import './TodoItems.css'


const TodoItems = (props) =>{
    const {items, deleteItem} = props;
    const ListItems = items.map((item,idx)=>{
        return (
            <div>
                <span>{idx +1}</span>
                <span className='name'>{item.name}</span>
                <span><input type="button" className="btn btn-danger" value="DELETE" onClick={()=>deleteItem(item.id)}/></span>

            </div>
        )
    })

        return(
            <div className='ListItems'>
                <div>
                    {/* <span className='name title'>Nama</span>
                    <span className='action title'>Button</span> */}
                </div>
                {ListItems}
            </div>
        )
    }


export default TodoItems ;