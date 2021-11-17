import React, { forwardRef } from 'react'
import '../Routes/css/videoCard.css'
import TextTruncate from 'react-text-truncate'
import { Modal } from '@material-ui/core'
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0, 0, 0, 0.87)',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll',
    
  };

const base_url = 'https://image.tmdb.org/t/p/original/'

const VideoCard = forwardRef(({movie}, ref) => {

    // console.log(movie)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
     };
     const handleClose = () => {
    setOpen(false);
      };

    return (
        <>
        <div ref={ref} onClick={handleOpen} className='videoCard'>
            <img
                src = {`${base_url}${movie.backdrop_path}`} />
                <TextTruncate
                    line={2}
                    element="p"
                    truncateText="..."
                    text={movie.overview}
                    />
                <h2> {movie.title}</h2>
                <p className='videocard_stats'> 
                {movie.media_type && `${movie.media_type} .`}
                    {movie.release_date || movie.first_air_date} </p>
                
        </div>
        <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        
      >
                    <Box sx={{ ...style, width: '100%', height: '100%' }}>
                        <div style={{width: '70%', top: '0', left:'0', height: '70%', display: 'block', margin: 'auto', color: 'white', paddingTop: '70px' }}>
                            <div style={{position: 'relative', width: '100%', height: '7%'}}>
                            <img onClick={handleClose} style={{Width: '10%', maxHeight: '100%', cursor: 'pointer', paddingBottom: '15px', position: 'absolute', right: '-60px' }} src= 'https://storage.googleapis.com/etransfer/close.png' />
                            </div>
                    <div style={{ position: 'relative'}}>
                    <img style={{maxWidth: '100%', maxHeight:'100%', position: 'relative', top: '0', left:'0', }}
                src = {`${base_url}${movie.backdrop_path}`} />
                <img style={{maxWidth: '30%', maxHeight:'30%', position: 'absolute', bottom: '0', right:'0', cursor: 'pointer' }} src = 'https://storage.googleapis.com/etransfer/play.png' />
                </div>
                    <h2 style={{padding: '30px', color: 'white'}}> {movie.title}</h2>
                    
                    <p style={{paddingRight: '30px', paddingLeft: '30px'}}>
                        {movie.overview}
                        </p>
                <br /><br />
                    </div>
          
        
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
                    </Modal>
                    </>
    )
})

export default VideoCard
