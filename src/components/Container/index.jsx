

export const Container = (props)=>{
    return(
        <main className="flex flex-wrap px-4 py-3 gap-y-5 gap-x-4 justify-evenly">
            { props.children }
        </main>
    )
}