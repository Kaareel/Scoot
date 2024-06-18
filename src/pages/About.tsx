import { Accordion } from "../components/Accordion";
import { AboutCard, AboutFeatureCard1, AboutFeatureCard2 } from "../components/Cards";
import { TitlePrimary, TitleSecondary } from "../components/Title";
import { Aside, Footer, Header } from "../utils/Helpers";

function About() {
	return (
		<>
			<Header
				image="./images/about-hero-mobile.jpg"
				set="./images/about-hero-mobile.jpg 1x, ./images/about-hero-desktop.jpg 2x"
				title="About" />

			<div className="px-8">
				<div className="mt-28">
					<AboutFeatureCard1
						image="./images/digital-era.jpg"
						title="Mobility for the digital era"
						text="Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips."
					/>
					<AboutFeatureCard2
						image="./images/better-living.jpg"
						title="Better living"
						text="Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters"/>
				</div>
			</div>
			<div className="mt-28 mb-20 px-8">
				<TitlePrimary title="Our values" />
				<div className="mt-28 mb-16 ">
					<div className="text-center mb-16 md:flex md:justify-center md:items-center md:gap-16">
						<AboutCard
							image="./images/our-tech.jpg"
							title="Our integrity"
							text="We’re using cutting edge technology to drive accessible urban
								  transportation forward. Our fully electric scooters are a joy
								  to ride!"
							count="01" />
						<AboutCard
							image="./images/our-integrity.jpg"
							title="Our tech"
							text="We are fully committed to deliver a great yet safe,
								  sustainable micro-mobility experience in every city we
								  serve."
							count="02" />
						<AboutCard
							image="./images/our-community.jpg"
							title="Our community"
							text="We support every community we serve. All workers are paid
								  a living wage based on their location and are Scoot
								  employees."
							count="03" />
					</div>
				</div>
			</div>
			<div className=" mt-[92px] mb-20">
				<TitlePrimary title="faqs" />
				<div className="md:flex md:justify-center md:items-start md:px-40 md:py-10 p-8">
					<div className="md:flex md:mt-2 md:flex-grow md:flex-shrink md:basis-1/4">
					<TitleSecondary title="How it works" />
					</div>
					<div className="flex flex-col mt-7 md:w-3/5">
						<Accordion
							title="How do I download the app?"
							content="To download the Scoot app, you can search “Scoot” in both the
									App and Google Play stores. An even simpler way to do it would
									be to click the relevant link at the bottom of this page and
									you’ll be re-directed to the correct page."/>
						<Accordion
							title="Can I find a nearby Scoots?"
							content="Definitely! Simply open up the app and allow us to find your
									location while using it. We'll show you all of the closest
									Scoots and some extra useful information."/>
						<Accordion
							title="Do I need a license to ride?"
							content="Yup! We provide information inside the app regarding local
									laws and the license you need to be able to ride our Scoots."/>
					</div>
				</div>
				<div className="md:flex md:justify-center md:items-start md:px-40 md:py-10 p-8">
					<div className="md:flex md:mt-2 md:flex-grow md:flex-shrink md:basis-1/4">
					<TitleSecondary title="Safe driving" />
					</div>
					<div className="flex flex-col mt-7 md:w-3/5">
						<Accordion
							title="Should I wear a helmet?"
							content="Yes, please do! All cities have different laws. But we
									strongly strongly strongly recommend always wearing a helmet
									regardless of the local laws. We like you and we want you to
									be as safe as possible while Scooting."/>
						<Accordion
							title="How about the rules & regulations?"
							content="Now is not the time to be a rule breaker. Be sure you're
									complying with all local laws and regulations. Also, just be a
									good human being. Be sure not to park your Scoot where it can
									block access to buildings or get in people's way."/>
						<Accordion
							title="What if I damage my Scoot?"
							content="Be sure to read our terms and conditions carefully. Not the
									most fun job we know but we make it as clear as possible.
									There's an option to add insurance for each trip, or you can
									sign up for annual insurance if you're a regular Scooter."/>
					</div>
				</div>
			</div>
			<Aside />
			<Footer />
		</>
	);
}

export default About;
