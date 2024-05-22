import React from 'react';

interface ServicesSolutions {
    text: string;
}

export const ServicesSolutions: React.FC<ServicesSolutions> = ({ text }) => {

    return (
        <>
            <p className="paraStyleOne mb-5">{text}</p>
        </>
    );
};
