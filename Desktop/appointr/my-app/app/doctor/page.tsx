// src/app/doctor/page.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";

const DoctorPage: React.FC = () => {
    const doctorData = {
        name: "Dr. Alice Smith",
        imageUrl: "https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?rs=1&pid=ImgDetMain",
        qualification: "MBBS, MD - Cardiology",
        specialization: "Interventional Cardiology",
        experience: 15,
    };

    // State for modal visibility and booking confirmation
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

    // Handlers for modal and confirmation
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleConfirm = () => {
        setIsBooked(true);
        setIsModalOpen(false);
    };

    // Handlers for video call
    const openVideoCall = () => setIsVideoCallOpen(true);
    const closeVideoCall = () => setIsVideoCallOpen(false);

    return (
        <div className="container mx-auto my-10 max-w-lg bg-gray-400 shadow-lg rounded-lg p-6">
            <img
                src={doctorData.imageUrl}
                alt={`${doctorData.name}'s profile`}
                className="w-32 h-32 rounded-lg mx-auto"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">{doctorData.name}</h2>
            <p className="text-gray-600 text-center mt-2">{doctorData.qualification}</p>
            <p className="text-gray-600 text-center">{doctorData.specialization}</p>
            <p className="text-gray-600 text-center mt-1">
                Experience: {doctorData.experience} years
            </p>

            {/* Buttons for booking and video call */}
            <div className="flex justify-around mt-6">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    onClick={openModal}
                >
                    Book Appointment
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={openVideoCall}
                >
                    Video Call to Doctor
                </button>
            </div>

            {/* Modal for selecting date and time */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4 text-center">Book an Appointment</h2>
                        <form>
                            <label className="block mb-2">
                                <span className="text-gray-700">Select Date</span>
                                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                            </label>
                            <label className="block mb-2">
                                <span className="text-gray-700">Select Time</span>
                                <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                            </label>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Confirmation message */}
            {isBooked && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold text-center text-green-600">Appointment has been booked!</h2>
                        <button
                            onClick={() => setIsBooked(false)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mx-auto block"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Video Call Modal */}
            {isVideoCallOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-xl font-semibold mb-4 text-center">Video Call</h2>
                        <div className="flex justify-between">
                            <video
                                autoPlay
                                className="border border-gray-300 rounded-lg w-1/2"
                                // Placeholder for local video stream
                                style={{ backgroundColor: '#000' }} // Set background color
                            />
                            <video
                                autoPlay
                                className="border border-gray-300 rounded-lg w-1/2"
                                // Placeholder for doctor's video stream
                                style={{ backgroundColor: '#000' }} // Set background color
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeVideoCall}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                End Call
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorPage;
