import mongoose from "mongoose";

export const CONNECTDB = (url) => {
    mongoose.connect("database url").then(() => {
        console.log("database is connected");
    }).catch((err) => {
        console.log(err);
    })
};
