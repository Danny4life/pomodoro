const Home = () => {
    return ( 
        <div>
            <nav>
                <header className="bg-[#F2F2F2] w-full h-32 flex">
                    <section className="flex-1 flex justify-center items-center">
                        <h1 className="text-4xl font-semibold text-[#222222]">Tomoto Timer</h1>
                    </section>
                    <section className="flex-1 flex justify-center items-center">
                        <div className="flex gap-px text-sm">
                            <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Log</button>
                            <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">FAQs</button>
                            <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Settings</button>
                            <button className="w-32 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Tweet about us!</button>
                        </div>
                    </section>
                </header>
            </nav>
        </div>
     );
}
 
export default Home;