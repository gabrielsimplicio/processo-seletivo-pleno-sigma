'use strict';

var Comics = {
    getComics: function(id, limite, inicio, callback){

        var ts = new Date().getTime();
        var hash = Main.hashGen(ts,'6dae8f1d1e886538671ebe9e68c6ac72fff21b2d','f02c283d580de6ca1d67e0838af81b20');
        var limit = (limite) ? limite : '';
        var offset = (inicio) ? inicio : '';
        
        return Main.get('https://gateway.marvel.com/v1/public/comics?ts='+ts+'&apikey=f02c283d580de6ca1d67e0838af81b20&hash='+ hash+'&limit=' + limit + '&offset=' + offset, function(response){
            return callback(JSON.parse(response));
        });
    },
    getComicCharacters: function(id, callback){
        
        var ts = new Date().getTime();
        var hash = Main.hashGen(ts, '6dae8f1d1e886538671ebe9e68c6ac72fff21b2d','f02c283d580de6ca1d67e0838af81b20');

        return Main.get('https://gateway.marvel.com/v1/public/comics/'+ id + '/characters?ts='+ts+'&apikey=f02c283d580de6ca1d67e0838af81b20&hash=' + hash,function(response){
            callback(JSON.parse(response));
        })

    },
    buildPage : function(){

        var li = "";
        var data, a, li, thumbnail, modal, description;

        modal = document.getElementById('modalLoading');
        modal.className = 'show';

        this.getComics(null, 30, 0, function(response){
            
            data = response.data.results;

            for(a in data){

                if(data[a].thumbnail.path.indexOf('image_not_available') == -1){
                    
                    thumbnail = data[a].thumbnail.path + '/portrait_incredible.' + data[a].thumbnail.extension;
                    description = String(data[a].description).replace(/(['"])/g,"").replace("<br>","");

                    li += `<li data-title="`+ data[a].title +`" data-description="`+ description +`" data-price="`+data[a].prices[0].price+`">
                                <a href="#/comics/`+ data[a].id +`" onclick="showDetails(event,\`comics\`)">
                                    <img src="`+thumbnail+`" />
                                    <span class="title">`+ data[a].title +`</span>
                                    <span class="details">Click for details</span>
                                </a>
                            </li>`;
                    
                }
            }
            
            Main.renderPage('<section id="comics"><h1 class="header">Comics</h1><ul class="parent">'+li+'</ul><div class="loadmore" onclick="loadmore(`comics`)"><span>Load More <i class="fas fa-sync"></i></span></div></section>');
            Main.renderHeader();

            modal.className = '';
        });        
    },
    buildModal : function(id, dataset, callback){

        var li = "";
        var data, a, thumbnail, description, total;

        this.getComicCharacters(id, function(response){
            
            data = response.data.results;
            total = response.data.total;

            description = (dataset.description) == 'null' || (dataset.description) == '' ? 'Sorry... this comic have no description.' : dataset.description;

            if(total > 0){
                for(a in data){

                    if(data[a].thumbnail.path.indexOf('image_not_available') == -1){
                    
                    thumbnail = data[a].thumbnail.path + '/portrait_medium.' + data[a].thumbnail.extension;

                    li += '<li>'
                        +'<div class="img" style="background:url('+ thumbnail +')"></div>'
                        +'<span>' + data[a].name + '</span>'
                        +'</li>'; 
                    }
                }
            }else{
                li = '<li>Sorry... this comic have no characters.</li>';
            }
        
            
            callback('<div>'                       
                        +'<h1>'+ dataset.title +'</h1>'
                        +'<div class="description">'+ String(description) +'</div>'                        
                        +'<ul class="child">'+ li +'</ul>'
                    +'</div>');
        });
    },
    liveLoad : function(offset, callback){

        var li = "";
        var data, a, li, thumbnail, modal, description;

        this.getComics(null, 30, offset, function(response){
            
            data = response.data.results;

            for(a in data){
                if(data[a].thumbnail.path.indexOf('image_not_available') == -1){

                    thumbnail = data[a].thumbnail.path + '/portrait_incredible.' + data[a].thumbnail.extension;
                    description = String(data[a].description).replace(/(['"])/g,"").replace("<br>","");

                    li += `<li data-title="`+ data[a].title +`" data-description="`+ description +`" data-price="`+data[a].prices[0].price+`">
                                <a href="#/comics/`+ data[a].id +`" onclick="showDetails(event,\`comics\`)">
                                    <img src="`+thumbnail+`" />
                                    <span class="title">`+ data[a].title +`</span>
                                    <span class="details">Click for details</span>
                                </a>
                            </li>`;
                }
            }

            callback(li);
        });
    }
}