import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-8 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">

                {/* Student Image */}
                <img
                    src="lav.jpg" // 🔁 Replace this with actual student image URL
                    alt="Student"
                    className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                />

                {/* Student Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">👤 Student Information</h2>
                    <p className="mb-1">Name: <span className="font-medium">LAV KUMAR YADAV</span></p>
                    <p className="mb-1">Roll No: <span className="font-medium">2200321540103</span></p>
                    <p className="mb-1">Admission No: <span className="font-medium">2022B1541106</span></p>
                    <p className="mb-1">Department: <span className="font-medium">CSE - DS</span></p>
                    <div className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} BookVerse. All rights reserved.</div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
