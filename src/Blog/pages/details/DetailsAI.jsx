import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { aiblog } from "../../assets/data/data"

export const DetailsAI = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = aiblog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>{blogs.date}</p>
              <p>{}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}