
const Story = () => {
    return (
        <div className="">
            <h2 className="pt-10 md:text-[45px] sm:text-3xl text-2xl leading-1.2 text-heading-text dark:text-darkheading font-bold font-manrope text-center">Our Storys</h2>
            <div className="md:mt-11 mt-6 flex md:flex-nowrap flex-wrap gap-10 md:justify-between justify-center">
                <div className="max-w-[550px] w-full sm:text-base text-sm text-dark-gray dark:text-darkText font-light">
                    <p>{`Hey there! We're the team behind Soundcheck, and we'd love to share our journey with you.`}</p><br />
                    <p>{`Soundcheck began with countless venting sessions about the lack of decent tools and technology for freelance musicians. Many of us have spent endless nights performing at weddings and events, often finding ourselves frustrated by how musicians are treated like commodities, with our unique needs often overlooked by tech advancements.`}</p><br />
                    <p>{`With our team's blend of technical wizardry, years of experience as full-time musicians, and our collective journey through the music scene, we realized we had the perfect mix to build something truly special.`}</p>
                </div>
                <div className="max-w-[550px] w-full sm:text-base text-sm text-dark-gray dark:text-darkText font-light">
                    <p>{`We wanted a tool that wasn't just another piece of software but one that genuinely worked for musicians and tackled the real issues we face every day.`}</p><br />
                    <p>{`That's how Soundcheck was born—a platform built by musicians, for musicians. We're here to make your life easier, whether you're booking gigs, managing your schedule, or just trying to keep everything organized. We're excited to share our creation with you and can't wait to see how Soundcheck makes your musical journey smoother and more enjoyable.`}</p><br />
                    <p className="text-heading-text dark:text-darkheading italic">{`Thanks for being a part of our story!`}</p>
                </div>
            </div>
        </div>
    )
}

export default Story