function foo(arg) {
  arg();
}

function bar() {
  console.log("bar");
}

foo(bar);

function foo2(arg) {
  arg();
}

foo2(bar)();

const foo3 = function (arg) {
  return arg;
};

foo3(1);

function foo4(arg = 1) {
  console.log(arg);
}

foo4();

function foo5(arg, ...rest) {
  console.log(rest);
}

foo5(1, 2, 3, 4);

const foo6 = new Function(console.log("foo6"));

foo6();

const foo7 = () => {
  console.log("foo7");
};

foo7();
