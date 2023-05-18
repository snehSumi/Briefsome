
import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Simplify the art of summarizing with <br className='max-md:hidden' />
        <span className='red-to-fuchsia-gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
       Unleash the power of Briefsome, a one-of-a-kind article summarizer that
        briefs lengthy content into uniquely crafted summaries
      </h2>
    </header>
  );
};

export default Hero;