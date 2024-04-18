// // columns: [
//           { name: "Years", type: "date" },
//           { name: "Group", type: "string" },
//           { name: "Quantity", type: "number" },
//           { name: "Units", type: "number" },
//           { name: "Returns", type: "number" },
//       ]

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let exampleSchema = new Schema(
  {
    years: {
      type: Date,
    },
    group: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    units: {
      type: Number,
    },
    returns: {
      type: Number,
    },
  },
  {
    collection: "example",
  }
);
module.exports = mongoose.model("Example", exampleSchema);
