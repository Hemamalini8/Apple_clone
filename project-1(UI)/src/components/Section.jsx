import React from 'react'
import { FaApple } from "react-icons/fa";
import SectionOne from "../assets/SectionOne.jpg"; import
SectionTwo from "../assets/SectionTwo.jpg"; import
SectionThree from "../assets/SectionThree.jpg"; import
SectionFour from "../assets/SectionFour.jpg"; import
SectionFive from "../assets/SectionFive.jpg"; import
SectionSix from "../assets/SectionSix.jpg";
const Section = () => {
return (
<div className="grid grid-cols-1 md:grid-cols-2 md:px-3 gap-3">
<div className="flex justify-center items-center relative mt-3">
    <img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionOne}
alt="SectionOne" />
<div className="absolute top-20 md:top-14">
<h2 className="text-2xl flex gap-2 items-center text-center md:text4xl"><bold
className="font-bold text-2xl flex items-center text-center md:text4xl"><FaApple
/>WATCH</bold> SERIES 11</h2>
<p className="text-sm text-center md:text-lg">The ultimate watch for a healthy
life.</p>
<div className="space-x-4 space-y-2 text-center">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">Learn more</button>
<button className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite">Buy</button>
</div>
</div>
</div>
<div className="flex justify-center items-center relative">
<img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionTwo}
alt="SectionTwo" />
<div className="absolute top-2 md:top-14">
<h2 className="text-4xl font-medium text-center text-white">iPad Pro</h2>
<p className="text-lg text-center text-white">Advance AI performancce</p>
<p className="text-lg text-center text-white">and game-changing
capabilities.</p>
<div className="space-x-4 space-y-2 text-center">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">Learn more</button>
<button className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite">Buy</button>
</div>
</div>
</div>
<div className="flex justify-center items-center relative">
<img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionThree}
alt="SectionThree" />
<div className="absolute top-4 md:top-14">
<h2 className="text-3xl font-semibold gap-2 text-center md:text4xl">AirPods Pro 3</h2>
<p className="text-xl font-medium text-center md:text-2xl md:fontnormal">The
world's best in-ear</p>
<p className="text-xl font-medium text-center md:text-2xl
md:fontnormal">Active Noise Cancellation.¹</p>
<div className="space-x-4 space-y-2 text-center">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">Learn more</button>
<button className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite">Buy</button>
</div>
</div>
</div>
<div className="flex justify-center items-center relative">
<img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionFour}
alt="SectionFour" />
<div className="absolute top-2 md:top-14">
<h2 className="text-2xl font-semibold text-center text-black md:text4xl">Using
them together</h2>
<h2 className="text-2xl font-semibold text-center text-black md:text4xl">sets
them apart.</h2>
<p className="text-lg text-center text-black">Apple devices work together
so</p>
<p className="text-lg text-center text-black">seamlessly,it almost fells like
magic.</p>
<div className="space-x-4 space-y-2 text-center">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">Learn more</button>
</div>
</div>
</div>
<div className="flex justify-center items-center relative">
<img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionFive}
alt="SectionFive" />
<div className="absolute top-5 md:top-14">
<h2 className="text-3xl font-semibold gap-2 text-center md:text4xl">MacBook Air</h2>
<p className="text-xl font-normal text-center">Sky blue colour.</p>
<p className="text-xl font-normal text-center">Sky high performance with M4.</p>
<div className="space-x-4 space-y-2 text-center">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">Learn more</button>
<button className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite">Buy</button>
</div>
</div>
</div>
<div className="flex justify-center items-center relative">
<img className="w-[105vh] h-[50vh] md:h-[75vh] object-cover" src={SectionSix}
alt="SectionSix" />
<div className="absolute top-8 md:top-14">
<h2 className="text-3xl font-semibold text-center text-black flex justifycenter
items-center md:text-4xl"><FaApple />Trade In</h2>
<p className="text-lg text-center text-black md:text-xl">Upgrade and save</p>
<p className="text-lg text-center text-black md:text-xl md:font-medium">It's
that easy.</p>
<div className="text-center mt-3">
<button className="bg-blue-600 text-white px-6 py-2 rounded-full
hover:bg-blue-500 font-normal md:font-medium">Get your estimate</button>
</div>
</div>
</div>
</div>
)
}
export default Section;