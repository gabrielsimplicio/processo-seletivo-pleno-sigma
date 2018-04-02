var Home = {
    buildPage : function(){

        if(document.getElementsByTagName("header").length > 0){
            document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("header")[0]);
        }   

        var content = `<section id="home">
                        <h1>Your fun starts here...</h1>
                        <h3>Choose an option below to continue... be careful</h3>
                        <ul>
                            <li style="background:url(assets/images/characters.jpg)">
                                <a href="#/comics">
                                    <span>The Comics</span>
                                </a>
                            </li>
                            <li style="background:url(assets/images/comics.jpg)">
                                <a href="#/characters">                                
                                    <span>The Characters</span>
                                </a>
                            </li>
                        </ul>
                        </section>`;

        Main.renderPage(content);
    }
}