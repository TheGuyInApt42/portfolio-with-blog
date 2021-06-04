import axios from 'axios';


//console.log(process.env.NODE_ENV);
const blogPostsUrlSorted = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/blogs?_sort=Published:desc' : 'https://strapi-somn.onrender.com/blogs?_sort=Published:desc';
const blogPostsUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/blogs' : 'https://strapi-somn.onrender.com/blogs';
const prodUrl = 'https://strapi-somn.onrender.com/blogs?_sort=Published:desc';
const categoriesUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/categories' : 'https://strapi-somn.onrender.com/categories';
export const rootUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://strapi-somn.onrender.com';

const helpers = {
    fetchPosts: async function(){
        let posts = [];
        await axios.get(blogPostsUrlSorted)
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
        
        await axios.get(`${blogPostsUrl}/?Slug=${slug}`)
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
        
        await axios.get(`${categoriesUrl}/${categoryID}`)
            .then((response) => {
                console.log(response.data);
                cat = response.data;
            })
            .catch(
                error => console.log(error)
            );

        return cat;

    },

    fetchCategoryByName: async function(name){
        let category ={};
        

        await axios.get(`${categoriesUrl}/?name=${name}`)
            .then((response) => {
                category = response.data;
            })
            .catch(
                error => console.log(error)
            );

        return category;

    }
}

export default helpers;