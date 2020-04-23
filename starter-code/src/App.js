import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';





class App extends Component {

  state =({
    name: "",
    calories:'',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRldIB0rIM7hIuoVIMEgROpr70HaL3vd36vAf7y4_ctc_SAp9Aw&usqp=CAU",
    quantity: 0,
    foods: foods,
    formstate: false
  });

  signUp = (e) => {
    e.preventDefault() 
    let allfoods = [...this.state.foods]
    let newfood = {
      name:this.state.name,
      calories:this.state.calories,
      image:this.state.image,
      quantity:this.state.quantity,
    }
    allfoods.push(newfood)
    this.setState({
      foods:allfoods,
      formstate: false
    })
}

  displayFood = () => {
    return this.state.foods.map((fooditem,index) => {
      return (
        // why you need unique keys for React lists resource 1 - https://reactjs.org/docs/lists-and-keys.html#keys
        // why you need unique keys for React lists resource 2 - https://medium.com/@adhithiravi/why-do-i-need-keys-in-react-lists-dbb522188bbb
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={fooditem.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{fooditem.name}</strong> <br />
                <small>{fooditem.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div >
                <input
                  className="input"
                  type="number" 
                  value={fooditem.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )
    })
  }

  onChangeHandler = (e) => this.setState({
    [e.target.name]: e.target.value
  })
//   orderfood = () =>{
//     this.state.filter(obj => { 
// return (this.state.name includes obj)
//     })
//   }

  formstate = () => {
    this.setState({
      formstate: true
    })
    }

addForms = () =>{
  if(this.state.formstate){
  return(
<form onSubmit = {this.signUp}>
  <input onChange={this.onChangeHandler} name="name" type='text' value={this.state.name} required placeholder="Enter Food Name"/>
  {/* <input onChange={this.onChangeHandler} name="image" type='link' value={this.state.image} required placeholder="Enter Food Image "/> */}
  <input onChange={this.onChangeHandler} name="calories" type='text' value={this.state.calories} required placeholder="Enter Food Calories"/>
  <input onChange={this.onChangeHandler} name="quantity" type='text' value={this.state.quantity} required placeholder="Enter Food quantity"/>
  <button >Submit</button>
</form>
  )}
else{
  return (
  <button onClick={this.formstate}> Submit </button>
  )}
  }
  addsearch = () =>{
    return(
      <div>
        <form>
        <input onChange={this.orderfood} placeholder="Search"/>
        </form>
      </div>
    )
  }



  render() {
    console.log(this.state.foods)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.addForms()} 
          {this.addsearch()} 
          {this.displayFood()}
          <h1>My Foods</h1>
        </div>
      </div>
    );
  }
}

export default App;
