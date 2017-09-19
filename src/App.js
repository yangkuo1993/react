import React, { Component } from 'react';
import './App.css';
import DemoOne from './component/demo1/demo1'
import Click from './component/demo2/index'
import Welcome from './component/demo3/demo3'
import Comment from './component/demo4/demo4'
import Clock from './component/demo5/demo5'
import ActionLink from './component/demo6/demo6'
import Toggle from './component/demo7/demo7'
import LoginControl from './component/demo8/demo8'
import Mailbox from './component/demo9/demo9'
import Page from './component/demo10/demo10'
import NumberList from './component/demo11/demo11'
import NameForm from './component/demo12/demo12'
import EssayForm from './component/demo13/demo13'
import FlavorForm from './component/demo14/demo14'
import Reservation from './component/demo15/demo15'
import Calculator from './component/demo16/demo16'
import WelcomeDialog from './component/demo19/demo19'
import AppOne from './component/demo20/demo20'
import SignUpDialog from './component/demo21/demo21'
import Price from './component/demo22/demo22'
import Greeting from './component/demo23/demo23'
import AutoFocusTextInput from './component/demo24/demo24'
import CustomTextInput from './component/demo25/demo25'
import GrandParent from './component/demo26/demo26'
import NameFormOne from './component/demo27/demo27'
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
class App extends Component {
    render() {
        return (
          <div>Hello world
              <DemoOne></DemoOne>
               <Click></Click>
              <Welcome name={'小明'}></Welcome>
              <Welcome name={'张三'}></Welcome>
              <Welcome name={'李四'}></Welcome>
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author} />
              <Clock></Clock>
              <ActionLink></ActionLink>
              <Toggle></Toggle>
              <LoginControl></LoginControl>
              <Mailbox unreadMessage={messages}></Mailbox>
              <Page></Page>
              <NumberList numbers={numbers}></NumberList>
              <NameForm></NameForm>
              <EssayForm></EssayForm>
              <FlavorForm></FlavorForm>
              <Reservation></Reservation>
              <Calculator></Calculator>
              <WelcomeDialog></WelcomeDialog>
              <AppOne></AppOne>
              <SignUpDialog></SignUpDialog>
              <hr/>
              <Price>
              </Price>
              <Greeting name={'0'}></Greeting>
              <AutoFocusTextInput></AutoFocusTextInput>
              <CustomTextInput></CustomTextInput>
              <GrandParent></GrandParent>
              <NameFormOne></NameFormOne>
          </div>
        );
    }
}

export default App;