const Main = (props: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <main className='flex flex-col gap-clamp-128 my-clamp-128'>
            {props.children}
        </main>
    )
}

export default Main