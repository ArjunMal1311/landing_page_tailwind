import Breaker from '@/components/Breaker'
import FeaturesPage from '@/components/FeaturesPage'
import FeaturesPage2 from '@/components/FeaturesPage2'
import FeaturesPage4 from '@/components/FeaturesPage4'
import FeaturesPage5 from '@/components/FeaturesPage5'
import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import IntroductionPage from '@/components/IntroductionPage'

export default function Home() {
  return (
    <main className='bg-[#0f172a] h-fit'>
      <IntroductionPage />
      <FeaturesPage />
      <FeaturesPage2 />
      <Breaker />
      <FeaturesPage4 />
      <FeaturesPage5 />
      <GetStarted />
      <Footer />
    </main>
  )
}
