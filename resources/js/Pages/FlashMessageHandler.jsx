import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const FlashMessageHandler = ({ children }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            window.alert(flash.message);
        }
    }, [flash.message]);

    return children;
};

export default FlashMessageHandler;