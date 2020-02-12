
let sonarQubeResponse = {
  baseComponent: {
    measures: [
      {
        metric: "complexity", 
        value: "2"
      },
      {
        metric: "sqale_rating",
        value: "B"
      },
      {
        metric: "cognitive_complexity",
        value: "0"
      },
      {
        metric: "code_smells",
        value: "6"
      }
    ],
    name: "fjj_tea111-b7a664f2f8434c5584e1360a595e17e6317-yunsuan"
  },
  components: [
    {
      codeSmell: {
        issues: [
          {
            message: "Remove this unused import 'java.util.List'.",
            textRange: {
              endLine: 3,
              endOffset: 22,
              startLine: 3,
              startOffset: 0
            }
          },
          {
            message: "Remove these unused method parameters.",
            textRange: {
              endLine: 10,
              endOffset: 24,
              startLine: 10,
              startOffset: 23
            }
          },
          {
            message: "Remove this method and declare a constant for this value.",
            textRange: {
              endLine: 11,
              endOffset: 16,
              startLine: 11,
              startOffset: 15
            }
          }
        ]
      },
      content: "package main.java;\n\nimport java.util.List;\n\n/**\n * @author fjj\n * @date 2020/2/7 1:04 PM\n */\npublic class Add {\n    public int add(int a,int b) {\n        return 0;\n    }\n}\n\n",
      key: "fjj_tea111-b7a664f2f8434c5584e1360a595e17e6317-yunsuan:317-yunsuan/src/main/java/Add.java",
      measures: [
        {
          metr: "complexity",
          value: "1"
        },
        {
          metr: "sqale_rating",
          value: "B"
        },
        {
          metr: "cognitive_complexity",
          value: "0"
        },
        {
          metr: "code_smells",
          value: "3"
        }
      ],
      path: "317-yunsuan/src/main/java/Add.java"
    },
    {
      codeSmell: {
        issues: [
          {
            message: "Remove this unused import 'java.util.List'.",
            textRange: {
              endLine: 3,
              endOffset: 22,
              startLine: 3,
              startOffset: 0
            }
          },
          {
            message: "Remove these unused method parameters.",
            textRange: {
              endLine: 10,
              endOffset: 26,
              startLine: 10,
              startOffset: 25
            }
          },
          {
            message: "Remove this method and declare a constant for this value.",
            textRange: {
              endLine: 11,
              endOffset: 16,
              startLine: 11,
              startOffset: 15
            }
          }
        ]
      },
      content: "package main.java;\n\nimport java.util.List;\n\n/**\n * @author fjj\n * @date 2020/2/7 1:05 PM\n */\npublic class Minus {\n    public int minus(int a, int b) {\n        return 0;\n    }\n}\n\n", "key": "fjj_tea111-b7a664f2f8434c5584e1360a595e17e6317-yunsuan:317-yunsuan/src/main/java/Minus.java",
      measures: [
        {
          metr: "complexity",
          value: "1"
        },
        {
          metr: "sqale_rating",
          value: "B"
        },
        {
          metr: "cognitive_complexity",
          value: "0"
        },
        {
          metr: "code_smells",
          value: "3"
        }
      ],
      path: "317-yunsuan/src/main/java/Minus.java"
    }
  ]
};

export {
  sonarQubeResponse
};
