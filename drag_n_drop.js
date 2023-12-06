const emptyEls = document.querySelectorAll('.empty')
const fillEl = document.querySelector('.fill')


fillEl.addEventListener('dragstart', dragStart)
fillEl.addEventListener('dragend', dragEnd)


for(const emptyEl of emptyEls){
    emptyEl.addEventListener('dragover', dragOver)
    emptyEl.addEventListener('dragenter', dragEnter)
    emptyEl.addEventListener('dragleave', dragLeave)
    emptyEl.addEventListener('drop', dragDrop)
}






function dragStart(){
    this.className += ' hold'

    setTimeout(()=>
    
    this.className = ' invisible',0
    )
}
function dragEnd(){
    this.className = ' fill'
}
function dragOver(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragEnter(e){
    e.preventDefault()
}
function dragLeave(){
    this.className = 'empty'
}
function dragDrop(){
this.className = 'empty'
this.append(fillEl)
}