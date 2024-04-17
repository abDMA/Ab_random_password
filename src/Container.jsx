const labelRange = document.querySelector('.rangeInput')
const rangeValue = document.getElementById('rangeValue')
const colorDegree = document.querySelector('.range')
const options = document.querySelectorAll('.options input')
const btn = document.querySelector('button')
const passinput = document.querySelector('.passValu')
const copySpan = document.querySelector('.material-symbols-outlined')



//================ range value=================


   

//==========================generate the pass by clicking 

let containerOption = {
    lowercase : 'abcdefghijklmnopqrstuvwxyz',
    uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '^%*+(#@>/?,`=&$_:;}].',
    
}
const getPassword = ()=>{
    let staticPass = ''
    let excduplicate = false
    let randomePas = ''
    
    options.forEach(option=>{
     
  if(option.checked){ 
   
    if(option.id !=="spaces" && option.id !=="exc-duplicate"){
        staticPass += containerOption[option.id] 
    }
    else if(option.id === "spaces"){
        staticPass += `  ${staticPass}   `
    }else if (option.id === "exc-duplicate"){
        excduplicate = true
        
    }else{
        staticPass += containerOption[option.id]  
    }
   
            const functionValue = ()=>{
                rangeValue.textContent = labelRange.value;
                        if (labelRange.value <= 6  ) {
                    colorDegree.setAttribute('id','weak')
                }else if(labelRange.value <= 12 ){
                    colorDegree.setAttribute('id','medium')
                }else{
                    colorDegree.setAttribute('id','strong')
                }
            }
           
            functionValue()
            labelRange.addEventListener('input',functionValue)
           
    }
    
})
    for (let i = 0; i < labelRange.value; i++) {
        randomePas += staticPass[Math.floor(Math.random() * staticPass.length)]
        passinput.value = randomePas
       
       
    }
    let zian = [...Array.from(randomePas)].join('')
    let nonzian = [...new Set(zian)].join('')
    if(excduplicate){
        passinput.value = nonzian
        if(nonzian.length != labelRange.value){
            let complete = (labelRange.value - nonzian.length)
            console.log(complete)
            for (let i = 0; i < complete; i++) {
                randomePas += staticPass[Math.floor(Math.random() * staticPass.length)]
                passinput.value = [...Array.from(nonzian)].join("")
               
               
            }
        }
        
      }
      copySpan.addEventListener('click', ()=>{
        navigator.clipboard.writeText(passinput.value).then(()=>{
            copySpan.innerText = 'check'
            copySpan.classList.add("active")
            setTimeout(()=>{
                copySpan.innerText = 'copy_all'
                copySpan.classList.remove("active")
            },1000)

        })
    })
}
btn.addEventListener('click',getPassword)

getPassword()

