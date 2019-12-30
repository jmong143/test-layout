import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./styles.css";

export default class HomepageComponent extends Component {
    render() {
        return (
            <div>
                <div className = "center-align">
                    <p><img src = {process.env.PUBLIC_URL + '/home/2020.gif'} className = "img-fluid"/></p>
                    <p><img src = {process.env.PUBLIC_URL + '/home/happy-new-year-gif.gif'} className = "img-fluid"/></p>
                </div>
                <hr/>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12">
                            <h5>Hello Anja!!!!! Happy New Year!!!🎉🎊</h5>
                            <hr/>
                            <p>I'd created this page for you to find that year 2020 will be full of hope, blessings, acceptance, healings, love, peace and more! </p>
                            <hr/>
                            <p>I hope you start this year with a smile 😊😊😉 . Check <Link to = "/message">this page</Link>, I have something to say hehe 💓</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
