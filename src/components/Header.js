import React from 'react';
import {Link} from 'react-router-dom'
export default function Header({text}) {
	return (
		<header
			id="header"
			className="max-w-fullscreen bg-darkCyan bg-opportunity md:bg-opportunity bg-no-repeat bg-cover h-96 mb-12  text-white flex flex-col justify-center "><div><Link className="ml-2 mt-4 flex  p-2 border-2 border-white h-12 w-48 m-auto text-white text-sm opacity-75" activeClass="active"  to="/" ><i className="fa-solid fa-arrow-left  fa-xl"></i>{''}Retour à l'acceuil</Link></div><p className="m-auto uppercase font-bold text-xxxl opacity-75 ">{text}</p></header>
	);
}