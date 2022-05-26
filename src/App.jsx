import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
import img1 from './img1.png'
import img2 from './img2.jpg'

function App() {
  const [file, setFile] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    const getImage = () => {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height
        })
      }

    }
    file && getImage()
  }, [file])

  console.log(image)
  return (
    <div>
      <Navbar />
      {image ? (<NewPost image={image} />) : (
        <div className="newPostCard">
          <div className="addPost">
            <img
              src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                placeholder="Click the icon and upload"
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src={img1}
                  alt=""
                />
                <img
                  className="addImg"
                  src={img2}
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                  alt=""
                />
                <button>Send</button>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
