import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
const photo = [
    { id: 1, title: "My Photo", imageName:"ChatGPT Image Mar 29, 2026, 09_18_12 PM.png" },
  ];
  const navigate = useNavigate()
  const [photo1, setPhoto1] = useState([])
  const [error, setError] = useState("")

  return (
    <div className="row mt-2 justify-content-center">
      <div className="col-md-12 card shadow p-4">
        <h1>HI, I'M Ryan</h1>
        <p>Full stack Web Developer</p>
        <p>Building modern web applications</p>

        <div>
          <button type="button" className="btn btn-dark m-2  "onClick={() => navigate("/view-work", { state: { photo } })}
          >
            View My Work
          </button>
          <button
            type="button"
            className="btn btn-dark m-2"
            onClick={() => navigate("/contact", { state: { photo } })}
          >
            Contact Me
          </button>
        </div>

{photo.length === 0 ? (
  <p>No photos yet</p>
) : (
  photo.map((singlephoto) => (
    <div key={singlephoto.id} className="mt-3  my-image">
      <img
        src={`/images/${singlephoto.imageName}`}
        alt={singlephoto.title || "Photo"}
        className="img-fluid"
      />
      <p>{singlephoto.title || "Unnamed"}</p>
    </div>
  ))
)}

        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  )
}

export default Home