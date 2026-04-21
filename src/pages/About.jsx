
function About() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* container */}
            <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">

                {/* header */}
                <h1 className="text-3xl font-bold mb-4 text-center">
                    About Our Employee App
                </h1>

                {/* section 1 */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Who We Are
                    </h2>
                    <p className="text-gray-600">
                        We are employees of this company for different tasks and purposes
                    </p>
                </div>

                {/* section 2 */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Our Mission
                    </h2>
                    <p className="text-gray-600">
                        Our goal is to help people and ours clients in their specific fields.
                    </p>
                </div>

                {/* section 3 */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Fields of Employee
                    </h2>

                    {/* tech list */}
                    <div className="flex gap-3 flex-wrap">
                        <span className="bg-blue-100 px-3 py-1 rounded">Engineers</span>
                        <span className="bg-green-100 px-3 py-1 rounded">Doctors</span>
                        <span className="bg-yellow-100 px-3 py-1 rounded">Teachers</span>
                        <span className="bg-red-100 px-3 py-1 rounded">Helper Staff</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;
