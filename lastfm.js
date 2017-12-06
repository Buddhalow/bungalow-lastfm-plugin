define([
], function (
) {
   document.addEventListener('mainmenuload', (e) => {
        
   });
    document.addEventListener('viewstackloaded', () => {
    
        
    });
    document.addEventListener('hook_searchview', (e) => {
      
    })
    document.addEventListener('viewload', (e) => {
        if (/^bungalow:artist:(.*)$/g.test(e.detail.uri)) {
            var tab = e.detail.addTab('lastfm-biography', '<i class="fa fa-lastfm"></i> Biography');
            
            tab.style.display = 'relative';
            $.getJSON('/api/lastfm/artist/' + encodeURI(e.detail.state.name), function (result) {
                console.log(result);
                tab.innerHTML = '<div class="plate">' + result.bio.description + '</div>';
            });
            
        }
    })
});