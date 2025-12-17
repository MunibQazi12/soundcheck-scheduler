import Card from "./card"
import CEO from "../../../assets/images/ceo.png"
import CTO from "../../../assets/images/cto.png"
import CMO from "../../../assets/images/cmo.png"
import Financial_advisor from "../../../assets/images/financial-advisor.png"
import Business_advisor from "../../../assets/images/business-advisor.png"
import Backend_Developer from "../../../assets/images/backend-developer.png"
import Frontend_Developer from "../../../assets/images/frontend-developer.png"


const TOP_RANKS = [
    { cardImage: CEO, name: 'Ben Ikwuagwu', designation: 'Co-Founder, CEO' },
    { cardImage: CTO, name: 'Steven Tran', designation: 'Co-Founder, CTO' },
    { cardImage: CMO, name: 'Ryan Harkrider', designation: 'Co-Founder, CMO' }
]

const LOW_RANKS = [
    { cardImage: Financial_advisor, name: 'Reid Akers', designation: 'Financial Advisor' },
    { cardImage: Business_advisor, name: 'Sade Hill', designation: 'Business Advisor' },
    { cardImage: Backend_Developer, name: 'Adam Littman', designation: 'Backend Developer' },
    { cardImage: Frontend_Developer, name: 'Christopher Trang', designation: 'Frontend Developer' }
]

const OurTeam = () => {
    return (
        <div className="md:pb-40 sm:pb-20 pb-16">
            <h2 className=" md:text-[45px] sm:text-3xl text-2xl leading-1.2 text-heading-text dark:text-darkheading font-bold font-manrope text-center">Meet the Team</h2>
            <div className="mt-12 grid md:grid-cols-3 grid-cols-1 justify-center gap-8">
                {
                    TOP_RANKS.map((item, index) => <Card titleClassName="lg:text-[32px] text-xl" key={index} item={item} />)
                }
            </div>
            <div className="mt-16 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-8">
                {
                    LOW_RANKS.map((item, index) => <Card titleClassName="xl:text-[26px] text-xl" key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default OurTeam