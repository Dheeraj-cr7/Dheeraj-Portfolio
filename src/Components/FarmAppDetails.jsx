import ThemeBtn from './ThemeBtn'

const FarmAppDetails = () => {
    return (
        <div className="min-h-screen relative">
            <ThemeBtn />

            <div className='flex items-center flex-col 
                            dark:text-white dark:bg-gray-800/80 
                            bg-blue min-h-screen text-4xl w-full justify-center p-10'>
                <div className='flex items-center border bg-transparent text-center border-blue-500'>
                    <h1>A Smart Farm App.</h1>
                </div>
            </div>
            
        </div>  
    )
}

export default FarmAppDetails