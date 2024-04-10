import './BlogContainer.css'

const BlogContainer = ({ post }) => (
  <div className='post'>
    <p className='post__timestamp'>
      {new Date(post.timestamp).toLocaleString()}
    </p>

    <h3>{post.title}</h3>

    <p className='post__description'>{post.description}</p>

    <p className='post__content'>{post.content}</p>
  </div>
)

export default BlogContainer
