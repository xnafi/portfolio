import React from 'react'
import ExperianceCard from './Experiance-Card'
import { ExperianceCardItem } from './ExperianceCardItems';



function Experinace() {

  const [Item, setItem] = React.useState(ExperianceCardItem)
  return (
    <section id='experiance' className='w-100 justify-center h-100 flex flex-col text-center mt-20'>
      <div className='mt-10 lg:mt-10'>
        <h4 className='text-xs'>What Skills I Have</h4>
        <span className='text-2xl font-bold'>Experiance</span>
      </div>

      {/* ***************Cards***************** */}

      <div className='lg:mt-20 mt-5 flex flex-row justify-evenly gap-3'>

        <div className='inline-flex flex-col bg-[#0F172A] w-screen p-2 lg:p-3 lg:w-2/3 rounded-xl cursor-pointer'>
          <h2 className='mt-5 mb-8 font-bold'>Fronted Development</h2>

          <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mb-8'>
            {
             Item.map((current)=>{
               return <ExperianceCard 
               key={current.id} {...current}
               />
             })
           }
        

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experinace