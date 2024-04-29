import profileImg from '../../public/images/profile.jpeg'

export default function Home() {
    return (
        <div className="p-4 bg-[#f1f3f6] text-[#6c757d]">

            <div
                className="border-1 shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] rounded-lg bg-[#f1f3f6]">

                {/*top content*/}
                <div
                    className="flex flex-wrap justify-center pt-4 sm:flex-nowrap rounded-t-lg bg-top-color sm:px-2 w-full">

                    <div
                        className="relative inline-block rounded-[50%] p-[0.5625rem] bg-[#f3f5f8] w-[11.25rem] h-[11.25rem] after:absolute after:top-[0] after:right-[0] after:bottom-[0] after:[box-shadow:inset_3px_3px_3px_#cdcdcd,_inset_-3px_-3px_3px_#fafafa] after:rounded-[50%] after:z-0 after:left-[0]">
                        <div
                            className="[box-shadow:3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] rounded-[50%] p-1.5 relative">
                            <img src={profileImg.src} alt={'profile image'}
                                 className={'w-[9.375rem] h-[9.375rem] inline-block !rounded-[50%] align-middle border-none object-cover'}/>
                        </div>
                    </div>

                    <div className="w-2/3 sm:text-center sm:pl-5 mt-4 sm:mt-10 text-start">
                        <p className="font-poppins font-bold text-heading text-center sm:text-4xl text-2xl">
                            Maksym Ivashchenko
                        </p>
                        <p className="text-heading text-center">Senior Frontend Engineer</p>
                        <div className={'flex justify-center p-2 mt-2'}>
                            <div
                                className={'[box-shadow:3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] [transition:all_0.3s_ease_0s] rounded-[2rem] !mb-4'}>
                                <a className="block px-6 py-2"
                                   href="/Maksym%20Ivashchenko%20-%20Frontend%20developer%20(7+).pdf" title="" download>
                                    <div className={'!items-center flex'}>
                                        <div className={"!text-left flex-[1]"}><span
                                            className={'!text-[#212529] font-semibold !uppercase !text-left'}>CV</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cf4075"
                                             className="w-6 h-6 ml-4">
                                            <path fillRule="evenodd"
                                                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                                                  clipRule="evenodd"/>
                                        </svg>

                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                {/*main content*/}
                <div className="p-5">

                    <div className="flex flex-col sm:flex-row sm:mt-10">

                        <div className="flex flex-col sm:w-1/3 sm:pr-3 pr-0">
                            {/* My contact */}
                            <div
                                className="p-3 pr-3 mt-3 sm:mt-0  rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] sm:order-none order-3">
                                <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                                <div
                                    className="my-2 w-[60px] relative [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa] h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>
                                <div className={"flex mt-4"}>
                                    {/*github*/}
                                    <a href="https://www.github.com/mivashchenko" target="_blank"
                                       rel="noreferrer">
                                        <img
                                            alt={"github"}
                                            className={"mr-2"}
                                            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                                            width="32" height="32"/>
                                    </a>
                                    {/*instagram*/}
                                    <a href="http://www.instagram.com/kibadist"
                                       target="_blank" rel="noreferrer">
                                        <img
                                            alt={"instagram"}
                                            className={"mr-2"}
                                            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                                            width="32" height="32"/>
                                    </a>
                                    {/*linkedin*/}
                                    <a href="https://www.linkedin.com/in/mivashchenko"
                                       target="_blank" rel="noreferrer">
                                        <img
                                            alt={"linkedin"}
                                            className={"mr-2"}
                                            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                                            width="32" height="32"/>
                                    </a>
                                    {/*medium*/}
                                    <a
                                        href="https://medium.com/@mivashchenko.blog"
                                        target="_blank" rel="noreferrer">
                                        <img
                                            alt={"medium"}
                                            className={"mr-2"}
                                            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg"
                                            width="32" height="32"/>
                                    </a>
                                </div>
                                <div className={"flex flex-col mt-4"}>
                                    <div className="flex items-center my-1">
                                        <div className={"w-[32px] h-[32px]"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/>
                                            </svg>
                                        </div>
                                        <div className="truncate">mivashchenko.work@gmail.com</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className={"w-[32px] h-[32px]"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor"
                                                 className="w-6 h-6">
                                                <path fillRule="evenodd"
                                                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div>484.985.5513</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className={"w-[32px] h-[32px]"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor"
                                                 className="w-6 h-6">
                                                <path fillRule="evenodd"
                                                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div>Orlando, FL</div>
                                    </div>

                                </div>
                            </div>
                            {/* Skills */}
                            <div
                                className="p-3 pr-3 mt-3 rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] sm:order-none order-2">
                                <h2 className="text-lg font-poppins font-bold text-top-color">Tech Stack</h2>
                                <div
                                    className="my-2 w-[60px] relative [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa] h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>

                                <div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">HTML | CSS | SCSS</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">JavaScript | TypeScript</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">Git | GitLab | Azure</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">React | Angular</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">Redux | Saga | Easy Peasy</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">Jest | Cypress</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">AWS | Docker</div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <div className="ml-2">Node | Express | MongoDB</div>
                                    </div>

                                </div>
                            </div>
                            {/* Education Background */}
                            <div
                                className="p-3 mt-3 rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa] sm:order-none order-1 pr-3">
                                <h2 className="text-lg font-poppins font-bold text-top-color">Courses</h2>
                                <div
                                    className="my-2 w-[60px] relative [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa] h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>

                                <div className="flex flex-col space-y-1">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.udemy.com/certificate/UC-2b029fd3-0ef9-4e65-b9f0-88faec0bb6ee/">Docker
                                            - Full Docker Course</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/DTUCENNJ42ZP">Learning
                                            How to Learn: Powerful mental tools to help you master tough subjects</a>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.udemy.com/certificate/UC-7aac93eb-933e-4fbe-9e9d-3892d3cefbbd/">NodeJS-
                                            The Complete Guide (MVC, REST APIs, GraphOL, Deno)</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://ude.my/UC-df6cbed1-3dae-46f2-8dbb-90f2a2b91907">Master the
                                            Coding Interview: Data Structures + Algorithms</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/FCVG4QT9M8G8">Using
                                            Databases with Python</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/G6WXB477CLJV">Using
                                            Python to Access Web Data</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/FV9Y7B6CDN4T">Python
                                            Data Structures</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/BPWKECJTS8UN"> Programming
                                            for Everybody (Getting Started with Python)</a></div>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4">
                                    <div
                                        className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}>
                                        <a target={'_blank'}
                                           href="https://www.coursera.org/account/accomplishments/verify/5TU93BGZD7F3">Introduction
                                            to HTML5</a></div>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-col sm:w-2/3 order-first sm:order-none">

                            {/* About me */}
                            <div className="p-3 rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa]">
                                <h2 className="text-lg font-poppins font-bold  text-[#212529] mb-1">
                                    About Me
                                </h2>
                                <div
                                    className="my-2 w-[60px] relative [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa] h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>
                                <p className={'mt-2'}>I have extensive experience taking full ownership of new products
                                    and features,
                                    effectively self-managing and leading small, geographically distributed teams.
                                    With 7 years of experience in frontend development, I&apos;ve honed my skills to
                                    deliver high-quality, user-centric solutions.
                                </p>
                            </div>

                            {/* Professional Experience */}
                            <div
                                className="mt-4 p-4 pl-6 rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa]">
                                <h2 className="text-lg font-poppins font-bold  text-[#212529] mb-1">Professional
                                    Experience</h2>
                                <div
                                    className="my-2 w-[60px] relative [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa] h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>

                                <div className="flex flex-col mt-2">

                                    <div className="flex flex-col">
                                        <p className="text-lg font-bold text-gray-700">
                                            Andor Health, FL, USA | Front End Engineer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">Aug 2023 – present</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Revamped the system design of a React application, including state
                                                management, component composition, naming conventions, and other best
                                                practices
                                            </li>
                                            <li>Enhanced a crucial feature of the video conferencing module, making it
                                                more robust and maintainable
                                            </li>
                                            <li>Provided mentorship to fellow developers, offering guidance on
                                                fundamental UI system design concepts
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">Demandbase (TEAM International,
                                            Inc.), CA, USA | Senior Front End Developer</p>
                                        <p className="font-semibold text-sm text-gray-700">Sep 2021 – Sep 2023</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Implemented major feature as Lead Engineer, retained support/maintenance
                                                ownership
                                            </li>
                                            <li>Responsible for distilling PRD into Technical Design Document</li>
                                            <li>Developed React based architecture for new large-scale application
                                                modules
                                            </li>
                                            <li>Implemented best practices for React to ensure clean and efficient
                                                code
                                            </li>
                                            <li>Resolved complex issues related to application frontend</li>
                                            <li>Analyzed existing code and identified areas for refactoring and
                                                improvement
                                            </li>
                                            <li>Developed expertise in required testing technologies, taught other team
                                                members
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">
                                            Yotpo (AllStarsIt), Israel | Senior Frontend Developer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">Oct 2021 - Feb 2023</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Migrated legacy AngularJS code to Angular framework without impacting
                                                UX
                                            </li>
                                            <li>Owned the end-to-end development process from product definition to
                                                production
                                            </li>
                                            <li>Developed automated and manual E2E, unit tests, and integration tests
                                            </li>
                                            <li>Ensured pixel perfect implementation of design specifications</li>
                                            <li>Resolved conflicts between teams and managed difficult tasks to meet
                                                tight schedules
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">
                                            Auditdata, Denmark | Frontend Engineer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">Mar 2021 – Sep 2021</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Merged separate legacy services into one product using React, iframes,
                                                post messages
                                            </li>
                                            <li>Rapidly developed required additional services using React</li>
                                            <li>Participated in code reviews and ensured adherence to standards and best
                                                practices
                                            </li>
                                            <li>Implemented responsive design and cross browser compatibility</li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">
                                            MapR (Cyber Vision, Inc.), USA | Frontend Engineer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">Mar 2020 – Mar 2021</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>

                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Developed new application features as part of small team</li>
                                            <li>Ensured that new features met project goals and requirements and
                                                delivered on-time
                                            </li>
                                            <li>Refactored code for various parts of the application to improve
                                                performance
                                            </li>
                                            <li>Implemented best practices for React to ensure clean and efficient
                                                code
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">
                                            Citibank (Luxoft, DXC), USA | Software Engineer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">May 2018 – Feb 2020</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>

                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Collaborated with client team to develop frontend features for various
                                                projects using React, typescript, and custom webpack configurations
                                            </li>
                                            <li>Analyzed project goals and requirements and contributed to the design
                                                and architecture of new projects, optimized for performance and
                                                scalability
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="flex flex-col mt-8">
                                        <p className="text-lg font-bold text-gray-700">
                                            ReverseSide, Ukraine | Junior Frontend Developer
                                        </p>
                                        <p className="font-semibold text-sm text-gray-700">Mar 2017 – May 2018</p>
                                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key
                                            Responsibilities</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li> Worked with design team to create css layouts with animations and
                                                user-friendly landing pages that are responsive across different
                                                devices/screen sizes
                                            </li>
                                            <li> Developed basic Javascript functionality to add frontend interactivity
                                                such as form validation, animations, and other client-side features

                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* Projects */}
                            <div className="p-3 mt-3 rounded-xl shadow-[3px_3px_3px_#cdcdcd,_-3px_-3px_3px_#fafafa]">
                                <h2 className="text-lg font-poppins font-bold text-top-color">Home Projects</h2>
                                <div
                                    className="my-2 w-[60px]
                                     relative
                                     [box-shadow:inset_1.5px_1.5px_1.5px_#cdcdcd,_inset_-1.5px_-1.5px_1.5px_#fafafa]
                                      h-2 rounded-[1em] border-[0] after:absolute after:content-[''] after:h-1 after:bg-[#f56c6d] after:w-1/2 after:rounded-[3em]"></div>

                                <div className="flex flex-col">

                                    <div className="flex flex-col">
                                        <div className={'flex mb-2'}>
                                            <div className={'w-[24px] h-[24px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd"
                                                          d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <a
                                                className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}
                                                target={'_blank'}
                                                href={'https://moss-book.com/'}>
                                                Auth service (In progress, desktop and tablet view) - Next.js v14.2,
                                                Next-auth v5, Shadcn-ui, Tailwind,
                                                TypeScript, Prisma, PostgreSQL
                                            </a>
                                        </div>
                                        <p className="font-normal text-sm text-gray-700 mb-1 pl-2">NextJS Auth app with
                                            Tokens, confirmation emails, 2FA, User roles</p>
                                    </div>


                                    <div className="flex flex-col mb-4">
                                        <div className={'flex mb-2'}>
                                            <div className={'w-[24px] h-[24px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd"
                                                          d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <a
                                                className={'ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'}
                                                target={'_blank'}
                                                href={'https://booking-ui-two.vercel.app/booking'}>
                                                Booking service (In progress, mobile view only) - Next.js 14.2, Redux,
                                                TypeScript, MUI, MongoDB
                                            </a>
                                        </div>
                                        <p className="font-normal text-sm text-gray-700 mb-1 pl-2">A versatile booking
                                            app designed to streamline appointments and reservations for a variety of
                                            services including barbershops, nail studios, and beauty salons. Whether
                                            you&apos;re a customer looking to book your next appointment or a service
                                            provider managing your schedule, MossBook has you covered.</p>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
        ;
}
