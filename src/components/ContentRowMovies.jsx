import React from 'react';
import { Cards } from './index'


export default function ContentRowMovies({usersCount, productInfo}) {
  return (
      <div className='row' style={{alignItems: "center", width: "100%"}}>
          <Cards 
            title = "Total Users"
            quantity = {usersCount}
            color = "primary"
            icon = "fa-user" />
          <Cards 
            title = "Total Products"
            quantity = {productInfo.countByCategory.Producto}
            color = "success"
            icon = "fa-award" />
          <Cards 
            title = "Total Services"
            quantity = {productInfo.countByCategory.Servicio}
            color = "warning"
            icon = "fa-film" />
      </div>
  )
}

