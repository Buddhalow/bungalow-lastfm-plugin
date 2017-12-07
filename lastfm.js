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
        if (/^bungalow:artist:(.*)$/.test(e.detail.uri)) {
            var tab = e.detail.addTab('lastfm-biography', '<i class="fa fa-lastfm"></i> Biography');
            var container = document.createElement('div');
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.width = '100%';
            container.style.height = '100%';
            tab.appendChild(container);
            tab.style.alignItems = 'center';
            tab.style.justifyContent = 'center';
            $.getJSON('/api/lastfm/artist/' + encodeURI(e.detail.state.name), function (result) {
                console.log(result);
                container.innerHTML = '<div class="plate">' + result.bio.description + '</div>';
            });
            
        }
    })
});