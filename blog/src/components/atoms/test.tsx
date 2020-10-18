import React from 'react'

type Props = {
    text: string,
};

const Test: React.FC<Props> = ({
    text,
}): React.ReactElement => {
    return (
        <div>{text}</div>
    );
};


export default Test;