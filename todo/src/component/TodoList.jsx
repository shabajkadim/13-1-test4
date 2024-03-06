import React, { useState } from 'react'
import './../style/todo.css'

const TodoList = () => {
    const [activity,setActivity]=useState("");
    const[listData,setListData]=useState([]);


    const handleChange=()=>{
        setListData((listData)=>{
            const updatelist=[...listData,activity]
            console.log(updatelist)
            setActivity("");
            return updatelist;
        })    
    }
    const RemoveAllList=(index)=>{
        const removedata=listData.filter((element,id)=>{
            return index != id
        })
        setListData(removedata)
    }

    const removeAll=()=>{
        setListData([])
    }
        
  return (
    <div className='maindiv'>
      <div className='childdiv'>
        <h1>MyTodo-List</h1>
        <div>
            <div className='inputadd'>

            <input type='text' value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder='Enter Your list'/>
            <button onClick={handleChange}>Add</button>

            </div>
            <div>
                {listData !=[] && listData.map((itom,index)=>{
                    return(
                        <>
                        <div key={index} className='inputdata'>
                        <div>{itom}</div>
                        <button onClick={()=>RemoveAllList(index)}>Remove</button>
                        </div>
                        </>
                    )

                })}
            </div>

            {listData.length >=1 && <button onClick={removeAll}>Remove-All</button>}
        </div>
      </div>

    </div>
  )
}
//complet add,remove

export default TodoList
