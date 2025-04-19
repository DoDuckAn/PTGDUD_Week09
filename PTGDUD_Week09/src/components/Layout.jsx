import Banner from "./banner"
import Header from "./header"
import bannerImage from '../assets/banner.jpg'
const Layout=()=>{
    return(
        <div className="grid grid-rows-[1fr-7fr-20fr-3fr] w-full min-w-[1400px] p-6 border gap-6">
            <Header/>
            <Banner image={bannerImage}/>
        </div>
    )
}

export default Layout