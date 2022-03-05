function todoListFill() {
    todoListClear()
    todoListClear()
    todoListClear()

    let todoItems = JSON.parse(localStorage.getItem("todoList"))
    if (todoItems) {
        let ulDom = document.querySelector("#list")

        todoItems.forEach((item, index) => {
            let liDom = document.createElement("li")
            liDom.innerHTML = `${index + 1} - ${item}
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onclick=deleteItem(${index})>
                    <span aria-hidden="true">&times;</span>
                </button>
            `
            ulDom.append(liDom)
        })
    }

}

todoListFill()

function todoListClear() {
    let ulDom = document.querySelector("#list")
    for (let i = 0; i < ulDom.childNodes.length; i++)
        ulDom.removeChild(ulDom.childNodes[i]);
}

function deleteItem(index) {
    let conf = confirm("Bu elemanı silmek istediğinizden emin misiniz?")
    if (conf) {
        todoListClear()
        todoListClear()
        todoListClear()

        let oldItems = JSON.parse(localStorage.getItem("todoList"))
        oldItems.splice(index, 1)
        localStorage.setItem("todoList", JSON.stringify(oldItems))

        todoListClear()
        todoListClear()
        todoListClear()
        
        todoListFill()

        $('#liveToast3').toast('show')
    }
}

function markItem(index) { }

function newElement() {
    let newItem = document.querySelector("#task").value;

    if (newItem) {

        let isNull = true
        for (let i = 0; i < newItem.length; i++) {
            if (newItem[i] != " ") {
                isNull = false
                break
            }
        }

        if (isNull == true) {
            $('#liveToast2').toast('show')
        }
        else {
            todoListClear()

            let oldItems = JSON.parse(localStorage.getItem("todoList"))

            if (oldItems) {
                oldItems.push(newItem)
                localStorage.setItem("todoList", JSON.stringify(oldItems))
            }
            else {
                let arrItem = []
                arrItem[0] = newItem
                localStorage.setItem("todoList", JSON.stringify(arrItem))
            }

            
            todoListFill()

            $('#liveToast1').toast('show')
            document.querySelector("#task").value = "";
        }
    }
    else {
        $('#liveToast2').toast('show')
    }
}