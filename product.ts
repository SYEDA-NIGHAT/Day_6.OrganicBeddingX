// src/sanity/schemaTypes/product.ts
import { Rule } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "documnet",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(), 
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().min(0), 
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bedding", value: "bedding" },
          { title: "Comforters", value: "comforters" },
          { title: "Pillowcases", value: "pillowcases" },
        ],
      },
    },
  ],
};
