const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Pokemon = require("./Pokemon");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default:500
    },
    pokemonList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pokemon",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}; 


userSchema.virtual("pokemonCount").get(function () {
  return this.pokemonList.length;
});

const User = model("User", userSchema);

module.exports = User;
