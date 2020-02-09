import React, { useState, useEffect, useRef } from 'react';
import axiosBranch from '../../../axios-branch';

import svg from '../../../assets/images/sprites.svg';
import classes from './SearchBar.module.scss';
import SearchItem from './SearchItem/SearchItem';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    let searchWrapper = useRef(null);

    const onEscKeyDown = (event) => {
        if(event.keyCode === 27) {
            if(showSearchResults) {
                setShowSearchResults(showSearchResults => false);
            }
        }
    }

    const onClickOutside = (event) => {
        if((searchWrapper.current && !searchWrapper.current.contains(event.target)) && showSearchResults) {
            setShowSearchResults(showSearchResults => false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onEscKeyDown);
        window.addEventListener('mousedown', onClickOutside);
        return () => {
            window.removeEventListener('keydown', onEscKeyDown);
            window.removeEventListener('mousedown', onClickOutside);
        }
    });

    const onInputChanged = (event) => {
        event.preventDefault();

        let inp = event.target.value;
        setSearchValue(inp);
        setShowSearchResults(showSearchResults => inp.length > 0);

        axiosBranch.get(`/search?incl=${event.target.value}`).then(result => {
            setSearchResults(result.data.branches);
        });
    }

    const onSearchResultClickedHandler = () => {
        setShowSearchResults(showSearchResults => false);
        setSearchValue("");
        setSearchResults([]);
    }

    const onSearchSubmitHandler = (event) => {
        event.preventDefault();
    }

    let searchResultClassList = [classes.SearchResults];
    if(!showSearchResults) {
        searchResultClassList = [classes.SearchResults];
    } else {
        searchResultClassList = [classes.SearchResults, classes.SearchResults__Shown];
    }
    let style = {};
    let searchContent = <p>Öyle bir şube bulunamadı!</p>;
    if(searchResults.length > 0) {
        searchContent = searchResults.map(item => {
            return <SearchItem 
                key={item._id}
                {...item}
                clicked={onSearchResultClickedHandler}
            />;
        });
    }

    if(searchResults.length > 4) {
        style = {
            overflowY: 'scroll'
        };
    }

    return (
        <div className={classes.SearchBarWrapper} ref={searchWrapper}>
            <form className={classes.SearchBar} onSubmit={onSearchSubmitHandler}>
                <input 
                    type="text"
                    placeholder="Aradığınız şube ismi"
                    className={classes.SearchInput}
                    value={searchValue}
                    onChange={(event) => onInputChanged(event)}
                />
                
                <button className={classes.SearchButton}>
                    <svg className={classes.SearchIcon}>
                        <use xlinkHref={`${svg}#icon-search`}></use>
                    </svg>
                </button>
            </form>

            <div className={searchResultClassList.join(' ')} style={style}>
                {searchContent}
            </div>
        </div>
    )
}

export default SearchBar;