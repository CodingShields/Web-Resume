import { useState } from "react";

const handleResumeDownload = () => {
	const link = document.createElement("a");
	console.log(link);
	link.href = "/resume.pdf";
	link.download = "MikeShieldsResume.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

function App() {
	return (
		<div
			className='
          p-6
          mx-auto
          page
          w-3/4
          print:max-w-letter
          md:max-w-letter md:h-letter
          xsm:p-8
          sm:p-9
          md:p-16
          bg-white
        '
		>
			<header
				className='
            flex
            row-gap-5
            flex-row flex-wrap
            items-center
            mb-5
            md:mb-2
            border-b-2 border-opacity-50 border-gray-400
          '
			>
				<div className='initials-container mr-5 text-base leading-none pb-3 pt-3 text-white bg-blue-600 font-medium px-3'>
					<div className='initial text-center text-2xl pb-1'>M</div>
					<div className='text-center text-2xl initial'>S</div>
				</div>
				<h1 className='print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-gray-750 pb-px'>
					Mike Shields{" "}
					<h1
						class='print:text-3xl text-blue-700 font-sans self-center md:text-3xl text-2xl font-hairline py-2 pb-2'
						role='heading'
						aria-label='Software Developer'
					>
						Software Engineer
					</h1>
				</h1>

				<h2 id='industry-title' className='print:text-3xl text-blue-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px'>
					<div className='flex text-center justify-center items-center '>
						<button
							onClick={handleResumeDownload}
							className='print:text-3xl text-lg text-center font-sans border-2 border-blue-400 rounded-md px-4 py-2 font-hairline my-2 shadow-black shadow-2xl bg-blue-400 text-white hover:text-white hover:bg-blue-200 focus:translate-y-2 '
							role='button'
							aria-label='Software Developer'
						>
							Download Resume
						</button>
					</div>
				</h2>
			</header>

			<section className='mb-10 w-fit first:mt-0' id='contact'>
				<h2 className='mb-2 md:mb-0 font-bold tracking-widest text-lg text-blue-700'>CONTACT</h2>

				<ul className='print:flex-row flex flex-wrap flex-col sm:flex-row justify-between gap-2 list-inside '>
					<li className='mt-1.5 leading-normal text-gray-700 text-md pr-8'>
						<a href='mailto:codingshields@gmail' target='_blank' rel='noopener noreferrer'>
							<i className='far fa-envelope text-blue-900'></i>
							<span className='font-bold text-gray-500'>Email: </span>
							<span
								className='
                    inline-block
                    text-blue-550
                    print:text-black
                    font-normal
                    group-hover:text-gray-700
                    transition
                    duration-100
                    ease-in
                    hover:text-blue-500
                                        hover:font-bold

                  '
							>
								codingshields@gmail.com ↗
							</span>
						</a>
					</li>

					<li className='mt-1.5 leading-normal text-gray-700 text-md'>
						<a href='tel:563-340-4908'>
							<i className='fas fa-mobile-alt text-blue-900'></i>
							<span className='font-bold text-gray-500'>Phone: </span>

							<span
								className='
                    inline-block
                    text-gray-550
                    print:text-black
                    font-normal
                    transition
                    duration-100
                    ease-in
                    hover:text-blue-500
                    hover:font-bold
                  '
							>
								563-340-4908 ↗
							</span>
						</a>
					</li>

					<li className='mt-1.5 leading-normal text-gray-700 text-md'>
						<a href='https://www.linkedin.com/in/mikey-shields-3a1ab8282/' className='group' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-linkedin text-blue-900 pr-8'></i>
							<span className='font-bold text-gray-500'>Linkedin: </span>
							<span
								className='
                    inline-block
                    text-gray-550
                    print:text-black
                    font-normal
                    transition
                    duration-100
                    ease-in
 hover:text-blue-500
                    hover:font-bold                  '
							>
								linkedin.com/MikeyShields ↗
							</span>
						</a>
					</li>

					<li className='mt-1.5 leading-normal text-gray-700 text-md '>
						<a href='https://github.com/CodingShields' className='group' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-github text-blue-900 pr-8'></i>
							<span className='font-bold text-gray-500'>Github: </span>
							<span
								className='
                    inline-block
                    text-gray-550
                    print:text-black
                    font-normal
                     hover:text-blue-500
                    hover:font-bold
                    transition
                    duration-100
                    ease-in
                  '
							>
								github.com/CodingShields ↗
							</span>
						</a>
					</li>
				</ul>
			</section>

			<div className='grid grid-cols-3 gap-10'>
				<section className='print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0'>
					{/* <section className='mt-8 first:mt-0' id='profile'>
						<h2 className='mb-0 font-bold tracking-widest text-sm2 text-blue-700 '>PROFILE</h2>

						<section className='mb-0 grid grid-cols-2 '>
							<h3 className='text-lg font-semibold text-gray-700 leading-snugish'></h3>
							<p className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
								<span className='-ml-2 select-none text-gray-600'>›</span>
								<strong>US Citizen - Originally from Davenport, IA.</strong>
							</p>
							<p className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
								<span className='-ml-2 select-none text-gray-600'>›</span>
								Living & residing in Abq, New Mexico.
							</p>
							<p className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
								<span className='-ml-2 select-none text-gray-600'>›</span>
								Remote role on diverse, trusting, and async team.
							</p>
						</section>
					</section> */}

					<section className='col-span-3 mt-6 first:mt-0' id='experience'>
						<h2 className='mb-4 font-bold tracking-widest text-xl text-blue-700'>EXPERIENCE</h2>

						<section className='mb-4'>
							<header>
								<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
									Software Engineer{" "}
									<span id='company-name' className='text-gray-550 font-semibold'>
										@ Custom Apps LLC and Co-Owner
									</span>{" "}
								</h3>
								<p id='work-date-location' className='leading-normal text-sm text-gray-700 mt-1'>
									September 2023 – Present // Albuquerque, NM{" "}
								</p>
							</header>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Description: Worked on custom apps designed for Gyms and Training facilities that manage clients data and billing.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Market Need: Large need for simpler easier systems that are easier to navigate and handle large customer DB's and Staff.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Involvement: Helped with initial design, testing and deployment of all applications and systems for both Frontend and BackEnd.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Stacks for multiple projects include: JavaScript, Next.js, Node, GraphQL, SQL, Firebase, HTML, CSS, Tailwind, Git, Bash, Eslint,
									GitLab, Figma, Agile (Scrum), SEO / Meta, Restful API's.
								</li>
							</ul>
						</section>
						<section className='mb-8'>
							<header>
								<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
									Web Developer{" "}
									<span id='company-name' className='text-gray-550 font-semibold'>
										@ Freelance
									</span>{" "}
								</h3>
								<p id='work-date-location' className='leading-normal text-sm text-gray-700 mt-1'>
									September 2017 – Current // Albuquerque, NM{" "}
								</p>
							</header>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Developed, designed, tested, and debugged websites from foundation to full production for clients.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Attracted users to websites with professional, user-friendly designs and clean code for high-performance operation.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Adapted websites to match changing user preferences and client demands with regular updates.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Stack: JavaScript, React, Firebase, HTML, CSS, Tailwind, Git, Bash, Eslint, GitLab, Figma, SEO / Meta, Restful API's.
								</li>
							</ul>
						</section>
						<section className='mb-8'>
							<header>
								<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
									Software Engineer{" "}
									<span id='company-name' className='text-gray-550 font-semibold'>
										@ T Mobile New Customer Onboarding Platform{" "}
									</span>{" "}
								</h3>
								<p id='work-date-location' className='leading-normal text-sm text-gray-700 mt-1'>
									September 2018 – 2019 // Albuquerque, NM{" "}
								</p>
							</header>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Description: T-Mobile onboarding experience for new customers and Sprint customers after merger. Market Need: Large churn from
									Sprint customers migrating to T-Mobile. Solves: Integrates the T-Mobile Un-Carrier campaign, showcases benefits, and educates
									customers Features: Users can set up online account to manage T-Mobile account & see of the benefits they receive with T-Mobile
									service.Helps transition customers migrating from Sprint.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Mentored junior developers and interns for superior quality code and team performance to meet deadline expectations.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>Stack: Javascript, Vue.js, Laravel</li>
							</ul>
						</section>

						<section className='mb-8'>
							<header>
								<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
									Software Engineer{" "}
									<span id='company-name' className='text-gray-550 font-semibold'>
										@ Bryant Designs
									</span>{" "}
								</h3>
								<p id='work-date-location' className='leading-normal text-sm text-gray-700 mt-1'>
									March 2018 – September 2023 // Albuquerque, NM{" "}
								</p>
							</header>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Assisted in the hiring, mentoring of junior developers and interns. Hosted morning scrums, collaborated with team members to solve
									complex problems and deliver high-quality products.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Developed, designed, tested complex web applications from foundation to full production for clients.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Managed incoming customer tickets and requests for changes, error fixes with a quick turn around for superior client satisfaction.
								</li>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-none text-gray-600'>›</span>
									Stack: JavaScript, React, Firebase, HTML, CSS, Tailwind, Git, Bash, Eslint, GitLab, Figma, SEO / Meta, Restful API's.
								</li>
							</ul>
						</section>
					</section>

					<section className='col-span-3 mt-6 first:mt-0' id='education'>
						<h2 className='mb-4 font-bold tracking-widest text-xl text-blue-700'>Volunteer & Professional Development</h2>

						<section className='mb-4.5'>
							<header>
								<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
									Chapter Co-Lead
									<span id='company-name' className='text-gray-550 font-semibold'>
										@ Codecademy
									</span>
								</h3>
								<p id='work-date-location' className='leading-normal text-sm text-gray-700 mt-1'>
									September 2021 – Present // United States
								</p>
							</header>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<span className='-ml-2 select-nofne text-gray-600'>›</span>
									Provide live demos, workshops, tutoring, and mentoring for engineers and students learning JavaScript, React, Next.js, Node, and
									AWS, Serverless architecture.
								</li>
							</ul>
						</section>
					</section>

					<section className='col-span-3 mt-6 first:mt-0' id='experience'>
						<h3 id='job-title' className='text-lg font-semibold text-blue-500 leading-snugish'>
							Professional Certification & Achievements
						</h3>

						<section className='mb-4.5'>
							<ul id='work-description-bullets' className=''>
								<li className='mt-2.1 ml-1.5 text-sm text-gray-700 leading-normal'>
									<a href='https://bryantdesigns.github.io/hackathon/about.html' className='group' target='_blank' rel='noopener noreferrer'>
										<span className='-ml-2 select-none text-gray-600'>›</span>
										Codecademy Hackathon Runner Up - Team Xcessibility
										<span
											className='
                          inline-block
                          text-gray-550
                          print:text-black
                          font-normal
                          group-hover:text-gray-700
                          transition
                          duration-100
                          ease-in
                        '
										>
											↗
										</span>
									</a>
								</li>
							</ul>
						</section>
					</section>
				</section>

				<section className='print:col-span-1 col-span-3 md:col-span-1'>
					<section className='col-span-1 mt-8 first:mt-0' id='skills'>
						<h2 className='mb-4 font-bold tracking-widest text-sm2 text-blue-700'>SKILLS</h2>
						<section className='mb-1.5' id='programming-languages'>
							<header>
								<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Programming & Languages</h3>
							</header>
							<div className='my-2.5 last:pb-1.5'>
								<ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>JavaScript (ES6+)</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Node</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>GraphQL</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>SQL</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>HTML</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>CSS</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Tailwind</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'></li>
								</ul>
							</div>
						</section>

						<section className='mb-1.5' id='libraries-frameworks'>
							<header>
								<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Libraries & Frameworks</h3>
							</header>
							<div className='my-2.5 last:pb-1.5'>
								<ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>React</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Next.js</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Zustand</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Jest</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Cypress</li>
								</ul>
							</div>
						</section>

						<section className='mb-1.5' id='tools-services'>
							<header>
								<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Tools | Services | Database</h3>
							</header>
							<div className='my-2.5 last:pb-1.5'>
								<ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Git / Bash / Shells</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Eslint</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>GitLab</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Firebase</li>
								</ul>
							</div>
						</section>

						<section className='mb-1.5' id='related-skills'>
							<header>
								<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Related Skills</h3>
							</header>
							<div className='my-2.5 last:pb-1.5'>
								<ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Agile (Scrum)</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>SEO / Meta</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Accessbility (CWAG)</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Jira / Atlassian</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Figma</li>
									<li className='px-2.5 mr-1.6 mb-1.6 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200'>Restful API's</li>
								</ul>
							</div>
						</section>
					</section>

					<section className='mt-8 first:mt-0' id='projects'>
						<h2 className='mb-4 font-bold tracking-widest text-sm2 text-blue-700'>PROJECTS</h2>

						<section className='mb-4.5'>
							<header>
								<h3 className='text-sm font-semibold tex t-gray-700 leading-snugish'>
									<a className='group' rel='noopener noreferrer'>
										EatAi
										<span
											className='
                          inline-block
                          text-gray-550
                          print:text-black
                          font-normal
                          group-hover:text-gray-700
                          transition
                          duration-100
                          ease-in
                        '
										>
											↗ Web application and database
										</span>
									</a>
								</h3>
								<p className='leading-normal text-sm text-gray-650'>
									Stack: Javascript, React, Firebase, HTML, CSS, Tailwind, Git, Bash, Eslint, GitLab, Figma, Zustand, SEO / Meta, Restful API's.
								</p>
								<p className='leading-normal text-sm text-gray-650'>
									<i>Finished</i>
								</p>
							</header>
							<div className='mt-2.1 text-xs text-gray-700 leading-normal'>
								<p>
									<span className='font-semibold'>Description:</span>
									ChatGTP Ai Chatbot for grocery lists, and nutritional guides based on user input.
								</p>
								<p>
									<span className='font-semibold'>Market Need:</span>
									Gym Owners, Trainers, and Fitness Enthusiasts need a way to help clients reach personal goals through Ai generated nutrition.
								</p>
								<span className='font-semibold'>Features: </span>

								<br />
								<ul className='list-inside'>
									<li className='ml-1.5'>
										<span className='-ml-1.5 select-none text-gray-600'>›</span>
										Clients can create and save grocery lists in different applications within the app to meet their needs. Whether it was for
										personal use or larger parties the app could accommodate.
									</li>
								</ul>
							</div>
							<header>
								<h3 className='text-sm font-semibold tex t-gray-700 leading-snugish mt-10'>
									<a className='group' rel='noopener noreferrer'>
										Skincanarchy
										<span
											className='
                          inline-block
                          text-gray-550
                          print:text-black
                          font-normal
                          group-hover:text-gray-700
                          transition
                          duration-100
                          ease-in
                        '
										>
											↗ Web page and database for large podcast audience and followers.
										</span>
									</a>
								</h3>
								<p className='leading-normal text-sm text-gray-650'>
									Stack: Javascript, React, Firebase, HTML, CSS, Tailwind, Git, Bash, Eslint, GitLab, Figma, Zustand, SEO / Meta, Restful API's.
								</p>
								<p className='leading-normal text-sm text-gray-650'>
									<i>Finished</i>
								</p>
							</header>
							<div className='mt-2.1 text-xs text-gray-700 leading-normal'>
								<p>
									<span className='font-semibold'>Description:</span>
									Webpage for Podcaster and Author to showcase episodes and market advertised content.
								</p>
								<p>
									<span className='font-semibold'>Market Need:</span>
									Current listener base was reaching 500k. She needed a better established brand and hub for growing audience.
								</p>
								<span className='font-semibold'>Features: </span>

								<br />
								<ul className='list-inside'>
									<li className='ml-1.5'>
										<span className='-ml-1.5 select-none text-gray-600'>›</span>
										New users can sign up for the newsletter. This helps grow the email list and reach more people. Special members only access helps
										drive more revenue. Featured products have trackable links to generate revenue as well through her audience listening to the
										podcast.
									</li>
								</ul>
							</div>
						</section>
					</section>

					<section className='col-span-3 mt-8 first:mt-0' id='education'>
						<h2 className='mb-4 font-bold tracking-widest text-sm2 text-blue-700'>EDUCATION</h2>

						<section className='mb-4.5'>
							<section className='mb-4.5'>
								<header>
									<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Colorado Technical University </h3>
									<p className='leading-normal text-sm text-gray-650'>Colorado Springs, CO </p>
								</header>
								<p className='mt-2.1 text-sm text-gray-800 leading-normal'>
									Currently Pursing Bachelor of Computer Science Technology (Concentration: Software Engineering){" "}
								</p>
							</section>
							<section className='mb-4.5'>
								<header>
									<h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Scott Community College </h3>
									<p className='leading-normal text-sm text-gray-650'>Davenport, IA </p>
								</header>
								<p className='mt-2.1 text-sm text-gray-800 leading-normal'>Associate of Business Administration </p>
							</section>
						</section>
					</section>
				</section>
			</div>

			<footer className='print:pb-0 pb-5'>
				<section id='resume-info' className='flex flex-row mt-16 print:mt-0'>
					<h2 className='text-xs font-hairline text-gray-550'>For fun this resume was built with HTML and Tailwind CSS</h2>
					<a
						href='https://github.com/CodingShields/my-custom-tailwind-resume-master'
						className='group hover:text-gray-700 border-l border-gray-500 ml-3 pl-3 text-gray-550 text-xs font-hairline'
					>
						See the GitHub Repo
						<span
							className='
                  inline-block
                  text-gray-550
                  print:text-black
                  font-normal
                  group-hover:text-gray-700
                  transition
                  duration-100
                  ease-in
                '
						>
							↗
						</span>
					</a>
				</section>
			</footer>
		</div>
	);
}

export default App;
