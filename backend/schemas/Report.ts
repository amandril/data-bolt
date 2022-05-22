import { text, relationship, timestamp } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Report = list({
  fields: {
    climb: relationship({
      ref: "Climb.reports",
      ui: {
        displayMode: "select",
      },
    }),
    bolt: relationship({
      ref: "Bolt.reports",
      ui: {
        displayMode: "select",
      },
    }),
    image: relationship({
      ref: "ReportImage.report",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: {
          fields: ["iamge", "altText"],
        },
        inlineEdit: {
          fields: ["image", "altText"],
        },
      },
    }),
    user: relationship({
      ref: "User.reports",
      ui: {
        displayMode: "select",
      },
    }),
    description: text(),
    // TODO: Add Photos/images
    timestamp: timestamp(),
  },
  ui: {
    listView: {
      initialColumns: ["climb", "bolt", "description"],
    },
  },
});
