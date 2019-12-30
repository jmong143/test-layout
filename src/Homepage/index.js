import React, { Component } from 'react'

export default class HomepageComponent extends Component {
    render() {
        return (
            <div>
                <img src = {process.env.PUBLIC_URL + '/home/happy-new-year-gif.gif'} className = "img-fluid"/>
            </div>
        )
    }
}
