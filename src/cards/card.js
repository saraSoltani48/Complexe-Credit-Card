import React, { Component } from "react";
import "./cardStyle.css";
export default class Card extends Component {
  state = {
    number: "",
    myName: "",
    date: ""
  };


  changeNumber = e => {
    // let numRegEx = /[0-9]/;
    // let numRegEx = /^\d*$/;
        let numRegEx = /[^0-9 ]/gi
    if (!e.target.value.match(numRegEx) && e.target.value.length <= 19){

      this.setState({
        number: e.target.value.replace(/[ ]/g, "")
      })
    }
    // else {
    //   alert("number inncorect");
    // }
  };


  changeName=(event)=>{
    let lettre = /^[A-Za-z ]*$/g;
    if (lettre.test(event.target.value)&& event.target.value.length <= 20) {
      this.setState({
        myName: event.target.value
      });
    } else {
      alert("Name is inncorrect");
    }
  }

handlerespace =(x)=>{
  let arr=[]
  for(let i=0;i<x.length;i+=4){
arr.push(x.slice(i,i+4))
  }
  return arr.join(" ")
}


  ChangeDate=e=>{
		if(!e.target.value.match(/[^0-9/]/gi) && e.target.value.length < 6 && e.target.value.slice(0,2) < 13) {
			this.setState({
				date:e.target.value
				.replace(/[^\d]/g, "")
				.replace(/(.{2})/g, "$1/")
				.replace(/^['/'\uFEFF\xA0]+|['/'\uFEFF\xA0]+$/g, "").slice(0,5)
			})
		}
	}

  render() {
    return (
      <div className="complex-card">
        <div className="card-credit contiiner">
          <div className="row">
            <div className="col">
              <h2 className="company">Company Name</h2>
              <img
                src="https://st2.depositphotos.com/3248189/9001/v/950/depositphotos_90016566-stock-illustration-credit-card-chip.jpg(63 ko)
https://st2.depositphotos.com/3248189/9001/v/950/depositphotos_90016566-stock-illustration-credit-card-chip.jpg
"
                className="img-puce"
              />
            </div>
          </div>
          <div className="row ml-1 cred-num">
            <div className="bc-num mt-3">{this.handlerespace(this.state.number).padEnd(16,"*")}</div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div type="text" className="mt-2 ">
              {this.state.date} 
               
              </div>
              
            
            
            </div>
            <div>{this.state.myName.toUpperCase()}</div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
              className="master-card"
            />
          </div>
          <div className="end-card">
          
          </div>
        </div>

        <div className="list-input">
          <span>
            {" "}
            <input
              type="text"
              className="input"
              type="text"
              placeholder="input your card number"
              name="number"
              onChange={e => this.changeNumber(e)}
              value={this.handlerespace(this.state.number)}
            />
          </span>

          <span>
            {" "}
            <input
              type="text"
              className="input"
              type="text"
              placeholder="input year"
              name="myName"
              value={this.state.date}
              onChange={ this.ChangeDate}
            />
          </span>

          <span>
            <input
              type="text"
              className="input "
              type="text"
              placeholder="YOUR NAME HERE"
              name="date"
              value={this.state.myName}
              onChange={(e)=>{this.changeName(e)} }
            />
          </span>
        </div>
      </div>
    );
  }
}
