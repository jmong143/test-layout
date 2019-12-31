import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { notification } from '../plugins/noty';

export default class MessageComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtPassword: '',
            messageStatus: false,
            disabled: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleViewMessage = this.handleViewMessage.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleViewMessage(e){
        e.preventDefault();
        this.setState({disabled: true})
        if(this.state.txtPassword === "anjaganda2020"){
            setTimeout(() => {
                notification("success", `<i class = "fa fa-check"></i> Success`)
                this.setState({messageStatus: true})
                this.setState({disabled: false})    
            }, 1500);
            
        }else{
            setTimeout(() => {
                notification("error", `<i class = "fa fa-remove"></i> Invalid password`)
                this.setState({messageStatus: false})
                this.setState({disabled: false})
            }, 1500);
            
            
        }
    }

    render() {
        return (
            <div>
                <div className = "center-align">
                    <img src = {process.env.PUBLIC_URL + '/home/stitch.gif'} className = "img-fluid"/>
                </div>
                <hr/>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12">
                            <p>Michael's message,</p>
                            <div class="alert alert-dismissible alert-secondary">
                                {this.state.messageStatus ? 
                                    <div>
                                        Input message
                                    </div>
                                : 
                                <form onSubmit = {this.handleViewMessage}>
                                    <div className = "form-group">
                                        <label>Password</label>
                                        <input type = "password" name = "txtPassword" value = {this.state.txtPassword} onChange = {this.handleChange} className = "form-control" placeholder = "Input password" disabled = {this.state.disabled}/>
                                    </div>
                                    <div className = "form-group">
                                        <button type = "submit" className = "btn btn-primary" disabled = {this.state.disabled}> {this.state.disabled == true ? <div><div className="spinner-border" role="status"> <span className="sr-only">Loading...</span></div> </div> : <div><FontAwesomeIcon icon = {faCheck}/> Submit</div>} </button>
                                    </div>
                                </form>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
