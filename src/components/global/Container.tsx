type WidthType = "lg" | "md";

const Container = (props: { width: WidthType, children: JSX.Element | JSX.Element[], className?: string }) => {
    const width = props.width === "lg" ? "max-w-[1850px]" : "max-w-5xl";
    return (
        <div className={`w-full px-clamp-80 ${width} mx-auto ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default Container