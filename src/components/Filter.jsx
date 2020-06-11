import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {setSearchQuery} from "../actions/filter";

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
        >All
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'price_hight'}
            onClick={setFilter.bind(this, 'price_hight')}
        >Price(expensive)
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
        >Price(cheap)
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}
        >Author
        </Menu.Item>
        <Menu.Item>
            <Input
                icon="search"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Search book"
            />
        </Menu.Item>
    </Menu>)


export default Filter;