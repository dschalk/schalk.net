'use strict'

import React from 'react';
import {render} from 'react-dom';
var Markdown = require('react-remarkable');
export {B4};

var ComponentBlank = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: '#FFD700', backgroundColor: '#0000ff' }} >
        <Markdown>
        {`

        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentPrimitive = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
      class Monad {
        constructor(z) {

          this.x = z;

          this.bnd = (func, ...args) => {
            return func(this.x, this, ...args);
          };

          this.ret = a => {
            this.x = a;
            return this;
          };
        }
      };
        `}
        </Markdown>
      </div>
    );
  }

});


class B4 extends React.Component {
  constructor(props) {
    super(props);

  class Monad {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.ret = a => {
        this.x = a;
        return this;
      };
    }
  };

    this.style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: 0,
    color: 'burlywood', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
    marginLeft: 12, fontSize: 22 };
    this.style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: 0,
    color: '#FFE4C4', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
    marginLeft: 12, fontSize: 22 };
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
    this.bool5 = false;
    this.bool6 = false;
    this.bool7 = false;
    this.bool8 = false;
    this.bool9 = false;
    this.bool10 = false;
    this.bool11 = false;
}

  cT1 = () => {
    let self = this;
    this.bool1 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF1 = () => {
    let self = this;
    this.bool1 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT2 = () => {
    let self = this;
    this.bool2 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF2 = () => {
    let self = this;
    this.bool2 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT2 = () => {
    let self = this;
    this.bool2 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF2 = () => {
    let self = this;
    this.bool2 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT3 = () => {
    let self = this;
    this.bool3 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF3 = () => {
    let self = this;
    this.bool3 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT4 = () => {
    let self = this;
    this.bool4 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF4 = () => {
    let self = this;
    this.bool4 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT5 = () => {
    let self = this;
    this.bool5 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF5 = () => {
    let self = this;
    this.bool5 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT6 = () => {
    let self = this;
    this.bool6 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF6 = () => {
    let self = this;
    this.bool6 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT7 = () => {
    let self = this;
    this.bool7 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF7 = () => {
    let self = this;
    this.bool7 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT8 = () => {
    let self = this;
    this.bool8 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF8 = () => {
    let self = this;
    this.bool8 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT9 = () => {
    let self = this;
    this.bool9 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF9 = () => {
    let self = this;
    this.bool9 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT10= () => {
    let self = this;
    this.bool10 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF10 = () => {
    let self = this;
    this.bool10 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT11 = () => {
    let self = this;
    this.bool11 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF11 = () => {
    let self = this;
    this.bool11 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

    render = () => {
    return(
      <div style={{ backgroundColor: '#000', height: '100%' , width: '70%', color: '#FFE4C4', fontSize: 22 }}>
<br /><br />
<h2 style={{textAlign: 'center'}} >Experiments with React, Websockets, and Monads</h2>


<div style={{ width: '30%', fontSize: 22, position: 'fixed', top: 200, right: 5 }} >
<br /><br />
<a href="http://schalk.net:3000">
<button style={this.bool6 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT6() }
   onMouseLeave={ () => this.cF6() }  >
   Javascript Monads Part 1
 </button>
</a>

<br /><br />
<a href="http://schalk.net:4002">
  <button style={this.bool7 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT7() }
   onMouseLeave={ () => this.cF7() }  >
   Javascript Monads Part 2 - Websockets
   </button>
</a>

<br /><br />
<a href="http://schalk.net:3093">
  <button style={this.bool8 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT8() }
   onMouseLeave={ () => this.cF8() }  >
   Javascript Monads Part 3
  </button>
</a>

<br /><br />
<a href="http://transcendent.ninja">
<button style={this.bool1 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }  >
 Javascript Monads - Depricated Monad Definition
  </button>
</a>

<br /><br />
<a href="http://schalk.net:3004">
  <button style={this.bool3 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }  >
Reactive Buttons
  </button>
</a>

<br /><br />
<a href="http://schalk.net:4000">
  <button style={this.bool4 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }  >
Todo List
  </button>
</a>

<br /><br />
<a href="http://schalk.net:3015">
  <button style={this.bool2 ? this.style1 : this.style2 }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
Game of Score
  </button>
</a>
</div>

</div>
)
}
}
render(<B4 key='B4' />, document.getElementById('divSix'));





