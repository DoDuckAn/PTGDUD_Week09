import Banner from "./banner"
import Header from "./header"
import bannerImage from '../assets/banner.jpg'
import SummerRecipeList from "./SummerRecipeList"
import RecipeWithVideo from "./RecipeWithVideo"
import EditorPick from "./EditorPick"
const Layout=()=>{
    return(
        <div className="grid grid-rows-[1fr-7fr-5fr-5fr-6fr-3fr] w-full min-w-[1400px] p-6 border gap-6">
            <Header/>
            <Banner image={bannerImage}/>
            <SummerRecipeList/>
            <RecipeWithVideo/>
            <EditorPick/>
        </div>
    )
}

export default Layout