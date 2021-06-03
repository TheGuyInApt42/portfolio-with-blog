import axios from 'axios';
console.log(process.env.NODE_ENV);
//const apiUrl = process.env.API_URL || 'http://localhost:1337/blogs';
const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/blogs' : 'https://strapi-somn.onrender.com/blogs';
const prodUrl = 'https://strapi-somn.onrender.com/blogs';
const categoriesUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/categories' : 'https://strapi-somn.onrender.com/categories';
export const rootUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : '';

const helpers = {
    fetchPosts: async function(){
        let posts = [];
        await axios.get(apiUrl)
            .then((response) => {
              posts.push(response.data);
              
            })
            .catch(
                error => console.log(error)
            );
        return posts;

    },

    fetchPost: async function(slug){
        let post ={};
        
        await axios.get(`${apiUrl}/?Slug=${slug}`)
            .then((response) => {
                post = response.data;
            })
            .catch(
                error => console.log(error)
            );

        return post;

    },

    fetchCategories: async function(){
        let categories = [];
        await axios.get(categoriesUrl)
            .then((response) => {
                console.log(response.data);
              categories.push(response.data);
              
            })
            .catch(
                error => console.log(error)
            );
        return categories;

    },

    fetchCategory: async function(categoryID){
        let cat ={};
        //let categories = this.fetchCategories();
        
        await axios.get(`${categoriesUrl}/${categoryID}`)
            .then((response) => {
                console.log(response.data);
                cat = response.data;
            })
            .catch(
                error => console.log(error)
            );

        return cat;

    }
}

export default helpers;