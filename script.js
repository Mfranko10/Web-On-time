const modeDark = document.querySelector('#checkbox_toggle');
const textModeDark = document.querySelector('.text-modedark');
const rootcss = document.documentElement.style;

function chanceMode() {
    if(!modeDark.checked){
        //Section Day
        textModeDark.textContent = 'Dark';
        rootcss.setProperty('--background-color', '#FFF');
        rootcss.setProperty('--white-color-text','#FFF');
        rootcss.setProperty('--black-color-text','#000');
        rootcss.setProperty('--box-shadow-color','#000');
        rootcss.setProperty('--border-button-color','#000');
        rootcss.setProperty('--background-color-button','#3A5166');
        rootcss.setProperty('--background-hover-color-button','#DAC058');
        rootcss.setProperty('--background-color-footer','#222');
        rootcss.setProperty('--border-color-kit','#0B2447');
} else{
        // Section night
        textModeDark.textContent = 'Light';
        rootcss.setProperty('--background-color', '#222');
        rootcss.setProperty('--white-color-text','#222');
        rootcss.setProperty('--black-color-text','#FFF');
        rootcss.setProperty('--box-shadow-color','#FFF');
        rootcss.setProperty('--border-button-color','#FFF');
        rootcss.setProperty('--background-color-button','#DAC058');
        rootcss.setProperty('--background-hover-color-button','#3A5166');
        rootcss.setProperty('--background-color-footer','#A5D7E8');
        rootcss.setProperty('--border-color-kit','transpatent');
    }
}

modeDark.addEventListener('click', chanceMode)
console.log(modeDark.value);