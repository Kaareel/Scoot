function About() {
    return (
        <>
            <header>
                <div>
                    <div className="">
                        <img src="./images/about-hero-mobile.jpg" alt="about-hero" className="absolute" />
                        <h1 className="relative text-center top-[3.2rem] px-8 text-[40px] leading-[1.2] text-white">About</h1>
                    </div>
                </div>
            </header>
            <div className="mt-28 mb-20 px-8">
                <div>
                    <img src="./images/digital-era.jpg" alt="digital-era" className="rounded-full" />
                    <div className="text-center">
                        <h1 className="text-textSecondary mt-4 text-4xl leading-[1.1] tracking-[-1.43px]">Mobility for the digital era</h1>
                        <p className="text-textPrimary text-sm mt-8">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                    </div>
                </div>
                <div>
                    <img src="./images/better-living.jpg" alt="better-living" className="rounded-full" />
                    <div className="text-center">
                        <h1 className="text-textSecondary mt-4 text-4xl leading-[1.1] tracking-[-1.43px]">Better urban living</h1>
                        <p className="text-textPrimary text-sm mt-8">We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                    </div>
                </div>
            </div>
            <div className="mt-28 mb-20 px-8">
                <h1 className="text-center text-4xl font-bold tracking-[-1.43px] text-textSecondary">Our values</h1>
                <div className="mt-28">
                    <div className="text-center mb-16">
                        <div className="flex flex-col justify-center items-center relative">
                            <div className="flex flex-col">
                                <div className=" mb-20 -mt-10 relative">
                                    <p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">01</p>
                                    <img src="./images/our-tech.jpg" alt="our-tech" className="rounded-full block w-full" />
                                </div>
                                <h1 className="text-center text-textSecondary text-xl mt-4">Our tech</h1>
                                <p className="text-center text-textPrimary text-sm mt-8">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                            </div>
                        </div>
                        <div className="mt-28">
                            <div className="text-center mb-16">
                                <div className="flex flex-col justify-center items-center relative">
                                    <div className="flex flex-col">
                                        <div className=" mb-20 -mt-10 relative">
                                            <p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">02</p>
                                            <img src="./images/our-integrity.jpg" alt="our-integrity" className="rounded-full block w-full" />
                                        </div>
                                        <h1 className="text-center text-textSecondary text-xl mt-4">Our integrity</h1>
                                        <p className="text-center text-textPrimary text-sm mt-8"> We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-28">
                            <div className="text-center mb-16">
                                <div className="flex flex-col justify-center items-center relative">
                                    <div className="flex flex-col">
                                        <div className=" mb-20 -mt-10 relative">
                                            <p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">03</p>
                                            <img src="./images/our-community.jpg" alt="our-community" className="rounded-full block w-full" />
                                        </div>
                                        <h1 className="text-center text-textSecondary text-xl mt-4">Our community</h1>
                                        <p className="text-center text-textPrimary text-sm mt-8"> We support every community we serve. All workers are paid a  living wage based on their location and are Scoot employees.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-[92px] mb-20">
                <h1 className="text-center text-4xl font-bold tracking-[-1.43px] text-textSecondary">faqs</h1>
                <div className="Accordion p-8 m-auto">
                    <h2 className="text-center text-2xl font-black tracking-[-1.43px] text-textSecondary mt-2">How it works</h2>
                    <div className="componente-acordion mt-7">
                        <div className="accordion-1 mb-4">
                            <div className="bg-accordionColor rounded-t-s border pt-4 px-8 pb-8">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">How do I download the app?</button>
                            <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                            </div>
                        </div>
                        <div className="accordion-2 bg-accordionColor rounded-t-s border pt-4 px-8 pb-8 mb-4">
                            <div className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:shadow-boxAccordion focus:border-[#86b7fe] focus:text-[#0c63e4]">Can I find a nearby Scoots?</button>
                            <p>Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.</p>
                            </div>
                        </div>
                        <div className="accordion-3 bg-accordionColor rounded-t-s border pt-4 px-8 pb-8 mb-4">
                            <div className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">Do I need a license to ride?</button>
                            <p>Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" mt-[92px] mb-20">
                <h1 className="text-center text-4xl font-bold tracking-[-1.43px] text-textSecondary">Safe driving</h1>
                <div className="Accordion p-8 m-auto">
                    <div className="componente-acordion mt-7">
                        <div className="accordion-1 mb-4">
                            <div className="bg-accordionColor rounded-t-s border pt-4 px-8 pb-8">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">Should I wear a helmet?</button>
                            <p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</p>
                            </div>
                        </div>
                        <div className="accordion-2 bg-accordionColor rounded-t-s border pt-4 px-8 pb-8 mb-4">
                            <div className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:shadow-boxAccordion focus:border-[#86b7fe] focus:text-[#0c63e4]">How about the rules & regulations?</button>
                            <p>Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.</p>
                            </div>
                        </div>
                        <div className="accordion-3 bg-accordionColor rounded-t-s border pt-4 px-8 pb-8 mb-4">
                            <div className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">
                            <button type="button" className="text-titleAccordionColor focus:bg-[#fff4df] focus:border-[#86b7fe] focus:text-[#0c63e4]">What if I damage my Scoot?</button>
                            <p>Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside>
                <div className="aside">
                    <div>
                        <h1 className="text-center text-4xl pb-12 font-bold text-white leading-[1.1] tracking-[-1.43px]">Sign up and Scoot off today</h1>
                        <ul className="flex gap-4">
                            <li>
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href="#"><img src="./images/google-play.svg" alt="google-play" /></a>
                            </li>
                            <li>
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href="#"><img src="./images/app-store.svg" alt="app-store" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            <footer>
                <div className="bg-colorThird p-14">
                    <ul className="flex flex-col items-center gap-6">
                        <li>
                            <img src="./logo.svg" alt="logo" />
                        </li>
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#" className="block style-nav text-white rounded mb-4">About</a>
                        </li>
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#" className="block style-nav text-white rounded mb-4">Location</a>
                        </li>
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#" className="block style-nav text-white rounded mb-4">Careers</a>
                        </li>
                    </ul>
                    <ul className="flex justify-evenly mt-6">
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#"><img src="./icon/facebook.svg" alt="Facebook" /></a></li>
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#"><img src="./icon/twitter.svg" alt="twitter" /></a></li>
                        <li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href="#"><img src="./icon/instagram.svg" alt="instagram" /></a></li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default About