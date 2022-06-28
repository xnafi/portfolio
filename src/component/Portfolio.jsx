import React from 'react'
import work1 from "./assets/work1.png"
import work2 from "./assets/work2.png"

function Portfolio() {
  return (
    <section className='w-100 justify-center h-100 flex flex-col text-center lg:mt-40 mt-5' id='portfolio'>
      <div className='mt-10'>
        <h4 className='text-xs'>My Recent Work</h4>
        <span className='text-2xl font-bold'>Portfolio</span>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-3 justify-center items-baseline space-y-6  mt-24'>
        <div>
          <img src={work1} alt="" />
          <div className='flex flex-col space-y-2'>
            <h2>
              ToDo App
            </h2>
          </div>
          <div className=' space-x-3'>
              <a href="https://to-do-e29a2.web.app/">
                Live Web</a>

                <a href="">
                Github</a>
          </div>
        </div>

        <div>
          <img src={work2} alt="" />
          <div className='flex flex-col space-y-2'>
            <h2>
              Shopping Web
            </h2>
          </div>
          <div className=' space-x-3'>
              <a href="https://newproject-cf88d.web.app/">
                Live Web</a>

                <a href="https://github.com/xnafi/shoppingweb">
                Github</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio