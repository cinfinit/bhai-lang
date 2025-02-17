import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";

export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a = 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a += 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a -= 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a -= 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a /= 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a + b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a + 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a - 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a - b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a * 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a * b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a / 4;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          a / b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          bol bol acha lag rha hai a;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          bol bol acha lag rha hai a, b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          hum bhi bna lenge a = 8;
          bol bol acha lag rha hai a, b;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          zara saral tareeke se samjhaiye;
          hum bhi bna lenge a = b = 8;
          i am out;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye;
        hum bhi bna lenge a;
        a = 9;
        hum bhi bna lenge a = 0;
        i am out;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bol bol acha lag rha hai a + 9;
      i am out;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = nalla;
      bol bol acha lag rha hai a + 9;
      i am out;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = nalla + 80;
      i am out;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = nalla + "jam";
      i am out;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b = a + "hello";
      i am out;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b = ((a*9) * a + "hello");
      i am out;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      bol bol acha lag rha hai a + 9;
      i am out;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat;
      bol bol acha lag rha hai a + 9;
      i am out;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi + 80;
      i am out;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat + 80;
      i am out;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      hum bhi bna lenge b = a + "hello";
      i am out;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat;
      hum bhi bna lenge b = ((a*9) * a + "hello");
      i am out;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (nalla * (4 + 8 + 10));
        i am out
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (nalla * (sahi + 8 + 10));
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        zara saral tareeke se samjhaiye
        (sahi * (nalla + 8 + 10));
        i am out
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        zara saral tareeke se samjhaiye
        (nalla + sahi);
        i am out
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        (sahi * (4 + 8 + 10));
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        sahi + galat;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = sahi, b = galat;
        a + b;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        sahi * galat;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = sahi, b = galat;
        a * b;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        sahi / galat;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = sahi, b = galat;
        a / b;
        i am out
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai nalla + 5;
        i am out;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a;
        a *= 5;
        i am out;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = sahi;
        a *= 5;
        i am out;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = nalla;
        a /= 5;
        i am out;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        ye meri expertise nhi hai (sahi) {

        }
        i am out;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = 0;
        ye meri expertise nhi hai (a < 2) {
          bol bol acha lag rha hai "bhai";
        }
        i am out;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = 0;
        bhai tu kya kar rha hai (sahi)
          bas kar bhai;
        i am out;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai nalla && 90;
        i am out;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a;
        bol bol acha lag rha hai a && 90;
        i am out;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai "sahi" % 9;
      i am out;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = 0;
        ye meri expertise nhi hai (a < 2) {
          agla dekh bhai;
          a = 5;
        }
        i am out;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        zara saral tareeke se samjhaiye
        hum bhi bna lenge a = 0;
        bhai tu kya kar rha hai (sahi)
          agla dekh bhai
        i am out;
      `,
    output: RuntimeException,
  },
];
