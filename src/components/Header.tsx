import React, { useState } from "react";

// prop type
type Props = {
    onSearchItems: (e: string) => void
}

// header component
const Header: React.FC<Props> = ({ onSearchItems }) => {

    const [search, setSearch] = useState<string>("");

    return (
        <input
            placeholder="Type for searching..."
            value={search}
            onChange={(e) => {
                setSearch(e.target.value)
                onSearchItems(e.target.value)
            }}
        />
    )

};

export default Header;