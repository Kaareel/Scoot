import { useState } from "react";
import { IconChevron } from "../utils/Icon";

interface Props {
    title: string
    content: string
}

export const Accordion = (props: Props) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="relative">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div onClick={() => setIsOpen(!isOpen)}
                className="w-full py-2 px-4 bg-accordionColor  rounded-md text-titleAccordionColor focus:bg-[#fff4df] focus:shadow-boxAccordion focus:border-[#86b7fe] focus:text-[#0c63e4]"
                aria-expanded={isOpen ? "true" : "false"}
            >
                <div className="flex justify-between items-center">
                    {props.title}
                    <IconChevron/>
                </div>
            </div>

            {isOpen && (
                <div>
                    <p className="p-4">{props.content}</p>
                </div>
            )}
        </div >
    );
}