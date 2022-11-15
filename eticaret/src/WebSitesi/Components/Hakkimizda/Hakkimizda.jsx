import React, { Component } from 'react'
import './hakkimizda.css';
import eticaret from '../../../Assets/Hakkimizda/eticaret.png';
import blog from '../../../Assets/Hakkimizda/blog.png';
import web from '../../../Assets/Hakkimizda/web.png';
export class Hakkimizda extends Component {
  render() {
    return (
       <section className='about section'>
          <div className="secContainer">
             <h2 className="title">
              Why Etiyo?
             </h2>
             <div className="mainContent container grid">
                 <div className="singleItem">
                     <img src={eticaret} alt="Image Name" />
                     <h3>Ecommerce</h3>
                     <p>
                     Thanks to the Etiyo platform, you can create your e-commerce site as you wish.Thanks to the Etiyo platform, you can create your e-commerce site as you wish.
                     </p>
                 </div>
                 <div className="singleItem">
                     <img src={blog} alt="Image Name" />
                     <h3>Blog</h3>
                     <p>
                     Thanks to the Etiyo platform, you can create your e-commerce site as you wish.Thanks to the Etiyo platform, you can create your e-commerce site as you wish.
                     </p>
                 </div>
                 <div className="singleItem">
                     <img src={web} alt="Image Name" />
                     <h3>Web Sitesi</h3>
                     <p>
                     Thanks to the Etiyo platform, you can create your e-commerce site as you wish.Thanks to the Etiyo platform, you can create your e-commerce site as you wish.
                     </p>
                 </div>
             </div>
          </div>
       </section>
    )
  }
}

export default Hakkimizda
