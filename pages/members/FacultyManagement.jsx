import FacultyCards from "./FacultyCards";

export default function FacultyManagement() {
    return (
        <>
            <div className="faculty-header mt-[70px] flex justify-center items-center pt-5 pb-1">
                <div className="faculty-header-dot h-6 w-2 mr-2 bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
                <h1 className="text-5xl text-white"><b>Faculty Management</b></h1>
            </div>
            <div className="faculty-body mt-10 w-[100%]">
                <div className="faculty-row-1 flex justify-center items-center flex-wrap">
                    <FacultyCards
                        src="/Binupk.jpg"
                        name="Mr.P.K Binu"
                        position="Faculty Sponsor"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Swaminathanj.jpg"
                        name="Dr. Swaminathan J"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                       src="/Jyothishanair.jpg"
                        name="Dr. Jyothisha Nair"
                        position="Chairperson"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                </div>
                <div className="faculty-row-1 flex justify-center items-center flex-wrap">
                    <FacultyCards
                       src="/Geethamam.jpg"
                        name="Dr. Geetha M"
                        position="Executive Committee Member"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Gopakumarg.jpg"
                        name="Dr. Gopakumar G"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Priyamam1.png"
                        name="Priya M"
                        position="Executive Committee Member"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                </div>
            </div>
        </>
    );
}

