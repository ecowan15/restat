// From http://code.google.com/p/js-uri/source/browse/trunk/lib/URI.js
// Function to parse MTurk URL to get WorkerID

// from AT, May 2022

$.extend({
  getUrlVars: function(){
    var parser = /^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/;
    var result = window.location.href.match(parser);
    var scheme    = result[1] || null;
    var authority = result[2] || null;
    var path      = result[3] || null;
    var query     = result[4] || null;
    var fragment  = result[5] || null;

    if (query === null || query === undefined) {
      return {};
    }
    var vars = [], hash;
    var hashes = query.split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});