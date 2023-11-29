import React from 'react';

// Define a type for the props in case you want to expand the Resume component in the future
type ResumeProps = {};

const Resume: React.FC<ResumeProps> = () => {
    return (
        <div className="w-screen bg-gray-100 shadow-md overflow-hidden flex">
            <div className="bg-neutral text-dark p-5 w-[90%] max-w-6xl mx-auto py-[120px]">
                <h1 className="text-4xl font-bold mb-5">Resume</h1>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-3">Education</h2>
                    <div className="pl-4 border-l-4 border-primary">
                        <p className="font-bold">Le Wagon Mexico</p>
                        <p className="italic">Full Stack Coding Bootcamp | 2020</p>
                        <p>Ruby on Rails, HTML, CSS, Projects</p>

                        <p className="font-bold mt-3">University of Colorado Boulder</p>
                        <p className="italic">Bachelor of Science Finance | 2015</p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-3">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold text-secondary">Frontend / UIUX</h3>
                            <ul className="list-disc list-inside">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript ES6</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Figma &amp; Adobe XD</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary">Backend / Database</h3>
                            <ul className="list-disc list-inside">
                                <li>Python</li>
                                <li>Ruby on Rails</li>
                                <li>MySQL &amp; PostgreSQL</li>
                                <li>AWS Lambda</li>
                                <li>AWS DynamoDB</li>
                                <li>Web hooks &amp; web sockets</li>
                                <li>API Integrations</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Add more sections for Work Experience, Projects, etc., as needed */}
                {/* Ensure that the provided data and layouts follow the existing website's design and content strategy */}

            </div>
        </div>
    );
}

export default Resume;