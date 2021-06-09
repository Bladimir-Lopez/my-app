import React, { Component } from 'react';

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
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Id"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="codigo"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Codigo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Descripcion"
                        />
                    </div>
 
                    <button type="submit" className="btn btnprimary">
                        guardar
                    </button>
                </form>
            </div>
        )
    }
}
export default TodoForm;
