const data = [
    {
        id: 1,
        img: "https://i.pinimg.com/originals/a9/1f/8e/a91f8e508d5b58a756e5835febfc2ee6.jpg",
        name: "Susan Smith",
        profile: "WEB DEVELOPER",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    },
    {
        id: 2,
        img: "https://i.pinimg.com/originals/3a/ff/e8/3affe8f1206495547c79506d85740426.jpg",
        name: "Eva Mendes",
        profile: "DATA SENTIST",
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    },
    {
        id: 3,
        img: "https://t3.ftcdn.net/jpg/04/63/20/42/360_F_463204249_mJRPjUGeWlLsS1ph57jwyUYd75GIlSjX.jpg",
        name: "Jiya Mehra",
        profile: "SOFTWARE ENGINEER",
        about: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",

    },
    {
        id: 4,
        img: "http://atlantablackstar.com/wp-content/uploads/2014/12/Sheron-Menezzes-600x607.jpg",
        name: "Radhika ",
        profile: "OPERATOR",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla hii  minima adipisci eaque tenetur eum molestias obcaecati,hii every one what about ryou that my aname excepturi soluta cupiditate eius nam consequuntur saepe voluptatibus culpa ut enim qui possimus",

    },
]

var image = document.getElementsByClassName('image')[0]
const name = document.getElementsByClassName('name1')[0];
const work = document.getElementsByClassName('work')[0];
const about = document.getElementsByClassName('about')[0];
const prev = document.getElementsByClassName('btn-prev')[0];
const next = document.getElementsByClassName('btn-next')[0];
const btn = document.getElementsByClassName("btn")[0];
const btn1 = document.getElementsByClassName("btn1")[0];
const sur = document.getElementsByClassName("sur")[0];
const innerContainer = document.getElementsByClassName("inner-container")[0];
//console.log(image)
//image.style.backgroundImage="url('http://atlantablackstar.com/wp-content/uploads/2014/12/Sheron-Menezzes-600x607.jpg')"

var count = 1;
const nextfun = () => {
    if (count > 4) {
        count = 1;
    } else {
        count = count + 1;
    }

    data.filter((e, i) => {

        return count == e.id;
    }).map((e, i) => {
        image.style.backgroundImage = `url('${e.img}')`;
        name.innerHTML = e.name;
        work.innerHTML = e.profile;
        about.innerHTML = e.about;

    })
}
nextfun();
prev.addEventListener('click', nextfun)
next.addEventListener('click', nextfun);


const surprise = () => {

    innerContainer.style.display = 'none';
    sur.style.display = 'inline';

}
btn.addEventListener('click', surprise);
btn1.addEventListener('click', () => {
    innerContainer.style.display = "flex";
    sur.style.display = "none";
})
