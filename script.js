//side Bar
const menuItems = document.querySelectorAll('.menuItems')

// messages
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages')

// theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customizeTheme')
const fontSize = document.querySelectorAll('.chooseSize span')

const root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.chooseColor span')

// bg
const bg1 = document.querySelector('.bgOne')
const bg2 = document.querySelector('.bgTwo')
const bg3 = document.querySelector('.bgThree')




const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active')

        if(item.id != 'notifications'){
            document.querySelector('.notificationPopup').
            style.display = 'none';
        }else{
            document.querySelector('.notificationPopup').
            style.display = 'block';

            document.querySelector('#notifications .notificationCount').
            style.display = 'none'


        }

       
    })
})



// Message
messagesNotifications.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

    messagesNotifications.querySelector('#messages-notifications .notificationCount').
    style.display = 'none'

    setTimeout( () =>{
        messages.style.boxShadow = 'none'
    }, 3000)

   
})

// theme
const openThemeModal = (e) => {
    themeModal.style.display = 'grid';
}

// close theme 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customizeTheme')){
        themeModal.style.display = 'none'
    }

}



themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)




// remove active class from font size 

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}


// fontSize
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active')

        if(size.classList.contains('fontSizeOne')){
            fontSizes = '10px'
            root.style.setProperty('    --sticky-top-left', '5.4rem')
            root.style.setProperty('    --sticky-top-right', '5.4rem')
        }else if (size.classList.contains('fontSizeTwo')){
            fontSizes = '13px'
            root.style.setProperty('    --sticky-top-left', '5.4rem')
            root.style.setProperty('    --sticky-top-right', '-7rem')
        }else if (size.classList.contains('fontSizeThree')){
            fontSizes = '16px'
            root.style.setProperty('    --sticky-top-left', '-2rem')
            root.style.setProperty('    --sticky-top-right', '-17rem')
        }else if (size.classList.contains('fontSizeFour')){
            fontSizes = '19px'
            root.style.setProperty('    --sticky-top-left', '5rem')
            root.style.setProperty('    --sticky-top-right', '-25rem')
        }else if (size.classList.contains('fontSizeFive')){
            fontSizes = '22px'
            root.style.setProperty('    --sticky-top-left', '`-12rem')
            root.style.setProperty('    --sticky-top-right', '-35rem')
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })
})

// remove active class from color

const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        // console.log('is clicked');
        let primary;

        if(color.classList.contains('colorOne')){
            primary = '252';
        }else if(color.classList.contains('colorTwo')){
            primary = '52';
        }else if(color.classList.contains('colorThree')){
            primary = '352';
        }else if(color.classList.contains('colorFour')){
            primary = '152';
        }else if(color.classList.contains('colorFive')){
            primary = '202';
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary);
    })
})


// theme bg

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
 root.style.setProperty('--light-color-lightness', lightColorLightness)
 root.style.setProperty('--white-color-lightness', whiteColorLightness)
 root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');


    bg2.classList.remove('active')
    bg3.classList.remove('active')

    window.location.reload()
   
})

bg2.addEventListener('click', () => {
    lightColorLightness = '15%'
    whiteColorLightness = '20%'
    darkColorLightness = '95%'

    bg2.classList.add('active');


    bg1.classList.remove('active')
    bg3.classList.remove('active')

    changeBg()
})

bg3.addEventListener('click', () => {
    lightColorLightness = '0%'
    whiteColorLightness = '10%'
    darkColorLightness = '95%'

    bg3.classList.add('active');


    bg1.classList.remove('active')
    bg2.classList.remove('active')

    changeBg()
})

