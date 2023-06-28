import trolling from  '../assets/troll-face.png'
export default function Nav() {
    return (
        <div className="nav">
            <div className="nav-left">
                <img src={trolling} alt="logo-img" className="img-nav" />
                <h1>Meme Generator</h1>
            </div>
            <p className="nav-right">
                I'll Create meme, You will create meme!
            </p>
        </div>
    )
}