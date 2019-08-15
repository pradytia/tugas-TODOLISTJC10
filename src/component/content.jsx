import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class Content extends React.Component{

    state ={    
        data : ''
    }

    renderData = ()=>{
        const list = ['seto', 'andi', 'budi']
        var jsx = list.map((val,idx)=>{
            return <tr>
                <td style={{textAlign:'center', padding:'5px'}}>{idx+1}</td>
                <td style={{textAlign:'center', padding:'5px'}}>{val}</td>
                <td style={{textAlign:'center', padding:'5px'}}><input type="button" class="btn btn-danger" value="DELETE" onclick=""/></td>        
            </tr>
        })
        return jsx
      }


    addItem = ()=>{
        this.setState({data:this.refs.input.value})
    }

    render(){
        return(
            <center>
            <div className='text-center' style={{align:'center'}}>
          <table style={{width:'50%', textAlign:'center' , border:0, borderCollapse:'collapse', marginTop:'50px', justifyContent:'space-around'}}>
              <tbody>
              {this.renderData()}     
              {this.state.data}       
              </tbody>
              <tfoot><br/><br/>
              <td><input type='text' placeholder='ADD item' className='form-control' ref='input'/></td>
              <td><input type='button'value='ADD item' className='btn btn-success' onClick={()=>{this.addItem();}}/></td>
              </tfoot>
          </table>
          </div>
          </center>
        )
    }
}

export default Content; 