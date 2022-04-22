import React from 'react';

class Header extends React.Component {
    render() {
        const { toogleSideBar } = this.props;
        return (
        <div>
            <button
            type="button"
            onClick={ toogleSideBar}
            >
                <p>barra lateral, use a imaginação</p>
            </button>
        </div>
        )
    }
}

export default Header;