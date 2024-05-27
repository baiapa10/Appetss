import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-2 border-[rgba(253, 201, 152, 1)] focus:border-[rgba(253, 201, 152, 1)] focus:ring-[rgba(253, 201, 152, 1)] rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
