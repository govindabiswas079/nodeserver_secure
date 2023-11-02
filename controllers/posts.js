import Post from "../models/user.js";

export const CreatePost = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) return res.status(400).json(" please input values");
        const post = await Post.create({
            title,
            UserId: req.user.id,
            description,
        });

        res.status(200).json(post);
    } catch (error) {
        console.log(error);

    }
};
export const GetPostByUserId = async (req, res, next) => {
    try {
        const post = await Post.find({ UserId: req.user.id });
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
    }
}
export const GetPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
    }
}
export const DeletePostById = async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("post has been deleted");
    } catch (error) {
        console.log(error);
    }
}
export const UpdatePost = async (req, res, next) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json("post updated")
    } catch (error) {
        console.log(error);
    }
}