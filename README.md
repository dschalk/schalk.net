#schalk.net

This is the code for [http://schalk.net](http://schalk.net), a central location for the JS-monads project. A link to the old Game of Score is also included but the code has not been optimized, the coding style and framework have been abandoned, and emulating it is definitely not recommended. It does, however, work as intended.

Here are the monad definitions:

```javascript
  var Monad = function Monad(z, g) {
    var _this = this;

    this.x = z;
    if (arguments.length === 1) {
      this.id = 'anonymous';
    } else {
      this.id = g;
    };

    this.bnd = function (func, ...args) {
       return func(_this.x, ...args);
    };

    this.ret = function (a) {
      O.[_this.id] = new Monad(a, _this.id);
      return O.[_this.id]
    };
  };               

  var Monad$ = function Monad$(z, g) {
    var _this = this;
    this.subject = subject();
    this.observer = this.subject.observer;
    this.stream = this.subject.stream;
    this.x = z;
    this.id = g;

    this.bnd = function (func, ...args) {
       return func(_this.x, ...args);
    };

    this.ret = function (a) {
      O[_this.id] = new Monad$(a,_this.id);
      _this.observer.next(a);
      console.log('Streaming from ', _this.id);
      return O[_this.id];
    };
  };

  var MonadIter = function MonadIter() {
    var _this = this;
    this.p = function (a, ... args) {};
  
    this.release = function (x, ...args) {
      return this.p(x, ...args);
    };
  
    this.bnd = function (func) {
      _this.p = func;
    };
  };

  var ret = function ret(v, id) {
    if (arguments.length === 1) {
      return (new Monad(v, 'anonymous'));
    }
    window[id] = new Monad(v, id);
    return window[id];
  }; 
```

JS-monads parts 1 through 5 are deprecated. Their monad definitions are out of date. The code is still available at [https://github.com/dschalk?tab=repositories](https://github.com/dschalk?tab=repositories).


