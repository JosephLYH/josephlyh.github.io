import uniqid from 'uniqid'
import './BlogContainer.css'

const BlogContainer = ({ post }) => (
  <div className='post'>
    <p className='post__timestamp'>
      {new Date(post.timestamp).toLocaleString()}
    </p>

    <h3>{post.title}</h3>

    <p className='post__description'>{post.description}</p>

    {post.content.map((paragraph) => (
      <p key={uniqid()} className='post__content'>
        {paragraph}
      </p>
    ))}
  </div>
)

export default BlogContainer
