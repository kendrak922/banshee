import React, { Component } from 'react';
import firebase from '../../firebase';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            clients: [],
            showModal:false,

            modal:{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex:'9999',
            },
            background: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                zIndex:'9998'
            }
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("This is working")
        const clientRef = firebase.database().ref('clients');
        const client = {
            name: this.state.name,
            email: this.state.email
        }
        clientRef.push(client);
        this.setState({
            name: '',
            email: ''
        });
    }

    handleClick(){
        this.setState(prevState=>({
            showModal: !prevState.showModal
        }));
    }

    render() {
        const modal = (
            <div className="modal-background" style={this.state.background}>
                <div className='modal-style' style={this.state.modal}>
                    <div className="modal-title"></div>
                    <div className="modal-btn" onClick={this.handleClick}>X</div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Young Bill" />
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="HadToBeYou@gmail.com" />
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )

        return (
            <div className="contact">
                <button className="button" id="contact-btn" onClick={this.handleClick}>Let's Talk</button>
                {this.state.showModal ? modal : ''}
            </div>
        )
    }
}

export default Modal;