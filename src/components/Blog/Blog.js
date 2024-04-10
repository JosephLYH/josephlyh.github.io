import uniqid from 'uniqid'
import { blog } from '../../portfolio'
import BlogContainer from '../BlogContainer/BlogContainer'
import './Blog.css'

const Blog = () => {
  if (!blog.length) return null

  return (
    <section id='blog' className='section blog'>
      <h2 className='section__title'>Blog</h2>

      <div className='blog__grid'>
        {blog.map((post) => (
          <BlogContainer key={uniqid()} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blog
