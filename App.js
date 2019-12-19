import React, { Component } from 'react';
import './App.css';

const cardData=[{name:"chandu",company:"abc"},
               {name:"rani",company:"def"},
               {name:"chandrika",company:"pqr"}];

class Card extends React.Component{
  render(){
    const profileData=this.props;
    return (
      <div className="profile">
        <div className="img"></div>
        <div className="personalInfo" style={{ marginLeft:"10px"}}>
          <div className="name">{profileData.name}</div>
          <div className="company">{profileData.company}</div>
        </div>
        </div>
      );
  }
}

const CardList=(props)=>{
  return(
  <div className="card">
      {props.profileData.map(profileData=><Card {...profileData}/>)}
   </div>);
};

class Form extends React.Component{
  state={userName:''}
  handler=(event)=>{
    event.preventDefault();
    console.log(this.state.userName);
  }
  render(){
    return(
      <div className="Form">
      <form onSubmit={this.handler}>
        <div className="form">
        <input className="text" 
        value={this.state.userName}
        onChange={event=>this.setState({userName:event.target.value})}
                  type="text" placeHolder="Search Name" required/>
        <button>Add Name</button>
        </div>
        </form>
        </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
      <div className="heading">{this.props.title}</div>
        <Form/>
      <CardList profileData={cardData}/>
        </div>
      );
  };
}
export default App;