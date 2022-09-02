function mudartema() {
  document.body.classList.toggle("dark");
  var embed = document.querySelectorAll(".cp_embed_wrapper iframe");

  embed.forEach((element) => {
    var link = element.getAttribute("src");

    if (link.indexOf("theme-id=light") != -1) {
      new_link = link.replace("theme-id=light", "theme-id=dark");
    } else {
      new_link = link.replace("theme-id=dark", "theme-id=light");
    }

    element.setAttribute("src", new_link);
  });
}