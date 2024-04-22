import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import manageMedia from '../assets/manage-media.jpeg'
import videoCollection from '../assets/video-collection.jpg'
import videoHistory from '../assets/video-history.jpg'

function Landing() {
  return (
    <>
      <div className="landingSection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from YouTube and also allow them to arrange them in different categories by drag and drop. User can also manage their watch history as well.</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img className='ms-5' src={landingImg} alt="music beat" />
          </div>
        </div>
        {/* ---features--- */}
        <div className="features my-5">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '20rem', height: '400px' }}>
                <Card.Img variant="top" src={manageMedia} style={{ height: '250px' }} className='img-fluid' />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Users can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '20rem', height: '400px' }}>
                <Card.Img variant="top" src={videoCollection} style={{ height: '250px' }} className='img-fluid' />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                    Users can Categorise the videos by drag and drop feature</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '20rem', height: '400px' }}>
                <Card.Img variant="top" src={videoHistory} style={{ height: '250px' }} className='img-fluid' />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    Users can manage the watch history of all videos</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="row border rounded p-5 my-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae saepe in sint reiciendis ratione corrupti, tenetur enim molestias dignissimos consequatur a. Esse vero explicabo corrupti voluptatibus suscipit laborum dicta natus!
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Categorise Videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae saepe in sint reiciendis ratione corrupti, tenetur enim molestias dignissimos consequatur a. Esse vero explicabo corrupti voluptatibus suscipit laborum dicta natus!
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className='fs-5'>Manage History</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae saepe in sint reiciendis ratione corrupti, tenetur enim molestias dignissimos consequatur a. Esse vero explicabo corrupti voluptatibus suscipit laborum dicta natus!
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="100%" height="519" src="https://www.youtube.com/embed/tOM-nWPcR4U?list=RDGMEMPipJmhsMq3GHGrfqf4WIqAVMtOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing