export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "zara saral tareeke se samjhaiye",

  BYE_BHAI_TYPE: "i am out",

  BOL_BHAI_TYPE: "bol bol acha lag rha hai",

  BHAI_YE_HAI_TYPE: "hum bhi bna lenge",

  AGAR_BHAI: "bhai tu kya kar rha hai",

  WARNA_BHAI: "haan mai de dunga tu tension mt le",

  JAB_TAK_BHAI: "ye meri expertise nhi hai",

  BAS_KAR_BHAI: "bas kar bhai",

  AGLA_DEKH_BHAI: "agla dekh bhai",

  NALLA_TYPE: "NALLA",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR",
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  {
    regex: /^\bzara saral tareeke se samjhaiye\b/,
    tokenType: TokenTypes.HI_BHAI_TYPE,
  },
  { regex: /^\bi am out\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  {
    regex: /^\bbol bol acha lag rha hai\b/,
    tokenType: TokenTypes.BOL_BHAI_TYPE,
  },
  { regex: /^\bhum bhi bna lenge\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bbhai tu kya kar rha hai\b/, tokenType: TokenTypes.AGAR_BHAI },
  {
    regex: /^\bhaan mai de dunga tu tension mt le\b/,
    tokenType: TokenTypes.WARNA_BHAI,
  },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  {
    regex: /^\bye meri expertise nhi hai\b/,
    tokenType: TokenTypes.JAB_TAK_BHAI,
  },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^-?\d+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  { regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR },

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  { regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR },

  // logical operators: &&, ||
  { regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND },
  { regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR },

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
