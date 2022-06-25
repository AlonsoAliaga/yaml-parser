let darkmode = true;
function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
/*
      document.getElementById('output-format').classList.add("dark");
      document.getElementById('color-preset').classList.add("dark");
      document.getElementById('numOfColors').classList.add("dark");
      document.getElementById('emojis').classList.add("darktextboxes");
      document.getElementById('graylabel1').classList.replace("gray", "darkgray");
      document.getElementById('graylabel2').classList.replace("gray", "darkgray");
      document.getElementById('outputText').classList.replace("gray", "darkgray");
      document.getElementById('outputText').classList.replace("gray", "darkgray");
      document.getElementById('error').classList.replace("errortext", "darkerrortext");
      document.getElementById('warning-iridium').classList.replace("errortext", "darkerrortext");
      document.getElementById('warning-iridium-decoration').classList.replace("errortext", "darkerrortext");
      document.getElementById('numOfColors').classList.add("darktextboxes");
      document.getElementById('nickname').classList.add("darktextboxes");
      document.getElementById('outputText').classList.add("darktextboxes");
      Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
        document.getElementById(e.id).classList.add("darktextboxes");
      })
      */
    } else {
      document.body.classList.remove('dark');
      /*
      document.getElementById('output-format').classList.remove("dark");
      document.getElementById('color-preset').classList.remove("dark");
      document.getElementById('numOfColors').classList.remove("dark");
      document.getElementById('emojis').classList.remove("darktextboxes");
      document.getElementById('graylabel1').classList.replace("darkgray", "gray");
      document.getElementById('graylabel2').classList.replace("darkgray", "gray");
      document.getElementById('outputText').classList.replace("darkgray", "gray");
      document.getElementById('error').classList.replace("darkerrortext", "errortext");
      document.getElementById('warning-iridium').classList.replace("darkerrortext", "errortext");
      document.getElementById('warning-iridium-decoration').classList.replace("darkerrortext", "errortext");
      document.getElementById('numOfColors').classList.remove("darktextboxes");
      document.getElementById('nickname').classList.remove("darktextboxes");
      document.getElementById('outputText').classList.remove("darktextboxes");
      Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
        document.getElementById(e.id).classList.remove("darktextboxes");
      })
      */
    }
    console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
}
toggleDarkmode();