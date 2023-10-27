export default {
  name: "about",
  title: "About",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{type: "image"}],
      options: {
        hospot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{type:"block"}],
    },
  ],
};