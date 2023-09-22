import axios from 'axios'
import React from 'react'
import url from './url'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

let cart = []
export default class MainComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            login: false,
            products: [],
            todo:"Login"
        }
    }
    componentDidMount() {
        axios.get(url + "/fetch")
            .then((posRes) => {
                this.setState({
                    products: posRes.data,
                    status:"Login"
                })
            }, (errRes) => {
                console.log(errRes)
            })
    }
    render() {
        return (
            <div className='container mt-4'>
                <div hidden={this.state.login} className="jumbotron custom-jumbotron">
                    <h2 className="h1-responsive font-weight-bold text-center mt-2">
                        Login
                    </h2>
                    <br/>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Welcome back ! <br/> Please log in to access your account.
                    </p>
                    <div className='row'>
                        <div className=' text-center mx-auto mt-3'>
                            <form
                                onSubmit={this.login}
                                className=""
                            >
                                <div className="col-md-12 h-100 d-flex align-items-center justify-content-center ">
                                    <div className="md-form">
                                        <label htmlFor="name" className="">
                                        Username
                                        </label>
                                        <input required
                                        type="name"
                                        id="name"
                                        name="uname"
                                        className="form-control custom-input"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 h-100 d-flex  justify-content-center">
                                    <div className="md-form">
                                        <label htmlFor="name" className="text-md-left">
                                        Password
                                        </label>
                                        <input required
                                        type="password"
                                        id="name"
                                        name="upwd"
                                        className="form-control custom-input"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mx-auto text-md-center">
                                    <button className="btn btn-success mt-3" onclick="document.getElementById('contact-form').submit();">
                                        {this.state.todo}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/><br/>
                    <p className="text-center w-responsive mx-auto mb-5">
                        If you don't have an account yet, you can <Link to="/signup">Signup</Link> here.
                        <br/><br/>
                        If you have any questions or need assistance, please <Link to="/contactus">Contact us</Link>.
                    </p>
                </div>
                <div hidden={!this.state.login}>
                    <button onClick={this.logout} className='btn btn-primary float-right mt-3 mr-5'>Logout</button>
                    <Header className="bg-primary"/>
                    <div className='h4 text-info mb-2' align="right">
                        Total Cost: {this.calculateTotal()}
                        <button onClick={() => { this.buyNow() }} className='btn btn-success mx-5'>Buy Now</button>
                    </div>
                    <div className='row'>
                        <div className='col-10'>
                            <div className='row'>
                                {this.state.products.map((e, i) => (
                                    <div className='col-md-4 my-3'>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <img src={e.p_img} alt='' className='card-img-top'></img>
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <div className='h2 card-title'>{e.p_name}</div>
                                            <div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
                                        </div>
                                        <div className='card-footer'>
                                            <button onClick={() => { alert(e.p_desc) }}
                                                className="btn btn-info btn-block btn-sm"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                title={e.p_desc}>Learn More</button>
                                            <button onClick={() => { this.addToCart(e) }} class="btn btn-success btn-block btn-sm">Add to Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row my-3'>
                                {cart.map((e, i) => (
                                    <div className='my-3'>
                                        <div className=' card'>
                                            <div className='card-header'>
                                                <img src={e.p_img} alt='' className='card-img-top'></img>
                                            </div>
                                            <div className='card-body'>
                                                <div className='h2 card-title'>{e.p_name}</div>
                                                <div className='h4 card-subtitle text-muted'>{e.qty}</div>
                                            </div>
                                            <div className='card-footer'>
                                                <button onClick={() => { this.reduce(e) }} class="btn btn-warning btn-block btn-sm">Reduce</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    login = (e) => {
        e.preventDefault()
        let obj = {
            uname: e.target.uname.value,
            upwd: e.target.upwd.value
        }
        this.setState({
            todo:"Please wait..."
        })
        axios.post(url + "/fetch/auth", obj)
            .then((posRes) => {
                console.log(posRes.data)
                if (posRes.data.auth === 'success') {
                    console.log('Object in auth :- ', obj)
                    this.setState({
                        ...this.state,
                        login: true,
                        user: obj.uname,
                        todo:"Login"
                    })
                    console.log('State after login:- ', this.state)
                    window.sessionStorage.setItem('user', obj.uname)
                    this.fetchCart()
                }
                setTimeout(()=>{
                        alert("Please don't refresh or navigate to other pages...Thank You..")
                }, 4000);
            }, (errRes) => {
                console.log(errRes)
                if(errRes.data.auth === 'failed'){
                    this.setState({
                        ...this.state,
                        todo:"Provide Correct Details and try again"
                    })
                }
            })
    }
    addToCart = (item) => {
        let present = false
        let i
        for (i = 0; i < cart.length; i++) {
            if (item.p_id === cart[i].p_id) {
                present = true
                break
            }
        }
        //if item is present in cart, update it
        if (present === true) {
            let myObj = cart[i]
            // let id = myObj.id
            let obj = {
                "uname": this.state.user,
                "p_id": myObj.p_id,
                "qty": parseInt(myObj.qty) + 1,
            }
            axios.post(url + "/update/updateCart", obj)
                .then((posRes) => {
                    cart.forEach((e, i) => {
                        if (e.p_id === obj.p_id)
                            e.qty = obj.qty
                    })
                    console.log(posRes.statusText)
                    this.setState({
                        status: 'Update ' + posRes.statusText
                    })
                }, (errRes) => {
                    console.log(errRes)
                    this.setState({
                        status: errRes.message
                    })
                })
        }
        //if item is not present in cart, insert it
        else {
            let obj = {
                "uname": this.state.user,
                "p_name": item.p_name,
                "p_id": item.p_id,
                "qty": 1,
                "p_cost": item.p_cost,
                "p_img": item.p_img
            }
            axios.post(url + "/insert/cartInsert", obj)
                .then((posRes) => {
                    this.setState({
                        status: 'Record' + posRes.statusText
                    })
                    cart.push(obj)
                }, (errRes) => {
                    console.log(errRes)
                })
        }
        this.setState({
            total: this.calculateTotal()
        })
        console.log(cart)
    }
    reduce = (item) => {
        console.log('Item id:- ', item.id)
        if (item.qty === 1) {
            let obj = {
                "u_name": this.state.user,
                "p_id": item.p_id
            }
            axios.post(url + "/delete/deleteCart", obj)
                .then((posRes) => {
                    console.log(posRes)
                    let indx = cart.findIndex((e, i) => {
                        return e.p_id === item.p_id
                    })
                    cart.splice(indx, 1)
                    this.setState({
                        status: 'Delete ' + posRes.statusText
                    })
                }, (errRes) => {
                    console.log(errRes)
                    this.setState({
                        status: errRes.message
                    })
                })
        }
        else {
            let obj = {
                "u_name": this.state.user,
                "p_id": item.p_id,
                "qty": parseInt(item.qty) - 1,
            }
            axios.post(url + "/update/updateCart", obj)
                .then((posRes) => {
                    cart.forEach((e, i) => {
                        if (e.p_id === obj.p_id)
                            e.qty = obj.qty
                    })
                    console.log(posRes.statusText)
                    this.setState({
                        status: 'Update ' + posRes.statusText
                    })
                }, (errRes) => {
                    console.log(errRes)
                    this.setState({
                        status: errRes.message
                    })
                })
        }
        this.setState({
            total: this.calculateTotal()
        })
    }
    buyNow = () => { // Check this functionality ????
        alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
        for (let i = 0; i < cart.length; i++) {
            axios.delete(url + "/cart/" + cart[i].id) //==================>?
                .then((posRes) => {
                    console.log(posRes)
                    let indx = cart.findIndex((e, i) => {
                        return e.id === cart[i].id
                    })
                    cart.splice(indx, 1)
                    this.setState({
                        status: 'Delete ' + posRes.statusText
                    })
                }, (errRes) => {
                    console.log(errRes)
                    this.setState({
                        status: errRes.message
                    })
                })
        }
    }
    fetchCart = () => {
        axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
            this.setState({
                status: 'Loading'
            })
            cart = posRes.data
            console.log('Cart data:- ', cart)
            this.setState({
                status: '',
            })
        }, (errRes) => {
            console.log(errRes)
        })
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].p_cost * cart[i].qty
        }
        this.setState({
            total: total
        })
    }
    calculateTotal = () => {
        let total = 0
        cart.forEach((e, i) => {
            total += e.qty * e.p_cost
        })
        return total
    }
    logout = () => {
        this.setState({
            login: false,
            user: '',
            status:"Login"
        })
        window.sessionStorage.removeItem('user')
    }
}
