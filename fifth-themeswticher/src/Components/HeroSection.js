import React , {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"


const HeroSection = () => {
    const [theme,setthemeHook] = useContext(ThemeContext)
    const currentTheme = AppTheme[theme]

    return(
        <div style={{
            padding : "1rem",
            backgroundColor : `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`
        }}>
            <h1>
                Context API Theme toggler.
            </h1>
            <p>
                This is a nice paragraph
            </p>
            <button onClick = {() => {
                setthemeHook(theme === "dark" ? "light" : "dark")
            }} style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color : "#FFF",
                border : `${currentTheme.border}`
            }}>
                Click Me
            </button>
        </div>
    )
}

export default HeroSection;