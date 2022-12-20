import React from 'react';
import './Featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
  return (
    <div className='feadured'>
      <div className='top'>
         <h1 className='title1'>Toplam Gelir</h1>
         <MoreVertIcon fontSize='small'/>
      </div>
      <div className='bottom'>
         <div className='featuredChart'>
           <CircularProgressbar value={70} text="70%" strokeWidth={5} />
         </div>
         <p className='titlefeatured'>Bugün Yapılan Toplam Satışlar</p>
         <p className='amount'>$420</p>
         <p className='desc'>Önceki ödemeler bulunmaktadır. Son ödemeler dahil olmayabilir.</p>
         <div className='summary'>
             <div className='item'>
                <div className='itemTitle'>Target</div>
                <div className='itemResult positive'>
                    <KeyboardArrowUpIcon fontSize='small'/>
                   <div className='resultAmount'>$12.4K</div>
                </div>
             </div>
             <div className='item'>
                <div className='itemTitle'>Geçen Hafta</div>
                <div className='itemResult positive'>
                    <KeyboardArrowUpIcon fontSize='small'/>
                   <div className='resultAmount'>$12.4K</div>
                </div>
             </div>
             <div className='item'>
                <div className='itemTitle'>Geçen Ay</div>
                <div className='itemResult negative'>
                    <KeyboardArrowDownIcon fontSize='small'/>
                   <div className='resultAmount'>$12.4K</div>
                </div>
             </div>
         </div> 
      </div>
    </div>
  )
}

export default Featured
