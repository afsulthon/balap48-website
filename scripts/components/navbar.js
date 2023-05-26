class NavItem{
    constructor(name, href){
        this.name = name;
        this.href = href;
        this.node = document.createElement("li");
        this.node.className = "nav-item";
        this.node.innerHTML = 
        `
            <a class="nav-link" name=${name} href="${href}">
                ${name}
            </a>
        `
    }
    getNode(){
        return this.node;
    }
}

class NavBar{
    constructor(){
        this.node = document.createElement("nav");
        this.node.className = "navbar navbar-expand-lg navbar-dark bg-black shadow-sm fixed-top";
        this.node.innerHTML = `
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/images/logo-2.svg" alt="Logo BALAP48" height="15">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
        
                    <!-- Here lies nav items -->
        
                    </ul>
                </div>
            </div>`
    }
    /**
     * @public
     * Menambahkan NavItem baru ke dalam NavBar
     * @param {NavItem} navItem 
     * @returns {void}
     */
    add(navItem){
        const navList = this.node.getElementsByClassName("navbar-nav")[0];
        const a = navItem.getNode().querySelector("a");
        if(navItem.href === window.location.pathname){
            a.classList.add("active");
            a.ariaCurrent = "page";
        }
        navList.appendChild(navItem.getNode());
    }

    getNode(){
        return this.node;
    }
}


export {NavItem, NavBar};
