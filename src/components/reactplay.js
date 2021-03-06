import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Routes/css/reactplay.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

function Reactplay({movie}) {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEnd = () => {
    setTimeout(function() {
    setOpen(false);
    }, 6000)
  };

  const [videoHeader, setVideoHeader] = useState('visible')

  const hovervisible  = () => {
      setVideoHeader('visible')
      setTimeout(function() {
                setVideoHeader('hidden')
              }, 5000)
  }

  const hoverhidden = () => {
      setVideoHeader('hidden')
  }

  
//   useEffect(() => {
//     setTimeout(function() {
//         setVideoHeader('hidden')
//       }, 5000)
// }, [])


    return (
        <>
        <img onClick={handleOpen} style={{maxWidth: '30%', maxHeight:'30%', position: 'absolute', bottom: '0', right:'0', cursor: 'pointer' }} src = 'https://storage.googleapis.com/etransfer/play.png' />
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                >
                <Box sx={{ ...style, width: '90%', minHeight: '30%' }}>

        <div onMouseMove={hovervisible} onTouchMove={hovervisible} onMouseLeave={hoverhidden} style={{overflow:'hidden', postion: 'relative', display: 'block', height:'auto'}} className='reactplay' >
            
            
            <ReactPlayer 
            style={{zIndex: -1}}
            onContextMenu={e => e.preventDefault()}
            className='react-player'
            width='100%'
            height='100%'
            url="https://storage.googleapis.com/etransfer/sampleVideo.mp4" 
            controls={true}
            onEnded={handleEnd}
            config={{ file: { 
                attributes: {
                  controlsList: 'nodownload'
                }
              }}}
            playing={true}
            />
         <div  style={{postion: 'relative',   width: '5%', height: '5%', color: 'white', visibility: videoHeader}} >
                <img onClick={handleClose} style={{Width: '5%', maxHeight: '5%', cursor: 'pointer', position: 'absolute', right: '5px', paddingTop: '15px',  paddingRight: '50px' }} src= 'https://storage.googleapis.com/etransfer/close.png' />
                </div>
        <div onMouseEnter={hovervisible} onMouseLeave={hoverhidden} style={{postion: 'relative', left: '5px', top: '30px', width: 'auto', height: '5%', color: 'white', paddingTop: '40px', paddingLeft: '20px', visibility: videoHeader}} >
                <h2> {movie.title} </h2>
                
                </div>
               
        </div>
        
                </Box>
                </Modal>
        </>
    )
}

export default Reactplay
