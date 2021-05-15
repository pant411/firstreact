import React, { Component } from 'react';

class App extends Component{
    constructor(){
       super();
       this.state = {cmdText: "สวัสดี React"};
       this.setTextOnButton = this.setTextOnButton.bind(this);
    }

    setTextOnButton(){
      this.setState(() => {
        return {cmdText:"ปุ่ม Button ถูกกด"}
      });
    }

    render() {
      const {cmdText} = this.state;
      return <button onClick={this.setTextOnButton}>{cmdText}</button>
    }
}

export default App;