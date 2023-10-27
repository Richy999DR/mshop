export default {
  name: "newproduct",
  title: "Product",
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
      name: "name",
      title: "Name",
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "deails",
      title: "Details",
      type: "string",
    },
  ],
};