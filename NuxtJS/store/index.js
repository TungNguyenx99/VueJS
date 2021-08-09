import Vuex from 'vuex'
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, posts) {
                state.loadedPosts.push(posts)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-blo-3d905-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                    .then(res => {
                        const postArray = [];
                        for (const key in res.data) {
                            postArray.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postArray)
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedData: new Date()
                }
                console.log(createdPost);
                return axios
                    .post(
                        "https://nuxt-blo-3d905-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
                        createdPost
                    )
                    .then(result => { vuexContext.commit('addPost', { ...createdPost, id: result.data.name }) })
                    .catch(error => console.log(error));
            },
            editPost(vuexContext, editedPost) {
                console.log(editedPost.id);
                return axios
                    .put(
                        "https://nuxt-blo-3d905-default-rtdb.asia-southeast1.firebasedatabase.app/posts/" +
                         editedPost.id+
                        ".json",
                        editedPost
                    )
                    .then(res => {vuexContext.commit('editPost',editedPost)})
                    .catch(e => console.error(e));
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },
    })
}

export default createStore