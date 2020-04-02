const dummy = (blogs) => {
    return 1
}


const totalLikes = (blogs) => {

    const reducer = (sum, item) => {
        return sum + item
    }

    //blogs.reduce((sum,item)=>sum+item)

    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}


const favoriteBlog = (blogs) => {

    const sortedBlogs = blogs.sort(function (a, b) { return a.likes - b.likes })

    
    return sortedBlogs[sortedBlogs.length-1]
}
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}