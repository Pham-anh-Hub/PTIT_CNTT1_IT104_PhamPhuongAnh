import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts, type Post } from '../data'

export default function PostDetail() {
    const {id} = useParams()
    const [targetPost, setTargetPost] = useState<Post | undefined>(undefined)
    useEffect(()=>{
        if(id){
            const clonePost = posts.find((post) => post.id === Number(id))
            if(clonePost){
                setTargetPost(clonePost)
            }
        }
    })
  return (
    <div style={{width:"100%", padding:10}}>
        <h1>{targetPost?.title}</h1>
        <p style={{marginTop:"1rem",color:"dark-gray"}}><b>Content:</b> {targetPost?.content}</p>
    </div>
  )
}
