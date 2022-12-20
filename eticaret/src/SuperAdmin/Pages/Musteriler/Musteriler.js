import React, { Component } from 'react'
import './Musteriler.css';
export class Musteriler extends Component {
  render() {
    return (
      <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
            <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Müşteriler</h2>
            </div>
           
          </div>
        </div>



              <div className='row'>
                
              <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Firma Adı</th>
						<th>Firma Adres</th>
						<th>Firma Telefon</th>
						<th>Firma Mail</th>
						<th>Ödeme Durumu</th>
            <th>Web Sitesi Kaldır</th>
            <th>Web Sitesi Git</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Flo</td>
						<td>İzmir Konak Piri Reis mah.</td>
						<td>0555 555 55 55</td>
						<td>info@flo.com</td>
						<td>Ödendi</td>
            <td><button className='btn'>Kaldır</button></td>
            <td><button className='btn'>Git</button></td>
					</tr>
          <tr>
						<td>Flo</td>
						<td>İzmir Konak Piri Reis mah.</td>
						<td>0555 555 55 55</td>
						<td>info@flo.com</td>
						<td>Ödendi</td>
            <td><button className='btn'>Kaldır</button></td>
            <td><button className='btn'>Git</button></td>
					</tr>
				
				
				
				
				</tbody>
			</table>
             
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Musteriler