'use strict';

var http = new XMLHttpRequest();

window.location.hash = '#/home';

var Main = {
    get : function(url, callback){
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200)
                callback(http.response);
        }
        http.open("GET", url);        
        http.send();
    },
    hashGen : function(ts, privateKey, publicKey){        
        
        var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

        return hash;
    },
    render : function(url){

        var load = {
            'home' : function(){
                Home.buildPage();
            },
            'comics' : function(){                
                Comics.buildPage();
            },
            'characters' : function(){
                Characters.buildPage();
            }
        }
        if(url != undefined)
        {
            var path = url.split('/')[1];
            
            if(typeof load[path] == 'function'){
                load[path]();
            }else{
                console.log('página não encontrada');
            }
        }else{
            load['home']();
        }        
    },
    renderModalDetails : function(element, data){

        var hash = element.target.parentElement.hash.split('/')[2];
        
        if(document.getElementById('modal-'+ hash) == null){
            element.srcElement.parentElement.insertAdjacentHTML(
                'beforeend',
                '<div id="modal-' + hash + '" class="modalDetails"><div class="loading"><span>Loading...</span></div></div>'
            );
        }

        this.showModal('modal-' + hash);
    },
    showModal : function(id){
        document.getElementById(id).className += " show";
    },
    renderPage : function(data){        
        document.getElementsByTagName("main")[0].innerHTML = data;
    },
    renderHeader : function(){
        var content = `<header>
                            <div class="logo">
                                <img src="assets/images/logo.png" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#/home">Home</a></li>
                                    <li><a href="#/comics">Comics</a></li>
                                    <li><a href="#/characters">Characters</a></li>
                                </ul>
                            </nav>
                        </header>`;

        if(document.getElementsByTagName("header").length == 0){
            document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', content);
        }
    },
    renderLiveLoad : function(data){
        document.getElementsByTagName('ul')[1].insertAdjacentHTML('beforeend', data);
    }
}

window.onhashchange = function(){
    Main.render(window.location.hash);
}

function showDetails(e, parent){

    e.preventDefault();
    
    if(!e.target.parentElement.classList.contains("active")){
        
        var hash = e.target.parentElement.hash.split('/')[2];
        var dataset = e.srcElement.parentElement.parentElement.dataset;

        var load = {
            'comics' : function(){
                Comics.buildModal(hash, dataset, function(response){
                    document.getElementById('modal-'+ hash).innerHTML = '<span class="close">Close</span>' + response;
                    document.getElementById('modal-'+ hash).className += " active";
                });
            },
            'characters' : function(){  
                Characters.buildModal(hash, dataset, function(response){
                    document.getElementById('modal-'+ hash).innerHTML = '<span class="close">Close</span>' + response;
                    document.getElementById('modal-'+ hash).className += " active";
                });
            }
        }

        load[parent]();

        Main.renderModalDetails(e);
    }
    else{
        e.target.parentElement.classList.remove("active");

        if(e.target.parentElement.classList.contains("show")){
            e.target.parentElement.classList.remove("show");
        }else{
            e.target.parentElement.className += " show";
        }
    }
}

function loadmore(path){

    var ul = document.getElementsByTagName('ul')[1];
    var spinner = document.getElementsByClassName('loadmore')[0];

    spinner.children[0].children[0].className += " loading";
    
    var load = {
        'comics' : function(){
            Comics.liveLoad(ul.childElementCount, function(response){
                Main.renderLiveLoad(response);
                spinner.children[0].children[0].classList.remove("loading");
            });
        },
        'characters' : function(){  
            Characters.liveload(ul.childElementCount, function(response){
                Main.renderLiveLoad(response);
                spinner.children[0].children[0].classList.remove("loading");
            });
        }
    }

    load[path]();
    
}
