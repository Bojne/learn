const page = ({ title, data, head }) => `
<html>
  <head>
    <title>${title}</title>
    ${head}
  </head>
  <body>
    <h2>${data.project}</h2>
    <p>${data.description}</p>
  <body>
</html>
`;

module.exports = {
  page,
  title: "Welcome to Hydrogen",
  data: () => ({
    project: "Hydrogen",
    description: "Super fast static-site generator",
  }),
  head: ({ data }) => [
    ["meta", { name: "description", content: data.description }],
  ],
};
