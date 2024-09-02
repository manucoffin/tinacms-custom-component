import { Collection } from "tinacms";

export const author: Collection = {
  label: "Authors",
  name: "author",
  path: "private/content/authors",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      description: "The name of the author",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Avatar",
      name: "avatar",
      description: "Image representing the author",
      required: false,
    },
    {
      type: "string",
      label: "Bio",
      name: "bio",
      description: "A short biography of the author",
      ui: {
        component: "textarea",
      },
      required: false,
    },
  ],
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        // Slugify the title by replacing spaces with dashes and removing special characters
        const titleSlug = values?.name
          ?.toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .trim();
        return titleSlug;
      },
    },
  },
};
