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

module.exports = {
    dummy,
    totalLikes
}