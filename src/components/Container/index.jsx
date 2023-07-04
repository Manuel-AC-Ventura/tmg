

export const Container = (props)=>{
    return(
        <main className="grid grid-cols-2 px-4 py-3 gap-y-5 gap-x-5 justify-around">
            { props.children }
        </main>
    )
}