import { useState } from "react";


const Home = () => {

     const [changeButton1, setChangeButton1] = useState(false);
    const [changeButton2, setChangeButton2] = useState(false);
     const [changeButton3, setChangeButton3] = useState(false);


      const handleClickOne = () => {
        setChangeButton1(!changeButton1);
    }
    const handleClickTwo = () => {
        setChangeButton2(!changeButton2);
    }
    const handleClickThree = () => {
        setChangeButton3(!changeButton3);
    }
    return ( 
        <section>
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
            <section>
                <ul className="flex justify-center items-center pt-6">   
                    <li><button
                     className={`w-60 h-10 border border-[#3784A1] text-white text-base hover:bg-[#3784A1] 
                     ${(changeButton1 === true) ? "bg-[#3784A1]" : "bg-red-500"}`}
                     onClick={handleClickOne}
                     >
                        Pomodoro
                     </button></li>
                     <li><button
                     className={`w-60 h-10 border border-[#3784A1] text-white text-base hover:bg-[#3784A1] 
                     ${(changeButton2 === true) ? "bg-[#3784A1]" : "bg-[#47A6CC]"}`}
                     onClick={handleClickTwo}
                     >
                        Short Break
                     </button></li>
                     <li><button
                     className={`w-60 h-10 border border-[#3784A1] text-white text-base hover:bg-[#3784A1] 
                     ${(changeButton3 === true) ? "bg-[#3784A1]" : "bg-[#47A6CC]"}`}
                     onClick={handleClickThree}
                     >
                        Long Break
                     </button></li> 
                </ul>
        
            </section>
            <div>
                <h1 className="text-center pt-20 text-8xl font-bold">30:00</h1>
            </div>
            <section>
                <ul className="flex justify-center items-center pt-20 space-x-14">
                    <li>
                        <button 
                        className="py-3 px-8 bg-green-500 hover:bg-green-900
                         text-white border border-[#457A1A] rounded-sm font-bold"
                        >
                            Start
                        </button>
                    </li>
                    <li>
                        <button 
                        className="py-3 px-8 bg-red-500 hover:bg-red-900
                         text-white border border-[#97251E] rounded-sm font-bold"
                        >
                            Stop
                        </button>
                    </li>
                    <li>
                        <button 
                        className="py-3 px-8 bg-[#D0D0D0] hover:bg-[#D0D0D0]
                          border border-[#D0D0D0] rounded-sm font-bold"
                        >
                            Reset
                        </button>
                    </li>
                </ul>
            </section>
        </section>
     );
}
 
export default Home;