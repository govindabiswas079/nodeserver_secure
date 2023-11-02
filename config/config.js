import mongoose from "mongoose";

export const CONNECTDB = (url) => {
    mongoose.connect("mongodb+srv://prembiswas0703:prembiswas0703@cluster0.7nidp6s.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("database is connected");
    }).catch((err) => {
        console.log(err);
    })
};
