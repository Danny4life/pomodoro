import React, { Component } from 'react';

class StopTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
    };
  }

  handleStart = () => {
    this.interval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.interval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  };

  handleStop = () => {
    clearInterval(this.interval);
  };

  handleReset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
    });
  }

  handleMinuteChange = (e) => {
    this.setState({ minutes: e.target.value });
  };

  handleSecondChange = (e) => {
    this.setState({ seconds: e.target.value });
  };

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div>
        <nav>
            <header className='bg-[#F2F2F2] w-full lg:h-32 h-72 lg:flex'>
                <section  className="lg:flex-1 flex justify-center items-center">
                    <h1 
                    className="text-4xl font-semibold text-[#222222] pt-8 lg:pb-6">
                        DORO-FOCUS
                    </h1>
                </section>
                <section className="lg:flex-1 lg:flex justify-center items-center">
                     <div className="pt-4
                     lg:flex lg:flex-row flex gap-px text-sm flex-col justify-center items-center">
                         {/* USE ICONS AND SOUND TO TIMER */}
                        <button className="lg:w-20 w-60 h-10 bg-[#333333] hover:bg-[#222222] text-[#968585]">Log</button>
                        <button className="lg:w-20 w-60 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">FAQs</button>
                        <button className="lg:w-20 w-60 h-10 bg-[#333333] hover:bg-[#222222] text-[#807e7e]">Settings</button>
                        <button className="lg:w-32 w-60 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Tweet about us!</button>
                    </div>
                </section>

            </header>
        </nav>
        <div className="flex justify-center items-center pt-6">
          <input
            className='py-2 px-2 h-10 lg:w-96 w-40 border border-[#333333] rounded-sm'
            type="number"
            placeholder="Enter Minutes"
            onChange={this.handleMinuteChange}
          />
          <input
          className='py-2 px-2 h-10 lg:w-96 w-40 border border-[#333333] rounded-sm'
            type="number"
            placeholder="Enter Seconds"
            onChange={this.handleSecondChange}
          />
        </div>
      
        <div className="text-center lg:pt-20 pt-5 text-8xl font-bold text-[#333333]">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>

        <div className="flex flex-col
        lg:flex lg:flex-row justify-center items-center lg:pt-20 pt-5 lg:space-x-14">
          <button
            className="py-3 lg:px-8 px-36 bg-green-500 hover:bg-green-900
              text-white border border-[#457A1A] rounded-sm font-bold" 
            onClick={this.handleStart}
            >
            Run
            </button>
          <button 
          className="py-3 lg:px-8 px-[8.5rem] bg-red-500 hover:bg-red-900
          text-white border border-[#97251E] rounded-sm font-bold"
          onClick={this.handleStop}
          >
            Pause
          </button>
          <button
             className="py-3 lg:px-8 px-[8.5rem] bg-[#D0D0D0] hover:bg-[#D0D0D0]
             border border-[#D0D0D0] rounded-sm font-bold" 
            onClick={this.handleReset}
          >
            Reset
         </button>
        </div>
      </div>
    );
  }
}

export default StopTimer;
