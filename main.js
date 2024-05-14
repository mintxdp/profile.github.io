
let openbtn = document.querySelector('.arrow_h')
let sidebar = document.querySelector('.sidebar')
let banner = document.querySelector('.banner')
let nameplate = document.querySelector('.nameplate')
window.addEventListener('resize',function(){
    if(this.window.innerWidth)
    sidebar.style.display='none'
})
nameplate.addEventListener('click',function (){
console.log('clicked')


if(window.innerWidth < 700){
   
    gsap.to(".banner",{
        y:'-40px',
       duration:1
       
    })
    gsap.to(".sidebar",{
        display:'none',
        border:'solid black 1px',
        duration:1,
        y:'-60px'
    })

}
else{
    gsap.to(".banner",{
        x:'-40px',
       duration:1
       
    })
    gsap.to(".sidebar",{
        display:'grid',
        border:'solid black 1px',
        duration:1,
        x:'-60px'
    })
}

})


// styles = {
    // phone : {
        // // Banner:'grid-row:2/6;grid-column:1/5;transition:grid-row 2s grid-column 2s',
    // // //    Sidebar:'grid-row:2/6;grid-column:5/7;border:solid black 1px;transition:grid-row 2s grid-column 2s'
    // },
    // desktop : {

    // }
