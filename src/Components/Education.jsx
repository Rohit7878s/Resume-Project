import React from 'react'
import eduction from './data/Education.json'

const Eduction = () => {
  return (
    <>
      <div className='container ex'>
        <h1>EDUCATION</h1>
        {eduction.map((data) => {
          return (
            <>
              <div key={data.id} className='ex-item text-center my-5'
              data-aos="zoom-in"
              data-aos-duration="1000">
                
                <div className='left'>
                  <img src="https://th.bing.com/th/id/OIP.rLaQYNiCaZn4Jb1ISWGjXQHaH0?w=176&h=185&c=7&r=0&o=5&pid=1.7" alt="logo" />
                  <div className='right'>
                    <h2>{data.Class}</h2>
                    <h4>
                      <span style={{ color: "yellowgreen" }}>
                       {data.startdate} {"to"} {data.EndDate}{" "}</span>
                       <br />
                      
                      <span style={{ color: "yellow" }}>{data.location}</span>
                    </h4>

                  </div>

                </div>

              </div>
            </>
          )
        })}

      </div>

    </>
  )
}

export default Eduction
