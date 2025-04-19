import chefify from '../assets/chefify.png'

const Header=()=>{
    return (
        <div className='w-full flex justify-betwen items-center'>
            <div className='flex items-center justify-start gap-8 w-1/2'>
                <img src={chefify}/>
                <div className='relative w-full flex justify-start'>
                    <input type='text' className='bg-gray-300 rounded-xl p-2 ps-14 w-[70%]' placeholder="What would you cook?"/>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-end gap-10'>
                <div className='flex items-center justify-between gap-3'>
                    <a className='text-gray-400' href='#'>What to cook</a>
                    <a className='text-gray-400' href='#'>Recipes</a>
                    <a className='text-gray-400' href='#'>Ingredients</a>
                    <a className='text-gray-400' href='#'>Occasions</a>
                    <a className='text-gray-400' href='#'>About Us</a>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='bg-pink-200 text-pink-500'>Login</button>
                    <button className='bg-pink-500 text-pink-200'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Header