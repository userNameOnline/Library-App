function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
      return title + ' by ' + author + ', ' + pages + ' pages'
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}  

function renderLibrary() {
    for(i = 0; i<myLibrary.length; i++) {
        let book = document.createElement('div');
        let info = document.createElement('p');
        let controls = document.createElement('div');
        let removeBtn = document.createElement('button');
        let statusBtn = document.createElement('button');
        let status = document.createElement('p');

        removeBtn.innerHTML = 'Remove';
        removeBtn.id = 'removeBtn';
        statusBtn.innerHTML = 'Change status'
        info.innerHTML = myLibrary[i].info();
        status.innerHTML = myLibrary[i].read;

        book.className = 'book';

        statusBtn.addEventListener('click', (e) => {
            let node = e.target.parentNode.parentNode.children[1];
            if(node.innerHTML === 'Not been read') {
                node.innerHTML = 'Has been read'
            } else {
                node.innerHTML = 'Not been read'
            }
        })

        removeBtn.addEventListener('click', (e) => {
            for(var i=0; i<myLibrary.length; i++) {
                if(e.target.parentNode.parentNode.children[0].innerHTML === myLibrary[i].info()) {
                    myLibrary.splice(i, 1);
                }
            }

            e.target.parentNode.parentNode.remove()
        })

        book.append(info)
        controls.append(removeBtn, statusBtn);
        book.append(status)
        book.append(controls)

        document.getElementById('library').append(book);
    }
}

function showForm() {
    document.querySelector('dialog').showModal();
}

function closeForm(e) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;

    document.getElementById('library').innerHTML = '';

    addBookToLibrary(title, author, pages, status)
    
    renderLibrary()
}
