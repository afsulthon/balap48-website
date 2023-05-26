class Footer{
    constructor(){
        this.node = document.createElement("footer");
        this.node.className = "bg-black text-white pb-2 pt-4";
        this.node.innerHTML = `
            <!-- Footer Start -->
            <div class="container text-center">
                <p class="my-0 pb-1">
                <a href="https://twitter.com/balap48_ofc" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-twitter fa-lg px-2 text-white"></i>
                </a>
                <a href="https://www.instagram.com/balap48_ofc" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram fa-lg px-2 text-white"></i>
                </a>
                <a href="https://tiktok.com/@balap48_ofc" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-tiktok fa-lg px-2 text-white"></i>
                </a>
                <a href="https://www.youtube.com/@balap48_ofc" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-youtube fa-lg px-2 text-white"></i>
                </a>
                </p>
                <p>Copyright &copy; 2023
                BALAP48 All Rights Reserved</p>
            </div>
            <!-- Footer End -->
    `;
    }

    getNode(){
        return this.node;
    }
}

export {Footer};