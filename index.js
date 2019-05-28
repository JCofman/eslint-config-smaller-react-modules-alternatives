module.exports = {
  globals: {
    MyGlobal: true,
  },

  rules: {
    "no-restricted-imports": [
      "warn",
      {
        paths: [
          {
            name: "classnames",
            message:
              "classnames has a larger bundle size then another alternative. You may could use clsx instead.",
          },
          {
            name: "react-virtualized",
            message:
              "react-virtualized has a larger bundle size then another alternative. You may could use react-window instead.",
          },
          {
            name: "styled-components",
            message:
              "styled-components has a larger bundle size then another alternative. You may could use emotion instead.",
          },
          {
            name: "react-pose",
            message:
              "react-pose has a larger bundle size then another alternative. You may could use react-spring instead.",
          },
        ],
      },
    ],
  },
};
