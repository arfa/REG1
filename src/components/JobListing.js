import React from 'react';
export default function JobListing({ job, handleTagSearch }) {
	let tags = [job.role, job.level, ...job.languages, ...job.tools];
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="bg-lightGrayishCyanBg my-10 md:my-5 first:mt-8 ">
			<div
				className={`flex flex-col mx-4 p-7 gap-6 bg-white rounded shadow-lg md:flex-row ${
					job.featured && 'border-l-4 border-darkCyan'
				}`}>
				<div className="-mt-12 w-14 h-auto md:w-20 md:mt-0 lg:w-24">
					<img
						src={process.env.PUBLIC_URL + job.logo}
						alt={job.company}
					/>
				</div>
				<div className="flex flex-col gap-4 justify-between  md:gap-2 ">
					<p className="text-sm text-darkCyan font-bold  md:text-base ">
						{job.company}
						{job.new && (
							<span className="py-2 px-3 ml-4 text-xs bg-darkCyan text-lightGrayishCyanBg md:text-[13px] uppercase rounded-full">
								New!
							</span>
						)}
						
					</p>
					<button className="text-base font-bold hover:text-darkCyan cursor-pointer md:text-lg lg:text-xl" type="button"
       		 onClick={() => setShowModal(true)}>
						{job.position}
					</button>
					
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
				  REG Company
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
					<img
							
							className=" hover:bg-black p-2 bg-greenlight cursor-pointer"
							src={process.env.PUBLIC_URL + '/images/icon-remove.svg'}
						/>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
					<p className=" text-sm text-darkGrayishCyan md:text-base">
						<span className="lg:mr-2">{job.postedAt}</span> •{' '}
						<span className="lg:mx-2">{job.contract}</span> •{' '}
						<span className="lg:ml-2">{job.location}</span>
					</p>
				</div>
				<div className="flex items-center justify-start flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-t-darkGrayishCyan text-sm md:text-base md:border-none md:justify-end md:ml-auto md:pt-0">
					{tags
						? tags.map((tag, index) => (
								<span
									key={index}
									onClick={() => handleTagSearch(tag)}
									className="py-1 px-2 text-darkCyan bg-lightGrayishCyanFilter font-bold text-center rounded-md hover:text-lightGrayishCyanBg hover:bg-darkCyan cursor-pointer">
									{tag}
								</span>
						  ))
						: ''}
				</div>
			</div>
		</div>
	);
}