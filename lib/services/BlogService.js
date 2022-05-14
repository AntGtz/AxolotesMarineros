class BlogService{
    static getBlogDataById(blog, id){
        const data = blog.filter((blog) => blog.id == id);
        return data;
    }
}
module.exports = BlogService