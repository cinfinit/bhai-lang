import Snippet from "./Snippet";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">zara saral tareeke se samjhaiye</code> is
        the entrypoint for the program and all program must end with{" "}
        <code className="language-cpp">i am out</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

zara saral tareeke se samjhaiye
  // Write code here
i am out

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">hum bhi bna lenge</code>.
      </>
    ),
    code: `zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 10;
    hum bhi bna lenge b = "two";
    hum bhi bna lenge c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
i am out
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 10;
    hum bhi bna lenge b = 10 + (15*20);
    hum bhi bna lenge c = "two";
    hum bhi bna lenge d = 'ok';
    hum bhi bna lenge e = nalla;
    hum bhi bna lenge f = sahi;
    hum bhi bna lenge g = galat;
i am out
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol bol acha lag rha hai</code> to
        print anything to console.
      </>
    ),
    code: `zara saral tareeke se samjhaiye
    bol bol acha lag rha hai "Hello World";
    hum bhi bna lenge a = 10;
    {
       hum bhi bna lenge b = 20;
       bol bol acha lag rha hai a + b;
    }
    bol bol acha lag rha hai 5, 'ok', nalla , sahi , galat;
i am out
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports simple if else construct ,{" "}
        <code className="language-cpp">bhai tu kya kar rha hai</code> block will
        execute if condition is <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">haan mai de dunga tu tension mt le</code>{" "}
        block will execute if condition is{" "}
        <code className="language-cpp">galat</code>.
      </>
    ),
    code: `zara saral tareeke se samjhaiye
    hum bhi bna lenge a = 10;
    bhai tu kya kar rha hai (a < 25) {
      bol bol acha lag rha hai "a is less than 25";
    } haan mai de dunga tu tension mt le {
      bol bol acha lag rha hai "a is greater than or equal to 25";
    }
i am out
    `,
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside{" "}
        <code className="language-cpp">ye meri expertise nhi hai</code> blocks
        are executed as long as a specified condition evaluates to{" "}
        <code className="language-cpp">sahi</code>. If the condition becomes{" "}
        <code className="language-cpp">galat</code>, statement within the loop
        stops executing and control passes to the statement following the loop.
        Use <code className="language-cpp">bas kar bhai</code> to break the loop
        and <code className="language-cpp">agla dekh bhai</code> to continue
        within loop.
      </>
    ),
    code: `zara saral tareeke se samjhaiye
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
    `,
  },
];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Bhailang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
