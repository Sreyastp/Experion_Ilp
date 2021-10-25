//interfaces
interface Comments
{
    postID : number
    id : number
    name : string
    email : string
    body : string
}

interface Posts
{
    UserID : number
    id : number
    title : string
    body : string
}


const base_Api = 'https://jsonplaceholder.typicode.com/posts'
const user_Api = 'https://jsonplaceholder.typicode.com/comments'

const fetchPosts = 
    async(url : string) : Promise<Posts[]> => 
    {
        console.log("Fetching Posts data ..")
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

const fetchComment = 
    async(url : string, id : number) : Promise<Record< string, string >> => 
        {
            
            const response = await fetch(`${url}/${id}`)
            const data  = await response.json()
            
            return data
        }


const runAsyncFunctions_ = 
async() => 
{
    try
    {
        const posts = await fetchPosts(base_Api)
        Promise.all
        (   
            posts.map
            ( 
                async comment => 
                {
                    const commentName = await fetchComment(user_Api,comment.id)
                    console.log(commentName);
                    return commentName                    
                }
            )  
        )

    }
    catch(error)
    {
        console.log(error)
    }
}

runAsyncFunctions_()