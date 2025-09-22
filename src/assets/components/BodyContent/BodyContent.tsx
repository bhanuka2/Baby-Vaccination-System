import React from 'react'

type BodyContentProps = {
    children: React.ReactNode;
};

function BodyContent(props: BodyContentProps) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default BodyContent