<script>
  // Extras.js
  // James "Xio" Pearce <james@jpearce.net>
  // Provides "Start" form styling options for Kiwi IRC
  var vars = [], hash;
  var q = document.URL.split('?')[1];
  if(q != undefined) {
      q = q.split('&');
      for(var i = 0; i < q.length; i++){
          hash = q[i].split('=');
          vars.push(hash[1]);
          vars[hash[0]] = hash[1];
      }
  }
  function inUrl(value) {
     if(location.search.indexOf(value) != -1) {
        return true;
     }
     return false;
  }
  kiwi.events.on('loaded', function() {
     if(inUrl("restrict")) {
        $("tr.channel").hide();
        $("tr.have_pass").hide();
     }
     if(inUrl("no_info")) {
        $(".content").hide();
        $(".kiwi_logo").hide();
     }
     if(inUrl("large_button")) {
        $('button[type="submit"]').css("width", "100%")
                                  .parent().attr("colspan", 2)
                                  .siblings().hide();
     }
     if(vars['button']) {
        $('button').html(decodeURI(vars['button']));
     }
     if(vars['title']) {
        $('.status').html(decodeURI(vars['title']));
     }
  });
</script>
