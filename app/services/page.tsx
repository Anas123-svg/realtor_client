"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaCheck, FaTimes, FaMapMarkerAlt, FaClock, FaCamera, FaUsers, FaHome, FaTools } from "react-icons/fa";
import { useRouter } from "next/navigation";
import rodaderoImage from "@/assets/santa.jpg";
import tagRod2 from "@/assets/tag_rod2.jpg";
import palRod3 from "@/assets/pal_rod3.jpg";
import heroImage from "@/assets/img124.jpg";

function SellRent() {
    const router = useRouter();

    const comparisonData = [
        {
            category: "Property management",
            services: [
                { name: "Professional cleaning & laundry", ptk: true, competitor: "varies" },
                { name: "Owner Portal with reports & photos", ptk: true, competitor: "not always digital" },
                { name: "24/7 Guest Support", ptk: true, competitor: "slow responses/bots" },
                { name: "Multi-channel management", ptk: true, competitor: false },
                { name: "In-person check-in", ptk: true, competitor: false },
                { name: "Local maintenance network", ptk: true, competitor: false },
                { name: "Local experience guides", ptk: true, competitor: false },
            ],
        },
    ];

    const serviceAreas = [
        {
            title: "Santa Marta",
            description: "Full management for apartments and houses in the city and El Rodadero",
            image: rodaderoImage,
            caption: "Rodadero Beach, Santa Marta"
        },
        {
            title: "Taganga",
            description: "Properties focused on adventure tourism and diving.",
            image: tagRod2,
            caption: "Taganga and nearby bays"
        },
        {
            title: "Palomino",
            description: "Strategies for nature escapes and beach retreats.",
            image: palRod3,
            caption: "Palomino & nearby coastal towns"
        }
    ];

    const { t } = useTranslation();

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="h-20 sm:h-28" />
            <section
                className="relative bg-cover bg-center text-white py-12 md:py-20 px-4 md:px-6"
                style={{ backgroundImage: `url(${heroImage.src})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-6xl mx-auto text-center px-2">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
                        Professional Short-Term Rental Management
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                        Santa Marta & Caribbean Coast
                    </h2>
                    <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                        "Imagine arriving in Santa Marta, leaving traffic and stress behind, and finding yourself at the beautiful beaches of the Colombian Caribbean: a fresh, flawless climate ready for you to relax and enjoy with your family."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                        >
                            Request Free Quote
                        </button>
                        <button
                            onClick={() => router.push("/sell-rent")}
                            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                        >
                            Free Property Audit
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-[90%] md:w-[85%] mx-auto py-12 sm:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-[#070a65]">
                        Why Caribbean Coast Hosts Choose Us
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
                        Because we're more than managers: we're your local family in Santa Marta. We know every wave and every season, and we put our experience, heart, and people into caring for your property as if it were our own.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaHome className="text-4xl text-blue-600 mb-4" />,
                            title: "Cleaning and Linens",
                            desc: "Entering a room that smells fresh with soft sheets and fluffy towels starts the vacation off right. Our team ensures everything is spotless."
                        },
                        {
                            icon: <FaClock className="text-4xl text-green-600 mb-4" />,
                            title: "24/7 Guest Support",
                            desc: "We don't use automated chats: we communicate like humans, in Spanish (and English when needed), resolving everything from a friendly 'good morning' to 'thank you for everything.'"
                        },
                        {
                            icon: <FaCamera className="text-4xl text-purple-600 mb-4" />,
                            title: "Listing Management + Marketing",
                            desc: "We photograph your apartment in natural Caribbean light, tell its story, and publish it on platforms like Airbnb and Booking.com with seasonal pricing adjustments."
                        },
                        {
                            icon: <FaUsers className="text-4xl text-yellow-600 mb-4" />,
                            title: "Local-Flavored Check-in",
                            desc: "We greet guests with a warm smile, give a house tour, and recommend where to have coffee or try ceviche. Digital remote check-in also available."
                        },
                        {
                            icon: <FaMapMarkerAlt className="text-4xl text-red-600 mb-4" />,
                            title: "Owner Portal",
                            desc: "Access your calendar, payments, and reports from anywhere. Check property condition after each cleaning with full transparency."
                        },
                        {
                            icon: <FaTools className="text-4xl text-indigo-600 mb-4" />,
                            title: "Local Maintenance",
                            desc: "Our technicians and suppliers deliver in true 'samario' style: fast, reliable, and close. Immediate response to any property issues."
                        }
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
                        >
                            <div className="text-center">
                                {service.icon}
                                <h3 className="font-bold text-lg mb-3 text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Comparison */}
            <section className="bg-gray-50 py-16">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#070a65] mb-4">
                            Realtor Caribe vs. Other Local Companies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Professional comparison highlighting our capabilities while remaining fair to other local companies
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <div className="min-w-[600px]">
                                {/* Table Header */}
                                <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                    <div className="p-4 font-semibold">Service Features</div>
                                    <div className="text-center p-4 font-semibold border-l border-white/20">
                                        Realtor Caribe
                                    </div>
                                    <div className="text-center p-4 font-semibold border-l border-white/20">
                                        Other Companies
                                    </div>
                                </div>

                                {/* Table Rows */}
                                {comparisonData[0].services.map((item, ii) => (
                                    <div
                                        key={ii}
                                        className={`grid grid-cols-3 p-4 ${ii % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}
                                    >
                                        <div className="text-gray-700 font-medium">{item.name}</div>
                                        <div className="flex justify-center">
                                            <FaCheck className="text-green-500 text-xl" />
                                        </div>
                                        <div className="flex justify-center">
                                            {typeof item.competitor === 'boolean' ? (
                                                item.competitor ? (
                                                    <FaCheck className="text-green-500 text-xl" />
                                                ) : (
                                                    <FaTimes className="text-red-500 text-xl" />
                                                )
                                            ) : (
                                                <span className="text-yellow-600 text-sm font-medium">
                                                    {item.competitor}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Co-hosting Works */}
            <section className="w-[90%] md:w-[85%] mx-auto py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#070a65] mb-6">
                        How Co-hosting with Realtor Caribe Works
                    </h2>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                        We are not a foreign franchise: we are your ally right here in Santa Marta. As a co-host, we take responsibility for:
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Managing your Airbnb listing with a local approach and vibrant Caribbean photos</span>
                            </div>
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Adjusting prices according to the city's tourist seasons</span>
                            </div>
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Providing warm and timely guest support, 24/7</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Solving on-site issues with our team and supplier network</span>
                            </div>
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Keeping you informed with reports, photos, and online access to your property</span>
                            </div>
                            <div className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Local office for in-person customer service</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                        <p className="text-gray-700 font-medium italic">
                            So you can relax while your apartment becomes a coastal home for travelers — no false promises, just local results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Platform Management */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    {/* Wrapper for both sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Airbnb Section */}
                        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                            {/* Header */}
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                                    alt="Airbnb Logo"
                                    className="h-12 mr-4"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">AIRBNB — Co-hosting</h3>
                                    <p className="text-gray-600">How we work with it</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-gray-700 mb-4">
                                    Being a Co-Host doesn't remove your powers: it makes us your extension in Santa Marta. We handle all operations so you receive income without the stress.
                                </p>
                                <h4 className="font-semibold text-gray-800 mb-4">Typical process:</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Initial optimization:</span>
                                                <span className="text-gray-700"> walkthrough and professional photos; descriptions that connect with Caribbean travelers</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Listing and adjustments:</span>
                                                <span className="text-gray-700"> we publish the listing, sync calendars, and apply pricing strategies according to season and local events</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">24/7 support:</span>
                                                <span className="text-gray-700"> we respond to messages, coordinate arrivals and departures, and manage questions and claims with a human touch</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Local operation:</span>
                                                <span className="text-gray-700"> we coordinate professional cleaning, laundry, and maintenance between stays; we send control photos after each cleaning</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Transparency:</span>
                                                <span className="text-gray-700"> access to reports and our Owner Portal; any action outside the agreement requires your authorization</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking.com Section */}
                        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                            {/* Header */}
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                                    B
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">BOOKING.COM</h3>
                                    <p className="text-gray-600">How we work with it</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-gray-700 mb-4">
                                    Booking.com reaches travelers who value speed and trust. At Realtor Caribe, we leverage that visibility with a local focus.
                                </p>
                                <h4 className="font-semibold text-gray-800 mb-4">Typical process:</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Profile creation:</span>
                                                <span className="text-gray-700"> clear descriptions, well-listed services, and photos that reflect Caribbean light and character</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Availability management:</span>
                                                <span className="text-gray-700"> we sync calendars with other platforms to avoid double bookings and maximize occupancy</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Dynamic rates:</span>
                                                <span className="text-gray-700"> we review and adjust prices based on seasons, occupancy, and local events (holidays, fairs, diving seasons)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Guest communication:</span>
                                                <span className="text-gray-700"> pre-arrival messages with instructions and recommendations, followed by post-stay follow-ups to encourage reviews</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-medium text-gray-800">Reports and finances:</span>
                                                <span className="text-gray-700"> payment reconciliation, commission breakdowns, and periodic reports for total transparency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Santa Marta is Profitable */}
            <section className="w-[90%] md:w-[85%] mx-auto py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#070a65] mb-4">
                        Why Become a Host in Santa Marta?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Travel to the Caribbean Coast continues to grow: national and international tourists seek authentic experiences. Turning your property into a professionally managed short-term rental can generate steady income and higher returns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <FaMapMarkerAlt className="text-red-500 mr-3" />
                            Why Santa Marta is Profitable
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Natural attractions: beaches, national parks, and nature activities that attract families and adventure travelers</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Travel diversity: from weekend getaways to longer stays by digital nomads</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Seasonal yet steady demand with consistent regional visitor flow</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <FaUsers className="text-blue-500 mr-3" />
                            Why Hire Local Management?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Immediate response: urgent issues handled within hours, not days</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Verified supplier network with local logistics understanding</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">Market knowledge for Santa Marta pricing realities and events</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="bg-gray-50 py-16">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#070a65] mb-4">
                            Our Service Areas
                        </h2>
                        <p className="text-lg text-gray-600">
                            We operate in Santa Marta and the Caribbean Coast. If your property is in the Colombian Caribbean region, we can visit, evaluate its potential, and propose the best strategy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceAreas.map((area, i) => (
                            <Link
                                key={i}
                                href="/properties?dealType=Rental"
                                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
<img
  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
  src={typeof area.image === "string" ? area.image : area.image.src}
  alt={area.title}
/>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                                        <p className="text-sm mb-2 opacity-90">{area.description}</p>
                                        <p className="text-xs opacity-75">{area.caption}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#F7F3E8] py-16 text-gray-900">
                <div className="w-[90%] md:w-[85%] mx-auto text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-6">
                        Ready to Maximize Your Caribbean Coast Property?
                    </h2>
                    <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                        Are you the owner of an apartment on the Caribbean Coast? We offer a free audit to show how to increase income without losing control.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                        onClick={() => router.push("/sell-rent")} 
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                            Get Free Property Audit
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default SellRent;