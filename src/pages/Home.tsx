import { CardLocate, CardRide, FeatureCard } from "../components/Cards";
import { Aside, Footer, HeaderButton } from "../utils/Helpers";

function Home() {
	return (
		<>
		<HeaderButton 
		image="./images/home-hero-mobile.jpg"
		title="Scooter sharing made simple"
		description="Scoot takes the hassle out of urban mobility. Our bikes are
						placed in convenient locations in each of our cities. Use our
						app to locate the nearest bike, unlock it with a tap, and you’re
						away!"
		buttonText="Get Scootin"/>
		
			<div className="mt-28 mb-20 px-8">
				<CardLocate
					title="Locate with app"
					text="Use the app to find the nearest scooter to you. We are
					continuously placing scooters in the areas with most demand, so
					one should never be too far away."/>
				<CardRide
					title="Enjoy the ride"
					text="We show the most important info for the scooters closest to
                    you.So you know how much charge they have left and can see
                    roughly how much it will cost."/>

				<FeatureCard
					image="./images/telemetry.jpg"
					title="Easy to use riding telemetry"
					text="The Scoot app is available with riding telemetry. This means it
                    can show you your average speed, how long you've been using the
                    scooter, your traveling distance, and many more things all in an
                    easy to use app."
					button="Learn more" />
				<FeatureCard
					image="./images/near-you.jpg"
					title="Zero hassle payments"
					text="Our payment is as easy as one two three. We accept most credit
					cards and debit cards. You can also link your PayPal account
					inside the app. Need to pay later? No worries! You can defer
					payment for up to a month."
					button="Learn more" />
			</div>
			<Aside/>
			<Footer/>
		</>
	);
}

export default Home;
