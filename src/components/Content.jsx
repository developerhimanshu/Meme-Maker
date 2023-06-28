import React from 'react'
import trolling from '../assets/troll-face.png'
import memesData from '../components/memesData.jsx'
// import memeData from '../components/memesData.jsx'
export default function Content(props) {

    const [meme, setMeme] = React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )

   
    // console.log(meme)
    function toggleChange(event){
        
        const {name, value} = event.target  // destructuring
        setMeme(
            prevformData=>{
                return {
                    ...prevformData,
                    [name]:value
                }
            }
        )
    }

    const [allMemes, setAllMemeImages] = React.useState(memesData)
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>setAllMemeImages(data)) 
    }, [])
    function getMemeImage() {
        const memesArray = allMemes.data.memes;
        let randomInd = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomInd].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }
    return (
        <div className="main-content">
            <div className="input">
                <form className="write-boxes">
                    <input type="text" id="upper" 
                    placeholder="TOP TEXT" className="input-box" 
                    onChange={toggleChange} name="topText" 
                    value={meme.topText}></input>
                    <input type="text" id="lower" 
                    placeholder="BOTTOM TEXT" className="input-box"
                    onChange={toggleChange} name="bottomText" 
                    value={meme.bottomText}></input>
                </form>
                <button
                    className="get-content"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <div className="output">
                    <img src={meme.randomImage} alt="" className = "image-meme"/>   {/* Using the react state value here, which is constantly changing*/}
                    <h2 className="meme-top-text">{meme.topText}</h2>
                    <h2 className="meme-bottom-text">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}