import uniqid from 'uniqid'
import './BlogContainer.css'

const BlogContainer = ({ post }) => (
  <div className='post'>
    <h3>{post.name}</h3>

    <p className='post__description'>{post.description}</p>
    {post.stack && (
      <ul className='post__stack'>
        {post.stack.map((item) => (
          <li key={uniqid()} className='post-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default BlogContainer
