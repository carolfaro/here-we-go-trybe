import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor() {
        super()
        this.state = {
            links: [
                {name: "Agenda", 
                link: '/agenda'},
                {name: "Projetos", 
                link: '/projetos'},
                {name: "Aula ao vivo", 
                link: '/aulaoavivo'},
                {name: "TrybeTalks", 
                link: '/trybetalks'}
            ]
        };
    }
    render() {
        const { links } = this.state;
        return (
    <div>
        <h2> Conteúdos</h2>
      {links.map((ele) => (
      <Link key={ ele.name } to={ ele.link }>{ ele.name }</Link>))}
    </div> 
        )
    }
}

export default SideBar;
