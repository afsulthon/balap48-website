import {NavItem, NavBar} from "./navbar.js";
import {Footer} from "./footer.js";

const generate_nav_footer = () => {
    const navBar = new NavBar();

    const berandaNavItem = new NavItem("Beranda", "/");
    navBar.add(berandaNavItem);
    
    const memberNavItem = new NavItem("Member", "/member/");
    navBar.add(memberNavItem);

    const kontakNavItem = new NavItem("Kontak", "/kontak/");
    navBar.add(kontakNavItem);

    const tentangNavItem = new NavItem("Tentang", "/tentang/");
    navBar.add(tentangNavItem);

    // ... Extendable nav
    
    const footer = new Footer();
    
    const body = document.getElementsByTagName("body")[0];
    body.prepend(navBar.getNode());
    body.append(footer.getNode());
}

export default generate_nav_footer;