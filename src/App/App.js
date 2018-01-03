import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Panel = styled.div`
  flex: 0 0 auto;
  position: relative;
  box-shadow: 5px 5px 11px -5px rgba(0,0,0,0.75);
  &:after{
    content: " ";
    position: absolute;
    height: 15px;
    width: 100%;
    background: rgb(0,45,58);
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(255,255,255, 0.2)
  }
  img {
    min-width: 450px;
  }
  @media screen and (min-width: 320px) and (max-width: 1020px) {
      img {
        min-width: 100vw;
        max-width: 100vw;
      }    
  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  flex-flow: column nowrap;
  @media screen and (min-width: 320px) and (max-width: 1020px) {
     padding-top: 20px;
     padding-bottom: 20px;  
  }
`;

const MIN = 1;
const MAX = 10;
const fnImage = (number) => `/gifs/${number}.gif`;

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
        image: ''
    };
  }
  componentDidMount(){
    this.setState((state) => ({...state, image: fnImage(Math.floor(Math.random() * (MAX - MIN)) + MIN)}));
  }
  render() {
    return (
      <AppWrapper className="App">
        <img className="logo" src="https://mr47.in/content/images/2016/03/47LOGO_WHITE.png" alt="mr47"/>
        <h1>Sorry but there is problem with your request,</h1>
        <Panel>
          <img src={this.state.image} alt="fuck you!"/>
        </Panel>
        <h2>If you are hacker you know what to do.</h2>
      </AppWrapper>
    );
  }
}

export default App;
