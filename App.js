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
      <p>Already exist </p>
      {props.profileData.map(profileData=><Card {...profileData}/>)}
   </div>);
};

class Form extends React.Component{
  constructor(props){
    super(props);
   this.state={ item:[ ] , userName:''};
    this.handleSubmit=this.handleSubmit.bind(this);
  }
 handleSubmit(event){
    event.preventDefault();
   const newItem={
      userName:this.state.userName
      };
  this.setState(state=>({
      item:this.state.item.concat(newItem),
      userName:''
    }));
     }
     render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <div className="form">
          <input className="text" 
          value={this.state.userName}
          onChange={event=>this.setState({userName:event.target.value})}
                    type="text" placeHolder="Add Name" required/>
          <button>Add Name</button>
             <UserList item={this.state.item}/>
          </div>
          </form>
      );
    }
  }
  class UserList extends React.Component{
    render(){
      return(
      <ul>
          <div>
          <p> New list</p>
          {this.props.item.map(item=>(
          <li className="newlist">{<div className="img"></div>}{item.userName }</li>
          ))
          }
          </div>
      </ul>
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