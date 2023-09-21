import React from "react";
import './style.css'
let stl = ''
export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            user: window.sessionStorage.getItem('user'),
            wish: '',
        }
    }
    componentDidMount() {
        let date = ""
        date = new Date().getHours()
        // date = 15
        if (date < 12) {
            stl = 'mrng'
            this.setState({
                wish: 'Good Morning'
            })
        }
        else if (date < 16) {
            stl = 'aftr'
            this.setState({
                wish: 'Good Afternoon'
            })
        }
        else if (date < 20) {
            stl = 'eve'
            this.setState({
                wish: 'Good Evening'
            })
        }
    }
    render() {
        this.state = {
            ...this.state,
            user: window.sessionStorage.getItem('user')
        }
        return (
            <div>
                <h3 className="bg-warning rounded h-100 p-3 mx-auto text-white jumbotron">
                    {/* {this.state.wish}  */}
                    Welcome, {this.state.user}</h3>
            </div>
        )
    }
}
