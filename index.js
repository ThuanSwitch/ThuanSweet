function change()
{
    if(check_login()==0)
    {
        document.getElementById("sub-screen").style.display="block";
        document.getElementById("loggin").style.display="none";
    }
    else
    {
        document.getElementById("game-screen").style.display="block";
        document.getElementById("loggin").style.display="none";
    }
}
function check_login(){
    let get_login = document.getElementById("user-input").value;
    let get_pass=document.getElementById("pass-input").value;
    if (get_login=="Bùi Đào Mỹ Hạnh" && get_pass=="02/03/2004")
    {
        return 1;
    }
    return 0;
}
function getRandomInt(max,min) {
    return Math.floor(Math.random() * (max-min)+min);
  }
function random_place()
{
    x=getRandomInt(80,20);
    y=getRandomInt(80,20);
    document.getElementById("no").style.left=x+"%";
    document.getElementById("no").style.top=y+"%";
}
function change_Yes()
{
    console.log("d");
    document.getElementById("yes").innerText="NO";
}