import React from 'react';
import './Widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({type}) => {
    const amount=100;
    const diff=20;
    let data;
    switch(type){
        case "user":
            data={
                title:"Kullanıcılar",
                isMoney:false,
                link:"Tüm Kullanıcıları Gör",
                icon:<PersonOutlineIcon className='icon'
                style={{
                    color:"crimson",
                    backgroundColor:"rgba(255,0,0,0.2)"
                }}
                />
            };
         break;
        case "order":
        data={
            title:"Satış",
            isMoney:false,
            link:"Tüm Satışları Gör",
            icon:<ShoppingCartIcon className='icon'
            style={{
                color:"goldenrod",
                backgroundColor:"rgba(218,165,32,0.2)"
            }}
            />
            
        };
        break;
        case "earning":
            data={
                title:"Kazanç",
                isMoney:true,
                link:"Tüm Kazancı Gör",
                icon:<MonetizationOnIcon className='icon'
                style={{
                    color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"
                }}
                />
            };
         break;
        case "blance":
        data={
            title:"Bilanço",
            isMoney:true,
            link:"Tüm Bilançoları Gör",
            icon:<AccountBalanceWalletIcon className='icon'
            style={{
                color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)"
            }}
            />
        };
        break;
        default:
            break;
    }
  return (
    <div className='widget'>
    <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"} {amount}</span>
        <span className='link'>{data.link}</span>
    </div>
    <div className='right'>
        <div className='percentage positive'>
            <KeyboardArrowUpIcon/>
             {diff}%
        </div>
        {data.icon}
    </div>
  </div>
  )
}

export default Widget
