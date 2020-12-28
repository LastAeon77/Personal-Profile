import LoRlogo from "../images/LibraryofRuinaLogo.png"
import kamPic from "../images/Kam.png"

export const PersonalInfo = {
    Name: "Insert Name Here",
    Email: "email@gmail.com",
    Github: "https://github.com/LastAeon77",
    Major: "Computer Science and Bioinformatics",
    School: "Whitworth University",
    GPA: 3.93,
    Courseworks: "Data Structure, Database Management, Assembly, Linear Algebra Biology/Chemistry",
    Images: kamPic
}
export const Projects = {
    Project1: {
        Name: "Library Of Ruina Website",
        Related_Skills: [
            "Python3",
            "HTML",
            "Bulma",
            "Django",
            "Django Rest API",
            "PostgreSQL"
        ],
        Description: "This is a project I made to facilitate information keeping of the game Library of Ruina. It allows users to search information about the cards available in the game along with allowing them to create their own decks.",
        Img: LoRlogo,
        Link:"http://aeonmoon.herokuapp.com/lor"

    },
    Project2: {
        Name: "Predator and Prey Sim",
        Related_Skills: [
            "C++",
            "Inheritence"
        ],
        Description: "This project focuses mainly on simulating basic relationship between grass, rabbits, and wolves in the same grid.",
        Link:"https://github.com/LastAeon77/Predator-and-Prey-Simulation"
    },
    Project3: {
        Name: "Python Discord Bot",
        Related_Skills: [
            "AWS",
            "Discord.py",
            "Pandas",
            "PIL",
            "aiohttp"
        ],
        Description: "A discord bot that I develop for the Library of Ruina Community to be used. It does many things, including interacting with the website API to gather information and query data. Used actively in the Library of Ruina fanserver",
        Link: "https://github.com/LastAeon77/LibraryOfRuinaBot"
    },
    Project4: {
        Name: "Personal Profile Website",
        Related_Skills: [
            "Reactjs",
            "react-bootstrap",
            "javascript",
        ],
        Description: "What you're seeing right now!",
        Link: "https://github.com/LastAeon77/VInvestorScraper"
    },
    Project5: {
        Name: "Python Web Scraper",
        Related_Skills: [
            "BeautifulSoup",
            "Python3",
            "Selenium"
        ],
        Description: "Developed a script to scrape data from the Thai government database about estates",
        Link: "https://github.com/LastAeon77/VInvestorScraper"
    }
}

