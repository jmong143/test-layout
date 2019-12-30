import React, { Component } from 'react'

export default class MessageComponent extends Component {
    render() {
        return (
            <div>
                <img src = {process.env.PUBLIC_URL + '/home/stitch.gif'} className = "img-fluid"/>
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
