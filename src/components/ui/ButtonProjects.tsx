export default function ButtonProjects(props: any) {
    const isDisabled = !props.isDisabled ? "hover:bg-primary/10 transition-colors hover:bg-[#181311] hover:text-white" : "bg-gray-300 text-gray-500 pointer-events-none cursor-not-allowed";
     return (
        <a
            href={props.href}
            target="blank"
            className={`mt-2 w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 border border-primary text-primary text-sm font-bold leading-normal tracking-[0.015em] ${isDisabled}`}
            rel="noreferrer"
        >
            {props.text}
        </a>
    )

}