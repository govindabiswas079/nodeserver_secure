import express from "express";
import { CreatePost, DeletePostById, UpdatePost, GetPostById, GetPostByUserId } from "../controllers/posts.js";
import { verifyToken } from "../verifyToken.js";

const PostRoute = express.Router();

PostRoute.post('/', verifyToken, CreatePost);
PostRoute.delete('/:id', verifyToken, DeletePostById);
PostRoute.put('/:id', verifyToken, UpdatePost);
PostRoute.get('/:id', GetPostById);
PostRoute.get('/userId', GetPostByUserId);


export { PostRoute };