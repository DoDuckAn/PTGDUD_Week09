import chefifywhite from '../assets/chefifywhite.png'

const Footer=()=>{
    return(
        <div className="flex p-6 bg-gray-950 text-white justify-start text-start rounded-md gap-5">
            <div className='flex flex-col flex-[2] justify-between'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold'>About Us</h2>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    <div className='flex gap-3'>
                        <input type='text' placeholder='Enter your email' className='p-4 bg-white border-0 rounded-md text-gray-700 flex-[6]'/>
                        <button className='flex-[1] rounded-md p-4' style={{backgroundColor:'#F44B87FF'}}>Send</button>
                    </div>
                </div>
                <div className='flex flex-row gap-6 items-center'>
                    <img src={chefifywhite}/>
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
            <div className='flex-[1] flex flex-col items-end'>
                <div className='flex flex-col justify-between items-start flex-[1]'>
                    <div className='flex flex-col gap-4 items-start'>
                        <h2 className='font-bold'>Learn More</h2>
                        <p>Our Cooks</p>
                        <p>Seen Our Features</p>
                        <p>FAQ</p>
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <h2 className='font-bold'>Shop</h2>
                        <p>Gift Subsciption</p>
                        <p>Send us Feedback</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-[1] items-end'>
                <div className='flex flex-col items-start gap-4'>
                    <h2 className='font-bold'>Recipes</h2>
                    <p>What to Cook This Week</p>
                    <p>Pasta</p>
                    <p>Dinner</p>
                    <p>Dinner</p>
                    <p>Healthy</p>
                    <p>Vegetarian</p>
                    <p>Vegan</p>
                    <p>Christmas</p>
                </div>
            </div>
        </div>
    )
}

export default Footer