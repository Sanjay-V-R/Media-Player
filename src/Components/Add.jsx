import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add({ setAddVideoResponse }) {

  const [invalidYoutubeURL, setInvalidURL] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgURL: "", youtubeURL: ""
  })
  const [show, setShow] = useState(false);

  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedURL = (link) => {
    // url : https://www.youtube.com/watch?v=L0yEM18PXnw&t=1s
    // emb : https://www.youtube.com/embed/L0yEM18PXnw

    // demo : https://www.youtube.com/watch?v=tOM-nWPcR4U
    // emb : https://www.youtube.com/embed/tOM-nWPcR4U

    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, youtubeURL: `https://www.youtube.com/embed/${videoId}` })
      setInvalidURL(false)
    } else {
      setVideoDetails({ ...videoDetails, youtubeURL: "" })
      setInvalidURL(true)
    }
  }

  const handleUpload = async () => {
    console.log("Inside handleUpload function");
    // const {key1,key2,...} = object-name : object destructuring
    const { caption, imgURL, youtubeURL } = videoDetails
    if (caption && imgURL && youtubeURL) {
      console.log("api call");
      try {
        const result = await addVideoAPI(videoDetails)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          setAddVideoResponse(result.data)
          setVideoDetails({ caption: "", imgURL: "", youtubeURL: "" })
          toast.success(`${result.data.caption} added to your collection`)
          handleClose()
        } else {
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warning("Please fill the form completely!!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgURL: e.target.value })} type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputURL"
              label="YouTube URL"
              className=""
            >
              <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
            </FloatingLabel>
            {
              invalidYoutubeURL && <div className='text-danger fw-bolder'>Invalid YouTube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default Add