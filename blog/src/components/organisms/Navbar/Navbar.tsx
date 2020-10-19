import React from 'react'

type Props = {
    text: string,
};

const Navbar: React.FC<Props> = ({
    text,
}): React.ReactElement => {
    return (
        <div>{text}</div>
    );
};


export default Navbar;