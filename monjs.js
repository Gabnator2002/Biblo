

  $(document).ready(function(){
    $("#ajouterartist").click(function(){
        
      // window.open("ajouterartist.html","_self")
      alert(" page admin pour auteur")
    });
  });

  $(document).ready(function(){
    $("#ajouterprix").click(function(){
      // window.open("ajouterprix.html","_self")
      alert(" page admin pour prix")
    });
  });

  $(document).ready(function(){
    $("#ajoutermeilleurprix").click(function(){
      // window.open("ajoutermeilleurprix.html","_self")
      alert(" page admin pour meilleur prix")
    });
  });

  $(document).ready(function(){
    $("#share").click(function(){
      alert("partage sur facebook")
    });
  });

  $(document).ready(function(){
    $("#acheter").click(function(){
        alert("va sur un site d'achat")        
    });
  });


  $(document).ready(function(){
    $("#voirfichierxml").click(function(){
        $("#div1").load("xml.xml")        
    });
  });
  
  
  $(document).ready(function(){
    $(".cancelbtn").click(function(){
      window.open("index.html","_self")
    });
  });
  
  
  function bonjouradmin(){
    alert("Bonjour ADMIN")
  }
  function auteur_prem(){

    window.open("auteur_prem.html")   

  }
  function auteur_login(){
    // on recupere les 2 mots de passe et si il son pareil on ouvre une fenetre

    const a = document.getElementById("m1").value
    const b = document.getElementById("m2").value
    if(a==b)   
    { window.open("auteurlogin.html") 
    }
    else{alert("lse mots de passe sont pas pareil")}
  }
  function auteur2(){
    window.open("auteur.html") 
  }  


  function jury_prem(){
    
    window.open("jury_prem.html")
 
  }

function jury_login(){
  // on recupere les 2 mots de passe et si il son pareil on ouvre une fenetre
  const a = document.getElementById("m3").value
  const b = document.getElementById("m4").value
  if(a==b)   
  { window.open("jurylogin.html")  }
  else{alert("lse mots de passe sont pas pareil")}  
  
}

function jury2(){
  window.open("jury.html") 
}  

function env_form(){
  // ca doiut aller dans la base de donnee
  alert('informations envoye a admin')
}
  
function env_info(){
  // ca doiut aller dans la base de donnee
  alert('informations mise a jour')
}
  
function click1(){
  // on recupere les valeurs et on affiche
  // ca doiut aller dans la base de donnee
  const a = document.getElementById("d1").value
  const b = document.getElementById("d2").value
  const c = document.getElementById("d3").value
  const d = document.getElementById("d4").value
  alert('enregistré note: '+a+" "+b+" "+c+" "+d);
}

function click2(){
  // on recupere les valeurs et on affiche
  // ca doiut aller dans la base de donnee  
  const a = document.getElementById("d5").value
  const b = document.getElementById("d6").value
  const c = document.getElementById("d7").value
  const d = document.getElementById("d8").value
  alert('enregistré note: '+a+" "+b+" "+c+" "+d);
}

TitreLivre = ["livre de musique","livre de theatre","livre sur les jeux videos","saas"]
AuteurLivre = ["toto", "pam", "poum","saas"]
resume = ["livre de toto","ksdjfc kjd lkhK HKJ","lj,xncinc noiflkze nfel","sasa"]




$(document).ready(function(){  
  if (window.location.pathname == '/index.html'){
    Long = TitreLivre.length;
    NbAlea =  Math.floor(Math.random() * Math.floor(Long));
    document.getElementById("titrealea").innerHTML = "<strong>" + TitreLivre[NbAlea]+ "</strong>" ;
    document.getElementById("titrealea").innerHTML += " de ";
    document.getElementById("titrealea").innerHTML += "<strong>" + AuteurLivre[NbAlea]+ "</strong>" ;    
    document.getElementById("titrealea").innerHTML += "<br>";
    document.getElementById("titrealea").innerHTML += "<br>";
    document.getElementById("titrealea").innerHTML += "<i>" + resume[NbAlea]+ "</i>" ;        
  }
});

var ladate=new Date()
var h=ladate.getHours();
if (h<10) {h = "0" + h}
var m=ladate.getMinutes();
if (m<10) {m = "0" + m}
var s=ladate.getSeconds();
if (s<10) {s = "0" + s}
document.write("Heure du jour  : ");
document.write(h+":"+m+":"+s)


