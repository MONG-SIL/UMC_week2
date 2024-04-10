import { useState } from 'react';


function DrawTodo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setTodos] = useState([]); //기본값
    const [toDid, setToDid] = useState([]); // 넘기기
  
  
    const onChange = (event) => setToDo(event.target.value)
    const onSubmit = (event) => {
    event.preventDefault(); 
    if (toDo === "") {
      return;
    }
    setTodos( (current) => [toDo, ...current]);
    setToDo(""); 
   
    } 
    const onAchieve = (event) => {
      setToDid(current => [toDos[event.target.id], ...current])
      setTodos(toDos.filter(current => current !== toDos[event.target.id]))
    }
  
    const onDelete = (event) => {
      
      setToDid(toDid.filter(current => current !== toDid[event.target.id]))
    }
  
  
    return (
    <div className="wrapper">
          <h1 className="title"> UMC Study Plan</h1>
          <div id="line"></div>
          <div className="box">
          <form id="todo-form" onSubmit={onSubmit} >
              <input onChange={onChange} value={toDo} type="text" placeholder="UMC 스터디 계획을 작성해보세요!" required />
          </form>
          <div className="Dow">
              <h1>해야 할 일</h1>
              <h1>해낸 일</h1>
          </div>
          <div className="Dow">
              <ul id = "todo-list">{toDos.map((item,index) => <li  id={index} key={index}>{ item + " "}<button id={index} onClick={onAchieve}>완료</button></li>)}</ul> 
              
              <ul id = "todo-done">{toDid.map((item,index) => <li id={index} key={index}>{ item + " "}<button id={index} onClick={onDelete}> 삭제 </button></li>)}</ul>
          </div>
          </div>
      </div>  
      
  
    )
  }

  export default DrawTodo;