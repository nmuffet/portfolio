
const fontLetters = ['A','B','C','D','E','G','H','I','K','M','N','O','P','R','S','T','U','V','W','a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z','0','1','2','3','4','-','–','—','°']
const allGlyphs = document.querySelectorAll('.all-glyphs span');
const glyphDisplay = document.querySelector('.glyph-display');

allGlyphs.forEach((glyph) => {
    glyph.addEventListener('mouseover', () =>{
        glyphDisplay.innerHTML = glyph.innerHTML;
    });
});



/*function display(letter){
    letter.onHover
    displaybox=letter
}*/