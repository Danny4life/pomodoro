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
            <header className='bg-[#F2F2F2] w-full h-32 flex'>
                <section  className="flex-1 flex justify-center items-center">
                    <h1 className="text-4xl font-semibold text-[#222222]">DORO-FOCUS</h1>
                </section>
                <section className="flex-1 flex justify-center items-center">
                     <div className="flex gap-px text-sm">
                         {/* USE ICONS AND SOUND TO TIMER */}
                        <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#968585]">Log</button>
                        <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">FAQs</button>
                        <button className="w-20 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Settings</button>
                        <button className="w-32 h-10 bg-[#333333] hover:bg-[#222222] text-[#AFAFAF]">Tweet about us!</button>
                    </div>
                </section>

            </header>
        </nav>
        <div className="flex justify-center items-center pt-6">
          <input
            className='py-2 px-2 h-10 w-96 border border-[#333333] rounded-sm'
            type="number"
            placeholder="Enter Minutes"
            onChange={this.handleMinuteChange}
          />
          <input
          className='py-2 px-2 h-10 w-96 border border-[#333333] rounded-sm'
            type="number"
            placeholder="Enter Seconds"
            onChange={this.handleSecondChange}
          />
        </div>
      
        <div className="text-center pt-20 text-8xl font-bold text-[#333333]">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>

        <div className="flex justify-center items-center pt-20 space-x-14">
          <button
            className="py-3 px-8 bg-green-500 hover:bg-green-900
              text-white border border-[#457A1A] rounded-sm font-bold" 
            onClick={this.handleStart}
            >
            Start
            </button>
          <button 
          className="py-3 px-8 bg-red-500 hover:bg-red-900
          text-white border border-[#97251E] rounded-sm font-bold"
          onClick={this.handleStop}
          >
            Stop
          </button>
          <button
             className="py-3 px-8 bg-[#D0D0D0] hover:bg-[#D0D0D0]
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
