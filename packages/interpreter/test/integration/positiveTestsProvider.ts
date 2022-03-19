export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      zara saral tareeke se samjhaiye
      i am out
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      zara saral tareeke se samjhaiye
      i am out
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      zara saral tareeke se samjhaiye
      ;
      i am out
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      zara saral tareeke se samjhaiye
      ;
      ;
      ;;
      i am out
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      zara saral tareeke se samjhaiye
      {};
      i am out
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      zara saral tareeke se samjhaiye
      {
        hum bhi bna lenge a = 4;
      }
      i am out
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a, b, c;
      i am out
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 10, b = "crap";
      i am out
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 10, b = 5;
      i am out
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 7 + 90;
      i am out
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = sahi;
      a = 4;
      i am out
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 2;
      a *= 4;
      i am out
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 2;
      (a + 4);
      i am out
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 2;
      (a + 4) * 10 + (5 - 4);
      i am out
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      zara saral tareeke se samjhaiye
      hum bhi bna lenge a = 2;
      (a * (4 + 8) + 10);
      i am out
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    zara saral tareeke se samjhaiye
    hum bhi bna lenge x = 9;
    bhai tu kya kar rha hai (x != 9) {
      x = 5;
      bol bol acha lag rha hai x;
    } haan mai de dunga tu tension mt le (x >= 9);
    i am out;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a , b;
      a = b = 60;
      bol bol acha lag rha hai a, b;
      i am out
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bhai tu kya kar rha hai (a == nalla) {
        bol bol acha lag rha hai a;
      }
      i am out
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bhai tu kya kar rha hai (a) {
        bol bol acha lag rha hai a;
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "not nalla";
      }
      i am out
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bhai tu kya kar rha hai (nalla == nalla) {
        bol bol acha lag rha hai "hai nalla";
      }
      i am out
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bhai tu kya kar rha hai (nalla == a) {
        bol bol acha lag rha hai "hai nalla";
      }
      i am out
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = nalla;
      bhai tu kya kar rha hai (nalla == a) {
        bol bol acha lag rha hai "hai nalla";
      }
      i am out
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = nalla;
      bhai tu kya kar rha hai ("nalla" == a) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "not nalla";
      }
      i am out
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = "nalla";
      bhai tu kya kar rha hai (nalla == a) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "not nalla";
      }
      i am out
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = "null";
      bhai tu kya kar rha hai (nalla == a) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "not nalla";
      }
      i am out
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b;
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi nalla";
      }
      i am out
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b = nalla;
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi nalla";
      }
      i am out
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b = "nalla";
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai nalla";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi nalla";
      }
      i am out
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      bhai tu kya kar rha hai (sahi == a) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat;
      bhai tu kya kar rha hai (galat == a) {
        bol bol acha lag rha hai "hai galat";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi galat";
      }
      i am out
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = "sahi";
      bhai tu kya kar rha hai (sahi == a) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 7;
      bhai tu kya kar rha hai (sahi == (a > 5)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 7;
      bhai tu kya kar rha hai ("sahi" == (a > 5)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      bhai tu kya kar rha hai ("sahi" == (a == sahi)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      bhai tu kya kar rha hai ((a == sahi) == (a == sahi)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bhai tu kya kar rha hai ((a == nalla) == (a == sahi)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bhai tu kya kar rha hai ((a == nalla) == (a == sahi)) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      hum bhi bna lenge b = galat;
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai sahi";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi sahi";
      }
      i am out
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat;
      hum bhi bna lenge b = galat;
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai galat";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi galat";
      }
      i am out
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = "galat";
      hum bhi bna lenge b = galat;
      bhai tu kya kar rha hai (a == b) {
        bol bol acha lag rha hai "hai galat";
      } haan mai de dunga tu tension mt le {
        bol bol acha lag rha hai "nahi galat";
      }
      i am out
    `,
    output: "nahi galat",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 2, b = 60;
      bol bol acha lag rha hai (a * (4 + 8) + 10), b;
      i am out
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 2, b = 60;

      a = b + 3;
      bol bol acha lag rha hai a, b;
      i am out
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai "hello", sahi, galat;
      i am out
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai nalla;
      i am out;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 10, nalla;
      i am out;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai "hello" + "crap";
      i am out;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 70;
      bol bol acha lag rha hai 6*5, nalla, "jamtara", a;
      i am out;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bol bol acha lag rha hai a;
      i am out;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai "undefined";
      i am out;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bol bol acha lag rha hai a;
      i am out;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = sahi;
      bol bol acha lag rha hai a;
      i am out;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = galat;
      bol bol acha lag rha hai a;
      i am out;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a;
      bol bol acha lag rha hai a = 90;
      i am out;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 9 && 10;
      i am out;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 9 || 10;
      i am out;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai galat && sahi;
      i am out;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = sahi;
    bol bol acha lag rha hai a && galat;
    i am out;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    zara saral tareeke se samjhaiye;
    hum bhi bna lenge a = sahi;
    bol bol acha lag rha hai a && sahi;
    i am out;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 9 == 10;
      i am out;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 9 != 10;
      i am out;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai 9 || 10;
      i am out;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai galat || sahi;
      i am out;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai sahi != 10;
      i am out;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      zara saral tareeke se samjhaiye;
      bol bol acha lag rha hai "sahi" == sahi;
      i am out;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 0;
      ye meri expertise nhi hai (a < 1) {
        bol bol acha lag rha hai "bhai";
        a += 1;
      }
      i am out;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      ye meri expertise nhi hai (sahi) 
        bas kar bhai;
      bol bol acha lag rha hai "end";
      i am out;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 0;
      ye meri expertise nhi hai (a < 2) {
        ye meri expertise nhi hai (sahi)
          bas kar bhai;
        bol bol acha lag rha hai "hello";
        bhai tu kya kar rha hai (sahi)
          bas kar bhai;
      }
      i am out;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 0;
      ye meri expertise nhi hai (a < 2) {
        bol bol acha lag rha hai "hello";
        bhai tu kya kar rha hai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      i am out;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    zara saral tareeke se samjhaiye
    bhai tu kya kar rha hai (sahi) {
      bol bol acha lag rha hai "bhai";
    }
    i am out;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    zara saral tareeke se samjhaiye
    bhai tu kya kar rha hai (sahi) {
      bol bol acha lag rha hai "sahi";
    } haan mai de dunga tu tension mt le {
      bol bol acha lag rha hai "galat";
    }
    i am out;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    zara saral tareeke se samjhaiye
    hum bhi bna lenge x = 9;
    bhai tu kya kar rha hai (x >= 9) {
      x = 5;
      bol bol acha lag rha hai x;
    } 
    i am out;
    `,
    output: "5",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        zara saral tareeke se samjhaiye
        bhai tu kya kar rha hai (sahi && galat) {
          bol bol acha lag rha hai "sahi";
        } haan mai de dunga tu tension mt le {
          bol bol acha lag rha hai "galat";
        }
        i am out;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai 90 % 9;
        i am out;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai 27 % 5;
        i am out;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        zara saral tareeke se samjhaiye
        bol bol acha lag rha hai 5 % 20;
        i am out;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 5;
      hum bhi bna lenge step = 0;
      ye meri expertise nhi hai (a > 0) {
        step += 1;
        bhai tu kya kar rha hai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      bol bol acha lag rha hai step;
      i am out;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 5;
      hum bhi bna lenge step = 0;
      ye meri expertise nhi hai (a > 0) {
        step += 1;
        bhai tu kya kar rha hai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        bol bol acha lag rha hai "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bol bol acha lag rha hai step;
      i am out;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      zara saral tareeke se samjhaiye;
      hum bhi bna lenge a = 10;
      hum bhi bna lenge step = 0;
      ye meri expertise nhi hai (a > 0) {
        bhai tu kya kar rha hai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        bhai tu kya kar rha hai (step == 1) agla dekh bhai
        step += 1;
      }
      bol bol acha lag rha hai step;
      i am out;
    `,
    output: "1",
  },
];
