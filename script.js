//for tiger p tag
let random1= document.querySelector("#word1")
//click
random1.addEventListener("mouseover", function(event){
	random1.textContent="Status: ENDANGERED",
	random1.style.color="red"
	
})
//for tiger pic change 
let random2=document.querySelector("#word2")
//moveover
random2.addEventListener("mouseover", function(event){
	random2.src="animals/tiger2.jpg"
})
//rhino pic 
let random3= document.querySelector("#word3")
//mouseover 

   random3.addEventListener("mouseover", function(event){
	   random3.src="animals/rhino2.jpg"
   })
let random4= document.querySelector("#word4")

random4.addEventListener("mouseover", function(event){
	random4.textContent="Status: ENDANGERED",
	random4.style.color="red"
})
let random5=document.querySelector("#word5")

random5.addEventListener("mouseover", function(event){
	random5.textContent="Status: ENDANGERED",
	random5.style.color="red"
})

let random6= document.querySelector("#word6")

random6.addEventListener("mouseover", function(event){
	   random6.src="animals/oran2.jpg"
   })

let buttons=document.querySelector("#button1")
console.log(buttons)
let p=document.querySelector("#text1")
console.log(p)

buttons.addEventListener("click", function(event){
	p.textContent="Since 1960, the actual number of hunters has increased until peaking at 16.7 million in 1982, after which it began to decline.  The numbers started to climb again after 2010 but remain well below the 1982 peak. In 2020 there were 15.2 million hunters in the U.S."
	p.style.color="red"
})