window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Page loaded");
}

for (let i = 0; i < 100;) {
    //Spawn div
    let nyDiv = document.createElement("div");
    let sparkNum = (Math.floor(Math.random() * 5) + 1);
    nyDiv.className = "spark" + sparkNum;
    document.getElementById("stars").appendChild(nyDiv);

    //Give div random position
    let ranHor = Math.floor((Math.random()*100))+"vw";
    let ranVer = Math.floor((Math.random()*100))+"vh";
    nyDiv.style.left= ranHor;
    nyDiv.style.top= ranVer;
    i += 1;

    nyDiv.addEventListener("animationend", respawn);
}

function respawn() {
    this.classList = "";
    this.offsetLeft;

    //Give div random position
    let ranHor = Math.floor((Math.random()*100))+"vw";
    let ranVer = Math.floor((Math.random()*100))+"vh";
    this.style.left= ranHor;
    this.style.top= ranVer;
    let sparkNum = (Math.floor(Math.random() * 5) + 1);
    this.classList.add("spark" + sparkNum);
}