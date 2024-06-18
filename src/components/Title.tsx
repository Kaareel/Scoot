interface Props{
    title: string
}
 export const  TitlePrimary = (props: Props) => {
    return <h1 className="text-center text-4xl font-bold tracking-[-1.43px] text-textSecondary">{props.title}</h1>
}
export const TitleSecondary = (props: Props) => {
    return <h2 className="md:text-left text-center text-2xl md:text-[40px] font-black tracking-[-1.43px] text-textSecondary mt-2">{props.title}</h2>
}
