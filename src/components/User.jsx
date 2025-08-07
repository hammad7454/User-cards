import React from 'react'

const User = () => {
  return (
    <>
    <section className='container User-sec'>
      <div className='header-div text-center'>
        <h1>Users</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id?</p>
      </div>
      <div className='cards row mt-5'>
        <div className='col-4'>
          <div class="card" style={{}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default User