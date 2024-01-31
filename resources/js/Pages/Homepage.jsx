import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React from 'react';

export default function Homepage (props) {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Head title={props.title}/>
            <h1>\
                dkaeokdeaodkoaekdeao
                {props.description}
            </h1>
        </div>
    );
}
