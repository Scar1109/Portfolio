import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div
            className="flex flex-col items-center justify-center pb-20"
            id="projects"
        >
            <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
                My Projects
            </h1>
            <div className="flex flex-col gap-10">
                <div className="h-full w-full flex flex-col md:flex-row gap-10 md:px-40 px-12">
                    <ProjectCard
                        src="/evnify.png"
                        title="Evnify"
                        description="This project was built using React, Node.js, Express, and MongoDB. Additionally this project was built to SLIIT 2nd year 2nd semester IT Project."
                        live_link="https://github.com/evnify/evnify--Make-The-Movement"
                    />
                    <ProjectCard
                        src="/vidquest.png"
                        title="vidQuest"
                        description="VideQuest is a video browsing system which is developed using java servlets. This project was built to SLIIT 2st year 1nd semester OOP Project."
                        live_link= "https://github.com/Scar1109/vidQuest--Online-Video-Browsing-System"
                    />
                    <ProjectCard
                        src="/hangman_app.png"
                        title="Hangman Game"
                        description="This is a hangman game which is developed using Android Studio. This project was built as a part of second year second semester MAD game development project."
                        live_link= "https://github.com/Scar1109/Hangman-MAD-Game-Developemnt-Project"
                    />
                    <ProjectCard
                        src="/drivesure.png"
                        title="DriveSure"
                        description="This is a vehicle insurance management system which is developed using PHP. This project was built as a part of 1st year 2nd semester IWT project."
                        live_link= "https://github.com/Scar1109/DriveSure--Vehicle-Insurance-Management-System"
                    />
                </div>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 md:px-40 px-12">
                    <ProjectCard
                        src="/summerizemate.png"
                        title="SummerizeMate"
                        description="This is an online text summarizer app which is developed using Android studio. This project uses the facebook's bart LLM for the summarization process."
                        live_link="https://github.com/Scar1109/SummerizeMate--MAD_Project"
                    />
                    <ProjectCard
                        src="/taskpivote.png"
                        title="TaskPivot"
                        description="This is a task management app which is developed using Android Studio. This project was built as a part of 2bd year 2nd semester MAD project."
                        live_link= "https://github.com/Scar1109/TaskPivot"
                    />
                    <ProjectCard
                        src="/innrooms.png"
                        title="InnRooms"
                        description="InnRooms is a hotel management system which is developed using MERN. Also this project has a admin panel for the hotel manager."
                        live_link="https://github.com/Scar1109/lnnRooms--Room-Reservation-System"
                    />
                    <ProjectCard
                        src="/sushiman.png"
                        title="SushiMan"
                        description="This is a simple Landing page for a sushi ordering website. This project was built for get an good idea about css and css flexbox and AOS."
                        live_link="https://github.com/Scar1109/SushiMan-Sushi-Ordering-Website"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
