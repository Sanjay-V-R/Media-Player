import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';


function VideoCard({ displayData, setDeleteResponse, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, youtubeURL } = displayData
    const systemTime = new Date()
    const formattedDate = systemTime.toLocaleString('en-US', { timeZoneName: 'short' });
    console.log(formattedDate);
    const videoHistory = { caption, youtubeURL, timeStamp: formattedDate }
    try {
      await saveHistoryAPI(videoHistory)
    } catch (err) {
      console.log(err);
    }
  }
  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await removeVideoAPI(videoId)
      setDeleteResponse(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const dragStarted = (e, videoId) => {
    console.log(`Dragging started with Video Id: ${videoId}`);
    e.dataTransfer.setData("videoId", videoId)
  }

  return (
    <>
      <Card draggable={true} onDragStart={e => dragStarted(e, displayData?.id)}>
        <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData?.imgURL} />
        <Card.Body>
          <Card.Title style={{ minHeight: '80px' }} className='d-flex justify-content-between align-items-center'>
            <p>{displayData?.caption}</p>
            { !insideCategory && <button onClick={() => handleRemoveVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="360" src={`${displayData?.youtubeURL}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard