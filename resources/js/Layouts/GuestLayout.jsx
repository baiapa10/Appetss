// import ApplicationLogo from '@/Components/ApplicationLogo';
import ApplicationLogoLogin from '@/Components/ApplicationLogoLogin';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div >
            <div>
                {/* <Link href="/">
                    <ApplicationLogoLogin className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}
            </div>

                {children}
            {/* <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-300 shadow-md overflow-hidden sm:rounded-lg">
            </div> */}
        </div>
    );
}
