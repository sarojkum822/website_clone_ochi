import React from "react";

const data = [
  { name: "Planetly", contact: "Nina Walloch", Read: "Read" },
  { name: "Workiz Easy", contact: "Tomer Levy", Read: "Read" },
  { name: "Premium Blend", contact: "Ellen Kim", Read: "Read" },
  { name: "Hypercare Systems", contact: "Brendan Goss", Read: "Read" },
  { name: "Officevibe", contact: "Raff Labrie", Read: "Read" },
  { name: "Orderlion", contact: "Stefan Strohmer", Read: "Read" },
  { name: "Black Book", contact: "Jaci Smith", Read: "Read" },
  { name: "Trawa Energy", contact: "David Budde", Read: "Read" },
];


const PlayCard = () => {

  return (
    <>
      <div className="bg-white-900 w-full h-screen  flex justify-center items-center">
        <div className="w-[6vw] h-[6vw] rounded-full bg-yellow-900 "></div>
        <div className="bg-[#075349] w-[70vw] h-[40vw] flex justify-center gap-[5vw] absolute">
          <div className="bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center mt-20">
            <div className="bg-zinc-900 rounded-full w-[8vw] h-[8vw]">
              <div className="w-[1vw] h-[1vw] bg-red-900 rounded-full p-4 text-center"></div>
              <h1 className="text-white text-center ">Play</h1>
            </div>
          </div>
          <div className="bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center mt-20">
            <div className="bg-zinc-900  rounded-full w-[8vw] h-[8vw]">
              <div className="w-[1vw] h-[1vw] bg-red-900 rounded-full p-4 text-center"></div>
              <h1 className="text-white text-center mt-[3vw]">Play</h1>
            </div>
          </div>
        </div>
      </div>
      {/* NeueMontreal, Roboto, sans-serif */}
      <div className="absolute text-black -mt-20 w-full h-screen bg-white shadow-2xl shadow-black">
        <div className="projects">
          <h1 className='border-b-[1px] border-zinc-900/20 font-["NeueMontreal, Roboto, sans-serif"] text-[3.5vw] leading-tight p-16 mt-16 font-medium'>
            Featured Projects
          </h1>
        </div>
        <div className="card-container flex justify-between items-center p-[3vw] gap-7 -mt-16 ">
          <div className="">
            <p className="font-medium p-2">
              <span className="flex items-baseline">
                <h1 className="text-[5vw] items-baseline">.</h1> Dyne
              </span>
            </p>
            <div>
              <div className="w-[45vw] h-[30vw] bg-slate-300 rounded-lg"></div>
              <div className="buttons flex mt-5">
                {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
                  (item, index) => {
                    return (
                      <p
                        key={index}
                        className='hover:bg-black hover:text-white font-["NeueMontreal, Roboto, sans-serif"] mr-4 border-2 border-zinc-900 rounded-l-3xl rounded-r-3xl pl-2 pr-2'
                      >
                        {item}
                      </p>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <p className="font-medium p-2">
                <span className="flex items-baseline">
                  <h1 className="text-[5vw] items-baseline">.</h1> Visa
                </span>
              </p>
            </div>
            <div>
              <div className="w-[45vw] h-[30vw] bg-slate-300 rounded-lg"></div>
              <div className="buttons flex mt-5">
                {[
                  "AGENCY",
                  "COMPANY PRESENTATION",
                  "SALES DECK",
                  "SLIDES DESIGN",
                ].map((item, index) => {
                  return (
                    <p
                      key={index}
                      className='font-["NeueMontreal, Roboto, sans-serif"] hover:bg-black hover:text-white mr-4 border-2 border-zinc-900 rounded-l-3xl rounded-r-3xl pl-2 pr-2'
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="ClientReview w-full h-screen border-b-2">
          <div>
            <div className="clientReview border-b-[1px] border-zinc-800">
              <p className='text-[3vw] ml-10 font-["NeueMontreal, Roboto, sans-serif"] '>
                Client's Review
              </p>
            </div>

            <div className="clientreview-content p-5 ">
              <div className='masker flex justify-between font-["NeueMontreal, Roboto, sans-serif"]'>
                <div className="font-light text-[1.3vw]">
                  <h1 className="hover:border-b-2 border-zinc-500 hover:cursor-pointer">
                    Specific Achievements:
                  </h1>
                </div>
                <div className="font-light text-[1.3vw]">
                  <h1 className="hover:border-b-2 border-zinc-500 hover:cursor-pointer">
                    Services:
                  </h1>
                  <h1 className="mt-12 border-2 hover:cursor-pointer border-zinc-800 rounded-full pl-2 pr-2 hover:bg-black hover:text-white">
                    INVESTOR DECK
                  </h1>
                  <h1 className="mt-2 border-2 hover:cursor-pointer border-zinc-800 rounded-full pl-2 pr-2 hover:bg-black hover:text-white">
                    SALES DECK
                  </h1>
                </div>
                <div className="w-[33vw] h-[40vw] text-wrap">
                  <h1 className="hover:border-b-2 border-zinc-500 hover:cursor-pointer">
                    SarojKumar
                  </h1>
                  <img
                    src="#"
                    alt="image "
                    className="mt-10 w-[7vw] h-[7vw] rounded-md border-2 border-zinc-900"
                  />
                  <p className="mt-10 font-light text-[1.3vw] leading-tight">
                    They were transparent about the time and the stages of the
                    project. The end product is high quality, and I feel
                    confident about how they were handholding the client through
                    the process. I feel like I can introduce them to someone who
                    needs to put a sales deck together from scratch, and they
                    would be able to handhold the client experience from 0 to
                    100 very effectively from story to design. 5/5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="data-list text-black p-4 justify-between">
          {data.map((item, index) => (
            <div key={index} className={`data-item m-6 hover:cursor-pointer font-light text-[1.3vw] border-b-2 flex items-center justify-between gap-2`}>
              <h1 className="w-[20vw] hover:font-semibold " key={index}>{item.name}</h1>
              <p className="w-[10vw]" >{item.contact}</p>
              <p className="text-green-500 hover:text-red-900 hover:font-semibold ">{item.Read}</p>
            </div>
          ))}
        </div>
        {/* after read items */}

        <div className="3card w-full h-screen">
          <div className="card p-10 flex gap-4">
            <div className="card1  rounded-md w-[40vw] bg-green-900 h-[30vw]">

            </div>
            <div className="card1 rounded-md w-[25vw] bg-green-900 h-[30vw]">
            </div>
            <div className="card1 rounded-md w-[25vw] bg-green-900 h-[30vw]">

            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default PlayCard;
