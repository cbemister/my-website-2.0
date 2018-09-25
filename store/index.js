import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedThoughts: [],
      loadedPages: [],
      token: null
    },
    mutations: {
      setThoughts(state, thoughts) {
        state.loadedThoughts = thoughts;
      },
      addThought(state, thought) {
        state.loadedThoughts.push(thought);
      },
      editThought(state, editedThought) {
        const thoughtIndex = state.loadedThoughts.findIndex(
          thought => thought.id === editedThought.id
        );
        state.loadedThoughts[thoughtIndex] = editedThought;
      },
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      setPages(state, pages) {
        state.loadedPages = pages;
      },
      addPage(state, page) {
        state.loadedPages.push(page);
      },
      editPage(state, editedPage) {
        const pageIndex = state.loadedPages.findIndex(
          page => page.id === editedPage.id
        );
        state.loadedPages[pageIndex] = editedPage;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        
        const thoughts = await context.app.$axios
            .$get("/thoughts.json")
            .then(data => {
              const thoughtsArray = [];
              for (const key in data) {
                thoughtsArray.push({ ...data[key], id: key });
              }
              vuexContext.commit("setThoughts", thoughtsArray);
            })
            .catch(e => context.error(e));

        const posts = await context.app.$axios
            .$get("/posts.json")
            .then(data => {
              const postsArray = [];
              for (const key in data) {
                postsArray.push({ ...data[key], id: key });
              }
              vuexContext.commit("setPosts", postsArray);
            })
            .catch(e => context.error(e));

        const pages = await context.app.$axios
            .$get("/pages.json")
            .then(data => {
              const pagesArray = [];
              for (const key in data) {
                pagesArray.push({ ...data[key], id: key });
              }
              vuexContext.commit("setPages", pagesArray);
            })
            .catch(e => context.error(e));

          return { thoughts, posts, pages }
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return this.$axios
          .$post(
            "https://nuxt-course-project-e6cd3.firebaseio.com/posts.json?auth=" +
              vuexContext.state.token,
            createdPost
          )
          .then(data => {
            vuexContext.commit("addPost", { ...createdPost, id: data.name });
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            "https://nuxt-course-project-e6cd3.firebaseio.com/posts/" +
              editedPost.id +
              ".json?auth=" +
              vuexContext.state.token,
            editedPost
          )
          .then(res => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addThought(vuexContext, thought) {
        const createdThought = {
          ...thought,
          updatedDate: new Date()
        };
        return this.$axios
          .$post(
            "https://nuxt-course-project-e6cd3.firebaseio.com/thoughts.json?auth=" +
              vuexContext.state.token,
            createdThought
          )
          .then(data => {
            vuexContext.commit("addThought", { ...createdThought, id: data.name });
          })
          .catch(e => console.log(e));
      },
      editThought(vuexContext, editedThought) {
        return this.$axios
          .$put(
            "https://nuxt-course-project-e6cd3.firebaseio.com/thoughts/" +
              editedThought.id +
              ".json?auth=" +
              vuexContext.state.token,
            editedThought
          )
          .then(res => {
            vuexContext.commit("editThought", editedThought);
          })
          .catch(e => console.log(e));
      },
      setThoughts(vuexContext, thoughts) {
        vuexContext.commit("setThoughts", thoughts);
      },
      addPage(vuexContext, page) {
        const createdPage = {
          ...page,
          updatedDate: new Date()
        };
        return this.$axios
          .$post(
            "https://nuxt-course-project-e6cd3.firebaseio.com/pages.json?auth=" +
              vuexContext.state.token,
            createdPage
          )
          .then(data => {
            vuexContext.commit("addPage", { ...createdPage, id: data.name });
          })
          .catch(e => console.log(e));
      },
      editPage(vuexContext, editedPage) {
        return this.$axios
          .$put(
            "https://nuxt-course-project-e6cd3.firebaseio.com/pages/" +
              editedPage.id +
              ".json?auth=" +
              vuexContext.state.token,
            editedPage
          )
          .then(res => {
            vuexContext.commit("editPage", editedPage);
          })
          .catch(e => console.log(e));
      },
      setPages(vuexContext, pages) {
        vuexContext.commit("setThoughts", pages);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      loadedThoughts(state) {
        return state.loadedThoughts;
      },
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedPages(state) {
        return state.loadedPages;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
