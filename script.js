function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-mode.png")
    img.setAttribute(
      "alt",
      "Foto de Carlos Alberto com fundo de um salão de beleza"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
