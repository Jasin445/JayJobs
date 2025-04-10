import SearchBar from './Component/SearchBar'
import Card from './Component/Card'
import surveyImg from './assets/surveyIcon.png'
import createProfile from './assets/ createProfile.webp'
import customExp from './assets/customExp.png'
import FAQSection from './Component/FAQSection'
import { LinkButton } from './Component/utils'


export default function LandingPage() {
    return <>
        <div className="pt-[90px] w-[88%] m-auto heighter">

            <div className='w-[100%] text-center flex flex-col justify-center'>
                <h1 className="text-[80px] text-center h justify-self-center">Explore and Secure The Best Jobs For You</h1>
                <p className="text-center text-xl mt-9 mb-[20px] edited">Over 20,000 high paying jobs  available everyday</p>
                <SearchBar></SearchBar>
                </div>
            </div>

            <div className="image mt-[5%] rounded w-[95%] m-auto" />

            <div className="mt-[5%] p-4 rounded px-[2.5%] bg-stone-200 flex grider justify-between items-center">
            <p className="text-3xl text-center basis-[50%] mb-4 mo">Accelerate your Job Search</p>

            <div className='basis-[40%] text-xl leading-[40px] mb-4 edited'>
            We're dedicated to career growth, offering a job platform designed for professionals at every level.
            </div>
            </div>


        <div className="mt-[4%] grid grid-cols-3 l gap-8">
            <Card img={createProfile} 
            text={'lorekjhvbnjhvgcf vbnmbhjvgbv bnjbhvg bnmbjhvg bnjbhvg bnbhvg bn,hjkgcbv nkjhvn'} 
            header={'Create a new Profile'} 
            button={'Get Started'}/>
            <Card img={surveyImg} 
            text={'lorekjhvbnjhvgcf vbnmbhjvgbv bnjbhvg bnmbjhvg bnjbhvg bnbhvg bn,hjkgcbv nkjhvn'} 
            header={'Survey the Field of Opportunities'} 
            button={'Get Started'}/>
            <Card img={customExp} text={'lorekjhvbnjhvgcf vbnmbhjvgbv bnjbhvg bnmbjhvg bnjbhvg bnbhvg bn,hjkgcbv nkjhvn'} 
            header={'Customize your Experience'} 
            button={'Get Started'}/>
        </div>

        <LinkButton 
        link={'/'} 
        text={'Browse all Jobs'}/>
       

        <FAQSection></FAQSection>

        <div className='mt-11'>
            <h1 className="text-2xl text-center mb-9">
                Still have questions. reach out to our customer care
            </h1>
            <LinkButton 
            link={'/'} 
            text={'Contact us'}/>

        </div>

    </>
}