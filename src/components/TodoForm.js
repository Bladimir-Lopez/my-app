import React, { Component } from 'react'; 
//import request from 'superagent';

const superagent = require('superagent');

class TodoForm extends Component { 

  constructor () { 
    super(); 
        this.state = { 
            id: '', 
            codigo: '', 
            descripcion: ''
        }; 

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
 
    handleSubmit(e) { 
    
        e.preventDefault(); 
        this.props.onAddTodo(this.state); 


        this.setState({ 
            id: '', 
            codigo: '', 
            descripcion: ''
        }); 

        console.log("Enviar Dato");

        console.log(this.state.id," ",this.state.codigo,);
        const a=this.state.id;
        const b=this.state.codigo;
        //const c=this.state.pais;
        const d=this.state.descripcion;


        superagent.post('http://192.168.0.17:8000/deposito')
        .send({ id:a.toString(),codigo:b.toString(),descripcion:d.toString()})
        .end((err,res)=>{});


        //este codigo si manda
        //superagent.post('http://192.168.0.100:8000/zoologico')
        //       .send({ nombre:"sacaba",ciudad:"colomi",pais:"0",tamanio:4,PresupuestoAnual:2})
        //       .end((err,res)=>{});
        ///

    }

    handleInputChange(e) { 
        const {value, name} = e.target; 
        console.log(value, name); 
        this.setState({ 
            [name]: value 
        }); 
    } 


    render() { 
        return ( 
            <div className="card"> 
                <form onSubmit={this.handleSubmit} className="card-body"> 
    
                    <div className="form-group"> 
                        <input 
                            type="text" 
                            name="id" 
                            className="form-control" 
                            value={this.state.responsible} 
                            onChange={this.handleInputChange} 
                            placeholder="id" 
                        /> 
                    </div> 


                    <div className="form-group"> 
                        <input 
                            type="text" 
                            name="codigo" 
                            className="form-control" 
                            value={this.state.description} 
                            onChange={this.handleInputChange} 
                            placeholder="codigo" 
                        /> 
                    </div> 

                    <div className="form-group"> 
                        <input 
                            type="text" 
                            name="descripcion" 
                            className="form-control" 
                            value={this.state.description} 
                            onChange={this.handleInputChange} 
                            placeholder="descripcion" 
                        /> 
                    </div> 

    
                    <button type="submit" className="btn btn-primary"> 
                        Guardar 
                    </button> 
                </form> 
            </div> 
        ) 
    } 
}
    export default TodoForm;