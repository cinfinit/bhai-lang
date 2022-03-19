<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for bhai-lang.<br><br>
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bhai</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
zara saral tareeke se samjhaiye
  bol bol acha lag rha hai "Hello bhai";
i am out

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>zara saral tareeke se samjhaiye</code> is the entrypoint for the program and all program must end with <code>i am out</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

zara saral tareeke se samjhaiye
// Write code here
i am out

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>hum bhi bna lenge</code>.</p>

```

zara saral tareeke se samjhaiye
  hum bhi bna lenge a = 10;
  hum bhi bna lenge b = "two";
  hum bhi bna lenge c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
i am out
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

zara saral tareeke se samjhaiye
  hum bhi bna lenge a = 10;
  hum bhi bna lenge b = 10 + (15*20);
  hum bhi bna lenge c = "two";
  hum bhi bna lenge d = 'ok';
  hum bhi bna lenge e = nalla;
  hum bhi bna lenge f = sahi;
  hum bhi bna lenge g = galat;
i am out
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol bol acha lag rha hai</code> to print anything to console.</p>

```

zara saral tareeke se samjhaiye
  bol bol acha lag rha hai "Hello World";
  hum bhi bna lenge a = 10;
  {
    hum bhi bna lenge b = 20;
    bol bol acha lag rha hai a + b;
  }
  bol bol acha lag rha hai 5, 'ok', nalla , sahi , galat;
i am out
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>bhai tu kya kar rha hai</code> block will execute if condition is <code>sahi</code> and <code>haan mai de dunga tu tension mt le</code> block will execute if condition is <code>galat</code>.</p>

```

zara saral tareeke se samjhaiye
  hum bhi bna lenge a = 10;
  bhai tu kya kar rha hai (a < 25) {
   bol bol acha lag rha hai "a is less than 25";
  } haan mai de dunga tu tension mt le {
   bol bol acha lag rha hai "a is greater than or equal to 25";
  }
i am out
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>ye meri expertise nhi hai</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

zara saral tareeke se samjhaiye
  hum bhi bna lenge a = 0;
  ye meri expertise nhi hai (a < 10) {
   a += 1;
   bhai tu kya kar rha hai (a == 5) {
    bol bol acha lag rha hai "andar se bol bol acha lag rha hai ", a;
    agla dekh bhai;
   }
   bhai tu kya kar rha hai (a == 6) {
    bas kar bhai;
   }
   bol bol acha lag rha hai a;
  }
  bol bol acha lag rha hai "done";
i am out
```











