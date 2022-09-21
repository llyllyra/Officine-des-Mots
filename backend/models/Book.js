const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		categories: {
			type: Array,
			default: false,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
