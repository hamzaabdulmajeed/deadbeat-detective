import FindAnyone from "@/components/layout/FindAnyone"
import SearchBox from "@/components/layout/SearchBoxs"
import DeadbeatDetectiveWorks from "@/components/layout/DeadbeatDetectiveWorks"
import WhoIsServiceFor from "@/components/layout/WhoIsServiceFor"
import TrustComparisonTable from "@/components/layout/TrustComparisonTable"
import SecuritySection from "@/components/layout/SecuritySection"
import ProfileCard from "@/components/layout/profileCard"
import Testimonials from "@/components/layout/Testimonials"
import FAQSection from "@/components/layout/FAQSection"
import StartCollectingSection from "@/components/layout/StartCollectingSection"
import Footer from "@/components/layout/Footer"


export default function Home() {
  return (
    <main className="">
      <section id="find">
        <FindAnyone />
      </section>

      <section id="search">
        <SearchBox />
      </section>

      <section id="how-it-works">
        <DeadbeatDetectiveWorks />
      </section>

      <section id="why-us">
        <WhoIsServiceFor />
      </section>

      <section id="use-cases">
        <TrustComparisonTable />
      </section>

      <section id="security">
        <SecuritySection />
      </section>

      <section id="profile">
        <ProfileCard />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faqs">
        <FAQSection />
      </section>

      <section id="start">
        <StartCollectingSection />
      </section>
    </main>
  )
}

