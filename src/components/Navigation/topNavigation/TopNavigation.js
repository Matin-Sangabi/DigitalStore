const TopNavigation = () => {
    return ( 
        <nav className="w-full bg-white shadow-md p-4 hidden md:block">
            <div className="max-w-screen-2xl w-full mx-auto flex items-center justify-between">
                <div className="flex flex-col items-center justify-center">
                    <img src={require("./../../../assets/images/logo.png")} className="w-10 h-10 object-cover block"  alt="logo"/>
                </div>
                <ul className="flex items-center gap-x-4">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <div className="">
                    search
                </div>
            </div>
        </nav>
     );
}
 
export default TopNavigation;