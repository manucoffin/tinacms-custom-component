import { TopPicksGrid } from "@/app/(pages)/(site-pages)/blog/[...filename]/_components/top-picks-grid";
import { Collection } from "tinacms";

const tags = [
  // Trails and Routes
  "France",
  "Spain",
  "Portugal",
  "Belgium",
  "Netherlands",
  "Camino Francés",
  "Camino del Norte",
  "Camino Portugués",
  "Camino Primitivo",
  "Camino Inglés",
  "Via de la Plata",
  "Camino de Finisterre",
  "Camino Aragones",
  "Camino de Invierno",
  "Camino de Santiago Maps",
  "Camino de Santiago Stages",
  "Alternative Routes",

  // Blog and General Topics
  "Animals on the Camino",
  "FAQs",
  "Camino Myths",
  "Personal Experiences",
  "Photography",

  // Equipment and Preparation
  "Packing Tips",
  "Gear & Equipment",
  "Footwear",
  "Backpacks",
  "Preparation",
  "Training",
  "Credencial",
  "Budget",
  "Navigation",
  "Apps for Camino de Santiago",
  "Weather Conditions",
  "Essential Items",
  "Minimalist Packing",

  // Accommodations and Logistics
  "Accommodations",
  "Albergues",
  "Hostels",
  "Camping on the Camino",
  "Solo Travel",
  "Group Travel",
  "Travel with Pets",
  "Booking Tips",
  "Rest Days",

  // Health and Safety
  "Health & Safety",
  "Blisters",
  "Foot Care",
  "Injury Prevention",
  "Food & Nutrition",
  "Sustainable Travel",
  "Pilgrim First Aid",
  "Emergency Contacts",
  "Mental Health",

  // Culture and Community
  "Culture",
  "History",
  "Pilgrim Stories",
  "Camino Community",
  "Local Customs",
  "Pilgrim Etiquette",
  "Festivals & Events",
  "Wildlife",
  "Spirituality",
  "Religion",
  "Philosophy",
  "Mental Preparation",
  "Art on the Camino",
  "Music on the Camino",
  "Pilgrim Traditions",
];

export const blogPost: Collection = {
  label: "Blog Posts",
  name: "post",
  path: "private/content/posts",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description: "The title of the blog post",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Featured Image",
      name: "featuredImage",
      description: "Main image representing the blog post",
      required: true,
    },
    {
      type: "datetime",
      label: "Publish Date",
      name: "publishDate",
      description: "The date and time the post is published",
      required: true,
    },
    {
      type: "datetime",
      label: "Last Modified",
      name: "lastModified",
      description: "The date and time the post is modified",
      required: false,
    },
    {
      type: "reference",
      label: "Author",
      name: "author",
      description: "The author of the blog post",
      collections: ["author"],
      required: true,
    },
    {
      type: "string",
      label: "Excerpt",
      name: "excerpt",
      description: "A short summary of the blog post",
      ui: {
        component: "textarea",
      },
      required: false,
    },
    {
      type: "rich-text",
      label: "Content",
      name: "content",
      description: "The main body of the blog post",
      isBody: true,
      required: true,
      templates: [
        {
          name: "TopPicksGrid",
          label: "Top Picks Grid",
          fields: [
            {
              type: "object",
              name: "picks",
              label: "Top Picks",
              list: true,
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description" },
                { type: "string", list: true, name: "pros", label: "Pros" },
                { type: "string", list: true, name: "cons", label: "Cons" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      description: "Tags associated with the blog post",
      list: true,
      options: tags,
      required: false,
    },
    {
      type: "object",
      label: "SEO",
      name: "seo",
      description: "SEO metadata for the blog post",
      fields: [
        {
          type: "string",
          label: "Meta Title",
          name: "metaTitle",
          description: "SEO title for the post",
          required: false,
        },
        {
          type: "string",
          label: "Meta Description",
          name: "metaDescription",
          description: "SEO description for the post",
          ui: {
            component: "textarea",
          },
          required: false,
        },
      ],
    },
  ],
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        // Get the current date in YYYY-MM-DD format
        const date = new Date().toISOString().split("T")[0];
        // Slugify the title by replacing spaces with dashes and removing special characters
        const titleSlug = values?.title
          ?.toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .trim();
        return `${date}-${titleSlug}`;
      },
    },
  },
};
