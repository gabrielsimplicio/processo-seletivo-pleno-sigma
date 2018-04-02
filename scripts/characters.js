'use strict';

var Characters = {
    getCharacters: function(id, limite, inicio, callback){

        var ts = new Date().getTime();
        var hash = Main.hashGen(ts,'6dae8f1d1e886538671ebe9e68c6ac72fff21b2d','f02c283d580de6ca1d67e0838af81b20');
        var limit = (limite) ? limite : '';
        var offset = (inicio) ? inicio : '';
        
        return Main.get('https://gateway.marvel.com/v1/public/characters?ts='+ts+'&apikey=f02c283d580de6ca1d67e0838af81b20&hash='+ hash+'&limit=' + limit + '&offset=' + offset, function(response){
            return callback(JSON.parse(response));
        });
    },
    getCharactersComic: function(id, callback){
        
        var ts = new Date().getTime();
        var hash = Main.hashGen(ts, '6dae8f1d1e886538671ebe9e68c6ac72fff21b2d','f02c283d580de6ca1d67e0838af81b20');

        return Main.get('https://gateway.marvel.com/v1/public/characters/'+ id + '/comics?ts='+ts+'&apikey=f02c283d580de6ca1d67e0838af81b20&hash=' + hash,function(response){
            callback(JSON.parse(response));
        })

    },
    buildPage : function(){

        var li = "";
        var data, a, li, thumbnail, modal, description;

        modal = document.getElementById('modalLoading');
        modal.className = 'show';

        this.getCharacters(null, 30, 0, function(response){
            
            data = response.data.results;

            for(a in data){

                if(data[a].thumbnail.path.indexOf('image_not_available') == -1){
                    
                    thumbnail = data[a].thumbnail.path + '/portrait_incredible.' + data[a].thumbnail.extension;
                    description = String(data[a].description).replace(/(['"])/g,"").replace("<br>","");

                    li += `<li data-name="`+data[a].name+`" data-description="`+ description +`">
                                <a href="#/characters/`+data[a].id+`" onclick="showDetails(event,\`characters\`)">  
                                    <img src="`+thumbnail+`" />
                                    <span class="name">`+data[a].name+`</span>
                                    <span class="details">Click for details</span>
                                </a>
                            </li>`;
                }
            }
            
            Main.renderPage('<section id="characters"><h1 class="header">Characters</h1><ul class="parent">'+li+'</ul><div class="loadmore" onclick="loadmore(`characters`)"><span>Load More <i class="fas fa-sync"></i></span></div></section>');
            Main.renderHeader();

            modal.className = '';
        });      
    },
    buildModal : function(id, dataset, callback){

        var li = "";
        var data, a, thumbnail, description, total;

        this.getCharactersComic(id, function(response){
            
            data = response.data.results;
            total = response.data.total;

            description = (dataset.description) == 'null' || (dataset.description) == '' ? 'Sorry... this character have no description.' : dataset.description;

            if(total > 0){
                for(a in data){

                    if(data[a].thumbnail.path.indexOf('image_not_available') == -1){
                    
                    thumbnail = data[a].thumbnail.path + '/portrait_medium.' + data[a].thumbnail.extension;

                    li += '<li>'
                        +'<img src="'+ thumbnail +'" />'
                        +'<span>' + data[a].title + '</span>'
                        +'</li>'; 
                    }
                }
            }else{
                li = '<li>Sorry... this character have no comics.</li>';
            }
        
            
            callback('<div>'
                        +'<h1>'+ dataset.name +'</h1>'
                        +'<div class="description">'+ String(description) +'</div>'                        
                        +'<ul class="child">'+ li +'</ul>'
                    +'</div>');
        });
    },
    liveload : function(offset, callback){

        var li = "";
        var data, a, li, thumbnail, modal, description;

        this.getCharacters(null, 30, offset, function(response){
            data = response.data.results;

            for(a in data){

                if(data[a].thumbnail.path.indexOf('image_not_available') == -1){
                    
                    thumbnail = data[a].thumbnail.path + '/portrait_incredible.' + data[a].thumbnail.extension;
                    description = String(data[a].description).replace(/(['"])/g,"").replace("<br>","");

                    li += `<li data-name="`+data[a].name+`" data-description="`+ description +`">
                                <a href="#/characters/`+data[a].id+`" onclick="showDetails(event,\`characters\`)">  
                                    <img src="`+thumbnail+`" />
                                    <span class="name">`+data[a].name+`</span>
                                    <span class="details">Click for details</span>
                                </a>
                            </li>`;
                }
            }

            callback(li);
        });
    }
}