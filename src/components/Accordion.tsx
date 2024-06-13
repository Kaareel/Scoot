import { useState } from "react";
import { IconChevron } from "../utils/Icon";

interface Props {
    title: string
    content: string
}

export const Accordion = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-8 bg-accordionColor hover:bg-[#fff4df] mb-4"
                aria-expanded={isOpen ? "true" : "false"}
            >
                    <div className="flex justify-between items-center hover:border-[#86b7fe] hover:shadow-boxAccordion w-full">
                    <h1 className=" text-titleAccordionColor py-4 text-lg font-bold border-0 hover:text-[#0c63e4]">{props.title}</h1>
                    <div className="">
                    {isOpen ? (<IconChevron />) : (<div className=" rotate-180"><IconChevron /></div>)}
                    </div>
                    </div>
                    {isOpen && (
                        <div>
                            <p className="text-textSecondary text-sm leading-7">{props.content}</p>
                        </div>
                    )}


            </div>

        </div >
    );
}