import React, { useState } from 'react'

const TodoApp = () => {
    const [activity,setActivity]=useState('')
    const [listData,setListData]=useState([])

    function handleChange(){
        setListData((listData)=>{
            const ShowData=[...listData,activity]
            console.log(ShowData);
            setActivity("")
            return ShowData
        })
    }
    return (
    <div>
      <h1>Todo-App</h1>
      <input type='text' value={activity} onChange={(e)=>setActivity(e.target.value)} />
      <button onClick={handleChange}>Add</button>

      <div>
        {listData !=[] && listData.map((data)=>{
            return(
                <>
                <div>{data}</div>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default TodoApp
