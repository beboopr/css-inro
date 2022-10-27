function picChanger() {
    const images = ["https://thumbs.gfycat.com/BareEverlastingHippopotamus.webp",
        "https://thumbs.gfycat.com/CircularGreedyHairstreak.webp",
        "https://thumbs.gfycat.com/BitterFineAlbertosaurus-max-1mb.gif"]
    const index = Math.ceil(Math.random() * 3) - 1;
    document.getElementById("yomama").src = images[index]
}
// const family = 
//         {
//             name: 'Ed',
//             job: 'Front End Dev',
//         }
//         console.log('hey class heres my', family)
//         document.getElementById('Contact').style.color = 'purple'

//         const handleColorChange = () => {
//             console.log('changing color')
//         }

//         const handleAlert = () => {
//             alert('Alerting the class')
//         }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}