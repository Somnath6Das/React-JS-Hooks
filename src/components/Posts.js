import React,{ useContext } from 'react'
import PostContext from '../context/PostContext'

const Posts = () => {
    const {posts} = useContext(PostContext)
  return (
    <div>
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Title</th>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Posts