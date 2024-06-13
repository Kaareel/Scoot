import { IconLocate, IconRide } from "../utils/Icon";

interface PropsHome {
    title: string;
    text: string;
    image?: string;
    button?: string;
}

export const CardLocate = (props: PropsHome) => {
    return (
        <div className="flex flex-col justify-center mb-16">
            <IconLocate />
            <div className="text-center">
                <h1 className="text-textSecondary mt-4 text-xl">{props.title}</h1>
                <p className="text-textPrimary text-sm mt-8">
                    {props.text}
                </p>
            </div>
        </div>

    )
}
export const CardRide = (props: PropsHome) => {
    return (
        <div className="flex flex-col justify-center mb-16">
            <IconRide />
            <div className="text-center">
                <h1 className="text-textSecondary mt-4 text-xl">{props.title}</h1>
                <p className="text-textPrimary text-sm mt-8">
                    {props.text}
                </p>
            </div>
        </div>

    )
}
export const FeatureCard = (props: PropsHome) => {
    return (
        <div className="mb-16">
            <img
                src={props.image}
                alt="telemetry"
                className="rounded-full"
            />
            <div className="text-center">
                <h1 className="text-textSecondary mt-4 text-4xl font-blond leading-[1.1] tracking-[-1.43px]">
                    {props.title}
                </h1>
                <p className="text-textPrimary text-sm mt-8">
                    {props.text}
                </p>
                <div className="mt-12">
                    <a
                        // biome-ignore lint/a11y/useValidAnchor: <explanation>
                        href="#"
                        className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 style rounded"
                    >
                        {props.button}
                    </a>
                </div>
            </div>
        </div>

    )
}
export const BasiCard = (props: PropsHome) => {
    return (
        <div className="mb-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-textSecondary tracking-[-1.43px] leading-[1.2]">
                    {props.title}
                </h1>
                <p className="mt-6 text-sm text-textPrimary">
                    {props.text}
                </p>
                <div className="mt-12">
                    <a
                        // biome-ignore lint/a11y/useValidAnchor: <explanation>
                        href="#"
                        className="bg-customOrange border-4 hover:border-2 border-transparent text-white px-12 py-3 style rounded"
                    >
                        {props.button}
                    </a>
                </div>
            </div>
        </div>

    )
}

interface PropsAbout {
    title: string;
    text: string;
    image?: string;
    count?: string;
}

export const AboutFeatureCard = (props: PropsAbout) => {
    return (
        <div className=" mb-[120px]">
            <img
                src={props.image}
                alt="digital-era"
                className="rounded-full"
            />
            <div className="text-center my-12">
                <h1 className="text-textSecondary mt-4 text-4xl leading-[1.1] tracking-[-1.43px]">
                    {props.title}
                </h1>
                <p className="text-textPrimary text-sm mt-8">
                    {props.text}
                </p>
            </div>
        </div>
    )
}
export const AboutCard = (props: PropsAbout) => {
    return (
        <div className="text-center mb-16">
            <div className="flex flex-col justify-center items-center relative">
                <div className="flex flex-col">
                    <div className=" mb-20 -mt-10 relative">
                        <p className="flex justify-center items-center absolute left-2/4 z-[1] -bottom-12 -ml-12 bg-customOrange rounded-full w-24 h-24">
                            {props.count}
                        </p>
                        <img
                            src={props.image}
                            alt="our-tech"
                            className="rounded-full block w-full"
                        />
                    </div>
                    <h1 className="text-center text-textSecondary text-xl mt-4">
                        {props.title}
                    </h1>
                    <p className="text-center text-textPrimary text-sm mt-8">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}
interface Carrers {
    title: string;
    locate: string;
    button: string;
}

export const CarrersCard = (props: Carrers) => {
    return (
        <div className="bg-accordionColor flex flex-col justify-center items-center py-8 gap-2">
            <div>
                <h2 className="text-textSecondary text-lg">{props.title}</h2>
                <p className="text-textSecondary text-sm p-2">
                    {props.locate}
                </p>
            </div>
            <a
                // biome-ignore lint/a11y/useValidAnchor: <explanation>
                href="#"
                className="bg-customOrange text-center border-4 hover:border-2 border-transparent text-white font-bold p-3 mt-4 style rounded w-60 max-w-[90%]"
            >
                {props.button}
            </a>
        </div>
    )
}