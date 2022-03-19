import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests,
} from "./positiveTestsProvider";

let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 4;
    {
      hum bhi bna lenge a = 90;
      bol bol acha lag rha hai a;
    }
    bol bol acha lag rha hai a;
    i am out;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 4;
    {
      a = 90;
      bol bol acha lag rha hai a;
    }
    bol bol acha lag rha hai a;
    i am out;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 4;
    {
      bol bol acha lag rha hai a;
    }
    bol bol acha lag rha hai a;
    i am out;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 0;
    ye meri expertise nhi hai (a < 2) {
      bol bol acha lag rha hai "bhai";
      a += 1;
    }
    i am out;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 0, b = 0;
    ye meri expertise nhi hai (a < 2) {
      ye meri expertise nhi hai (b < 1) {
        bol bol acha lag rha hai "bhai";
        b += 1;
      }
      a += 1;
    }
    i am out;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = 0;
    ye meri expertise nhi hai (a < 2) {
      hum bhi bna lenge b = 0;
      ye meri expertise nhi hai (b < 2) {
        bol bol acha lag rha hai "bhai";
        b += 1;
        bhai tu kya kar rha hai (b == 1)
          bas kar bhai;
      }
      a += 1;
    }
    i am out;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 0;
    ye meri expertise nhi hai (a < 10) {
      bol bol acha lag rha hai a;
      a += 1;
      bhai tu kya kar rha hai (a == 6) {
        bas kar bhai;
      }
    }
    bol bol acha lag rha hai "done";
    i am out
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 0;
    ye meri expertise nhi hai (a < 10) {
      bol bol acha lag rha hai a;
      a += 1;
      bhai tu kya kar rha hai (a == 6)
        bas kar bhai;
    }
    bol bol acha lag rha hai "done";
    i am out
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 0;
    ye meri expertise nhi hai (a < 10) {
      bol bol acha lag rha hai a;
      a += 1;
      bhai tu kya kar rha hai (a == 3) {
        bas kar bhai;
      }
      bol bol acha lag rha hai "2 baar hi chapunga";
    }
    bol bol acha lag rha hai "done";
    i am out
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    zara saral tareeke se samjhaiye
    
    ye meri expertise nhi hai (sahi) {
      bol bol acha lag rha hai "bhai";
    }
    i am out;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

// test("jest", () => {
//     interpreter.interpret(`
//     zara saral tareeke se samjhaiye
//     hum bhi bna lenge a = 0;
//     ye meri expertise nhi hai (a < 10) {
//       bol bol acha lag rha hai a;
//       a += 1;
//       bhai tu kya kar rha hai (a == 3) {
//         bas kar bhai;
//       }
//       bol bol acha lag rha hai "2 baar hi chapunga";
//     }
//     bol bol acha lag rha hai "done";
//     i am out
//     `);
// });
