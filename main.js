const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result=document.getElementById("result");
const sound = document.getElementById('sound');
const btn = document.getElementById("search-btn");
const searchedText=document.getElementById('searchedText');
btn.addEventListener('click',()=>{
    let inpWord=document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    .then((response)=>response.json())
    .then((data)=>{
            searchedText.innerHTML=inpWord;
            data[0].meanings.map(item=>{
                console.log(item);
                result.innerHTML=`
           
            <div class="details">
                <p>${item.partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${item.definitions[0].definition}
            </p>
            <p class="word-example">
                ${item.definitions[0].example || ""}
            </p>
            `;
            document.getElementById('voicebtn').style.display='block';
        })
            sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
            console.log(sound);
        })
        .catch(()=>{
            result.innerHTML=`<h4 class='error'>Couldn't Find The Word</h4>`;
        })
})

function playSound(){
    sound.play();
}