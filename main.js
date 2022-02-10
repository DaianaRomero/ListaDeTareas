const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    
    p.className = "lista";
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(tacharTareaCompleta(p));
    ul.appendChild(li);
    input.value = "";
    
    

}
    const lista = document.getElementsByClassName("lista").length;
   
  
        if(lista===1){
            const botonBorrar = document.createElement("button");
            botonBorrar.textContent = "Borrar Todo";
            text.textContent="";
            empty.textContent=""
            const div = document.createElement("div");
            div.className="borrar"
            div.appendChild(botonBorrar);
            empty.appendChild(div)
            empty.style.backgroundColor = "pink";

            botonBorrar.addEventListener("click", (e) => {
            
            const list = document.getElementsByTagName("li")

            
            for (let index = 0; index < list.length; index) {
            
                ul.removeChild(list.item(index))
            
            }
            
            const items = document.querySelectorAll("li");

            if (items.length === 0) {
                const item = e.target.parentElement;
                empty.removeChild(item);
                empty.style.backgroundColor = "white";
                empty.textContent="No tienes tareas pendientes."

            }
                
            }
            
                );
        }
     
  }

);








function tacharTareaCompleta(p){
    const tacharBtn = document.createElement("button");

    tacharBtn.textContent = "X";
    tacharBtn.className = "btn-delete";

    tacharBtn.addEventListener("click", (e) => {
    tacharBtn.style.backgroundColor="green"
    tacharBtn.textContent = ":)";
    p.className = "terminado"
   

  });

  return tacharBtn;

}


  