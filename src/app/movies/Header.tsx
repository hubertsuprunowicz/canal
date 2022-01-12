import { Search } from "components";
import debounce from "lodash.debounce";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { SearchWrapper } from "./styles";

const Header: React.FC = () => {
    const history = useHistory();

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        debouncedSearch(target.value)

    const debouncedSearch = useCallback(
        debounce((searchParam) => history.push({ search: searchParam ? `search=${searchParam}` : "" }), 250),
        []
    )

    return (
        <SearchWrapper>
            <Search data-testid="search-movies-input" type="search" placeholder="Search" onChange={onChange} />
        </SearchWrapper>)
}

export default Header;