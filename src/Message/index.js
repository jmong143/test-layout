import React, { Component } from 'react'

export default class MessageComponent extends Component {
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
                                some message
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
