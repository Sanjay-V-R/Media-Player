import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Img onClick={handleShow} height={'180px'} variant="top" src="https://i.ytimg.com/vi/L0yEMl8PXnw/maxresdefault.jpg" />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <p>Caption</p>
            <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/L0yEMl8PXnw?autoplay=1" title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard