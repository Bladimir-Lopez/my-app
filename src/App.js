import React, { Component } from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
// data 
//import { todos } from './todos.json'; 
// subcomponents 
import TodoForm from './components/TodoForm'; 

import request from 'superagent';

const superagentid = require('superagent');

/////console.log(todos); 





class App extends Component { 

  constructor() { 
    super(); 
    this.state = { 
    todos: [] 
    
  } 
  this.handleAddTodo = this.handleAddTodo.bind(this); 
  }

  componentDidMount(){
    request
      .get('http://192.168.0.17:8000/deposito')
      .end((err,res)=>{
        // console.log(res);  
         console.log(JSON.parse(res.text));
         const deposito =JSON.parse(res.text);
         console.log(deposito);
         this.setState({
           todos: deposito
         });
      });
  }

  removeTodo(index,posiId) { 
    const elimIndex=index+1;
    console.log("entra eliminar");
    console.log(elimIndex);
    //superagentd.delete("http://192.168.0.101:8000/zoologico/8").end((err,res)=>{});
    //superagentd.delete("http://192.168.0.101:8000/zoologico/"+elimIndex).end((err,res)=>{});
    superagentid.delete("http://192.168.0.17:8000/deposito/"+posiId).end((err,res)=>{});
    this.setState({ 
      todos: this.state.todos.filter((e, i) => { 
        return i !== index 
      })
    }); 
  } 

  handleAddTodo(todo) { 
    this.setState({ 
      todos: [...this.state.todos, todo] 
    })
  }


  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">

            <div className="card-title text-center">
              <h3>{todo.id}</h3>
              <span className="badge badge-pill badgedanger ml-2">
                {todo.codigo}
              </span>
            </div>

            <div className="card-body">
              {todo.descripcion}
            </div>

            <div className="card-footer">
              <button className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i, todo.id)}>
                Eliminar
              </button>
            </div>

          </div>
        </div>
      )
    });
  // RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Depositos
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}>
                </TodoForm>
              </div>
              <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 }
 export default App;