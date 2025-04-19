import avatar from '../assets/avatar.png'

const Banner=({image})=>{
    return(
        <div className="w-full relative flex items-center h-full">
            <img src={image} className="w-full h-full object-contain"/>
            <div className="absolute p-5 pt-20 w-1/3 left-10 flex flex-col items-center justify-around gap-3 bg-white rounded-xl border-dashed border">
                <div className='absolute -top-6 p-2 w-2/3 bg-amber-300 rounded-xl'>
                    <p className='text-xl text-amber-700'>Recipe of the day</p>
                </div>
                <p className="text-pink-500 text-xl font-bold">Salad Caparese</p>
                <p className="text-xl">Classic itelian Salad Caparessa ripe tomato fresh mozzerella, herb, olive oil, and balsarric vinegar create a refreshing dish for lunch or appetizer</p>
                <img src={avatar} className='rounded-full w-[50px] h-[50px] object-contain mt-9'/>
                <p className='text-xl'>Salad Caprese</p>
                <button className='bg-pink-500 text-white mt-5'>
                    View now
                </button>
            </div>
        </div>
    )
}

export default Banner