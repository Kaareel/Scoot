import { AboutCard, CarrersCard,  FeatureCard1 } from "../components/Cards";
import { TitlePrimary } from "../components/Title";
import { Aside, Footer, Header } from "../utils/Helpers";

function Careers() {
	return (
		<>
		<Header
		image="./images/careers-location-hero-mobile.jpg"
		title="Careers"/>
			<div className="px-8 pt-40">
				<FeatureCard1
				image="./images/join-us.jpg"
				title="Care to join our mission"
				text="We’re always looking for ambitious individuals to help us on our
					  journey. If you’re passionate about our mission to provide clean,
					  accessible transport to improve urban living we want to hear from
					  you!"
				button="Say Hello"/>
				<div className="mt-28 mb-20 px-8">
				<TitlePrimary title="Why join us?" />
				<div className="mt-28 mb-16">
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
				<div className="flex flex-col gap-5 mt-28 mb-20 py-8 md:mx-40">
					<CarrersCard
					title="General Manager"
					locate="Jakarta, Indonesia"
					button="Apply"/>
					<CarrersCard
					title="UI/UX Designer"
					locate="Yokohama, Japan"
					button="Apply"/>
					<CarrersCard
					title="Blog Content Copywriter"
					locate="New York, United States"
					button="Apply"/>
					<CarrersCard
					title="Graphic Designer"
					locate="New York, United States"
					button="Apply"/>
					<CarrersCard
					title="Fleet Supervisor"
					locate="Jakarta, Indonesia"
					button="Apply"/>
					<CarrersCard
					title="UX Analyst"
					locate="London, United Kingdom"
					button="Apply"/>
				</div>
			</div>
			<Aside/>
			<Footer/>
		</>
	);
}

export default Careers;
