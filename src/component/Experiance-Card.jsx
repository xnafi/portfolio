import React from 'react'


function ExperianceCard({h1,h2,id}) {

    return (
        <div id={id} className='flex flex-col bg-slate-700 p-4 rounded-lg justify-center items-center space-y-3'>
            <div className='text-3xl'>
                <h1>
                    {h1}
                </h1>
            </div>
            <div className='lg:text-sm font-bold text-[12px]'>
                <h2>
                    {h2}
                </h2>
            </div>
        </div>
    )
}

export default ExperianceCard