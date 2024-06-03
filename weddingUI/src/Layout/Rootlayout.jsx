import PropTypes from 'prop-types';

import './../App.css'
import CustomBackground from '../Componets/CustomBackground';

export default function RootLayout({ children }) {
    return (
        <>
            <CustomBackground />
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <span className="text-white">Logo</span>
                        </div>
                        <div className="flex">
                            <a
                                href="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="/upload"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Upload
                            </a>
                            <a
                                href="/Viewuploaded"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto">{children}</main>

        
        </>
    );
}


RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
};