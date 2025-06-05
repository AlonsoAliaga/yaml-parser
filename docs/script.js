function test() {
  console.log("TESTING WORKS!")
}
  function forceParser() {
    setTimeout(()=>{
      $("#yaml_form").submit();
    },1000);
  }
  function toggleDarkmode() {
      if (document.getElementById('darkmode').checked == true) {
        document.body.classList.add('dark');
        document.getElementById('yaml').classList.add("darktextboxes");
        
        document.getElementById('appearance').classList.remove("lightbuttonboxes");
        document.getElementById('appearance').classList.add("darkbuttonboxes");
      } else {
        document.body.classList.remove('dark');
        document.getElementById('yaml').classList.remove("darktextboxes");
        //Buttons
        document.getElementById('appearance').classList.remove("darkbuttonboxes");
        document.getElementById('appearance').classList.add("lightbuttonboxes");
      }
      //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
  }
  function checkSite(window) {
    setTimeout(()=>{
      let href = window.location.href;
      if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
        try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
        window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/yaml-parser/`}
    });
    fetch('https://raw.githubusercontent.com/AlonsoAliaga/AlonsoAliagaAPI/refs/heads/main/api/tools/tools-list.json')
      .then(res => res.json())
      .then(content => {
        let toolsData = content;
        let toolsArray = []
        for(let toolData of toolsData) {
          let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
          let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
          toolsArray.push(`<span>💠</span> <span${clazz}${style}><a title="${toolData.description}" id="tool-priority-${toolData.priority}" href="${toolData.link}">${toolData.name}</a></span>`);
        }
        document.getElementById("tools-for-you").innerHTML = toolsArray.join(`<br>`);
      });
  }
  let times = 0;
  function loadCounter() {
   let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NvdW50ZXI/c2l0ZT08c2l0ZT4ma2V5PTxrZXk+").replace(/<site>/g,"yaml-parser").replace(/<key>/g,"KEY-A");
   let counter = document.getElementById("visitor-counter");
   if(counter) {
     $.ajax({
       url: link,
       type: "GET", /* or type:"GET" or type:"PUT" */
       dataType: "json",
       data: {
       },
       success: function (result) {
         if(isNaN(result))
           document.getElementById("counter-amount").innerHTML = "Click to return!";
         else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
       },
       error: function (e) {
         times++;
         document.getElementById("counter-amount").innerHTML = "Click to return!";
         if(times <= 1) {
          setTimeout(()=>{
            loadCounter();
          },1000*10);
         }
       }
     });
   }
  }
  $(function() {
    var submit = function() {
      $("#yaml_form").submit();
      return false;
    };
    $('#yaml').keyup(function() {
      $("#yaml_form").submit();
    });
    $('input:radio[name=type]').click(function() {
      $("#yaml_form").submit();
    });

    $("#yaml_form").submit(function(ev) {
      var inputData = {
        yaml: $("#yaml").val(),
        type: $('input:radio[name=type]:checked').val()
      };
      $.ajax({
        //Yeah, i need to fix this..
        url: "https://yaml-online-parser.appspot.com/ajax?callback=?",
        data: inputData,
        success: function(data) {
          $("#output").text(data);
          //console.log(data);
          if (data.match(/^ERROR/)) {
            $("#output").wrapInner('<span class="error"/>');
          }
          $("#link").attr("href", "?" + $.param(inputData));
        },
        error: function() {
          $("#output").text("An error occured. Try again? Or contact me.");
        },
        type: "POST",
        dataType: "json",
      });
      return false;
    });
    $('textarea#yaml').autoResize({
      // On resize:
      onResize: function() {
        $(this).css({opacity: 0.8});
      },
      // After resize:
      animateCallback: function() {
        $(this).css({opacity: 1});
      },
      // Quite slow animation:
      animateDuration: 300,
      // More extra space:
      extraSpace: 40
    }).keydown();
  });

  document.addEventListener("DOMContentLoaded", () => {
    toggleDarkmode();
    forceParser();
    loadCounter();
    checkSite(window);
  });
  
function processAds() {
  document.getElementById("please-disable-adblock").style.display = "flex"
  //lockCutsWithMessage("adlocked",`Disable AdBlock for this shortcut!`)
}