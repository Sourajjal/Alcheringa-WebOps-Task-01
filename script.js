//Toggle side-navbar open and close
let navreveal = document.querySelector('.navreveal');
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let usercontainer = document.querySelector('.usercontainer')
let topcontainer = document.querySelector('.topcontainer')
let togglenav = false;

navreveal.addEventListener('click',() => {
    if(togglenav == false){
        nav.classList.remove('hidden');
        togglenav = true;
    }
})
main.addEventListener('click', (evt) => {
    if((evt.target === main || evt.target === usercontainer || evt.target === topcontainer) && togglenav){
        nav.style.animation = 'navhide 1s forwards';
        setTimeout(() => {
            nav.classList.add('hidden');
            togglenav = false;
            nav.style.animation = '';
        }, 1000);
    }
})

//Toggle dropdown menus
let dropdowns = document.querySelectorAll('.dropdown')
let dropdownlists = document.querySelectorAll('.dropdown-list')
let chevronicons = document.querySelectorAll('.chevron-icon')
let togglelist = false;

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click',displaylist = (evt) => {
        let listno = evt.target.getAttribute('listno');
        dropdownlists.forEach((dropdownlist) => {
            let listnum = dropdownlist.getAttribute('listno');
            if(listno == listnum){
                let chevronicon = chevronicons[listnum-1];
                if(togglelist == false){
                    dropdownlist.classList.add('reveal');
                    dropdownlist.classList.remove('hidden');
                    chevronicon.classList.remove('bx-chevron-down')
                    chevronicon.classList.add('bx-chevron-up')
                    togglelist = true;
                }
                else{
                    dropdownlist.classList.add('hidden');
                    dropdownlist.classList.remove('reveal');
                    chevronicon.classList.remove('bx-chevron-up')
                    chevronicon.classList.add('bx-chevron-down')
                    togglelist = false;
                }
            }
        });
    });
});

//Delete button removes deleted row from DOM
let delbtns = document.querySelectorAll('.delete');
let rows = document.querySelectorAll('.rowitem');

delbtns.forEach((delbtn) => {
    delbtn.addEventListener('click', (evt) => {
        rowno = evt.target.getAttribute('rowno');
        rows.forEach((row) => {
            rownum = row.getAttribute('rowno');
            if(rowno == rownum){
                row.remove();
            }
        });
    });
});

//Edit button prompts user for input
let editbtns = document.querySelectorAll('.edit');

editbtns.forEach((editbtn) => {
    editbtn.addEventListener('click', (evt) => {
        rowno = evt.target.getAttribute('rowno');
        rows.forEach((row) => {
            rownum = row.getAttribute('rowno');
            if(rowno == rownum){
                itemlist = row.childNodes;
                let item1 = prompt('Edit Table item 1', itemlist[1].innerText);
                let item2 = prompt('Edit Table item 2', itemlist[3].innerText);
                let item3 = prompt('Edit Table item 3', itemlist[5].innerText);
                if(item1 != ''){itemlist[1].innerText = item1;} 
                if(item2 != ''){itemlist[3].innerText = item2;}
                if(item3 != ''){itemlist[5].innerText = item3;}
                if(item1 == '' || item2 == '' || item3 == ''){alert("Blank entries will not be updated in table")}
            }
        });
    });
});