export default {
  name: "banner",
  title: "Banner",
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
      name: "largeText",
      title: "LargeText",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
  ],
};