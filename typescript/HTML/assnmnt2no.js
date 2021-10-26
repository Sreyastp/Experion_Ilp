"use strict";
//interfaces
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const base_Api = 'https://jsonplaceholder.typicode.com/posts';
const user_Api = 'https://jsonplaceholder.typicode.com/comments';
const fetchPosts = (url) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Fetching Posts data ..");
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
const fetchComments = (url, id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${url}/${id}`);
    const data = yield response.json();
    return data;
});
const runAsyncFunctionss = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield fetchPosts(base_Api);
        Promise.all(posts.map((comment) => __awaiter(void 0, void 0, void 0, function* () {
            const commentName = yield fetchComments(user_Api, comment.id);
            console.log(commentName);
            return commentName;
        })));
    }
    catch (error) {
        console.log(error);
    }
});
runAsyncFunctionss();
