const FullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const ContainerDarkModeCheckbox = document.querySelector('#container-dark-mode')
const container = document.querySelector('.container')

FullDarkModeCheckbox.addEventListener('change', () =>{
    if(FullDarkModeCheckbox.checked){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }

    ContainerDarkModeCheckbox.checked = FullDarkModeCheckbox.checked
})


ContainerDarkModeCheckbox.addEventListener('change',() =>{
    if(ContainerDarkModeCheckbox.checked){
        container.classList.add('dark')
    }
    else{
        container.classList.remove('dark')
    }
})