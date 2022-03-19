export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only zara saral tareeke se samjhaiye, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
      `,
    output: SyntaxError,
  },
  {
    name: "only i am out, should throw an exception",
    input: `
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "multiple zara saral tareeke se samjhaiye, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        zara saral tareeke se samjhaiye
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        zara saral tareeke se samjhaiye
        i am out
        i am out
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        {
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        }
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        {
          naam = 4
        }
        i am out
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai ;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai 478
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai sahi galat;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai ~!*;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a b c;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a 
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge ;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    zara saral tareeke se samjhaiye
    ye meri expertise nhi hai (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        a = 4
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        a *=- 4;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        "hello" = 4;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        5 = 890;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (a + 4;
        i am out
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        a + 4);
        i am out
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (a * (4 + 8 + 10);
        i am out
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    zara saral tareeke se samjhaiye
    hum bhi bna lenge a = b && ;
    i am out;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    zara saral tareeke se samjhaiye
    hum bhi bna lenge a = && b;
    i am out;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    zara saral tareeke se samjhaiye
    bhai tu kya kar rha hai (&&);
    i am out;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bhai tu kya kar rha hai (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        haan mai de dunga tu tension mt le {

        }
        i am out;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
       bhai tu kya kar rha hai {

       }
        i am out;
      `,
    output: SyntaxError,
  },
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
          agla dekh bhai
        i am out
      `,
    output: SyntaxError,
  },
];
