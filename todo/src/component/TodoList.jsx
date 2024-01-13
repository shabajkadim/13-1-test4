import React, { useState } from 'react'

const TodoList = () => {
    const [activity,setActivity]=useState("");
    const[listData,setListData]=useState([]);


    const handleChange=()=>{
        setListData((listData)=>{
            const updatelist=[...listData,activity]
            console.log(updatelist)
            setActivity("")
            return updatelist;
        })    
    }
    const RemoveAllList=(index)=>{
        const removeall=listData.filter((elment,id)=>{
            if (id =!index){

            }
            setListData([])
        })
    }
        
  return (
    <div>
      <div>
        <h1>MyTodo-List</h1>
        <div>
            <input type='text' value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder='Enter Your list'/>
            <button onClick={handleChange}>Add</button>
            <div>
                {listData !=[] && listData.map((itom,index)=>{
                    return(
                        <>
                        <div key={index}>
                        <div>{itom}</div>
                        <button onClick={()=>RemoveAllList(index)}>Remove</button>
                        </div>
                        </>
                    )

                })}
            </div>
        </div>
      </div>

    </div>
  )
}
//complet add,remove

export default TodoList
