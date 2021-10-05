import React, {useEffect, useState} from 'react'
import Header from './Header' 
import './../App.css'

function Home() {

  return (
    <div className='Home'>

        <Header />
        <br />
        <section class='sections'>
            <div class='section-title'>
                <h3>Members:</h3>
            </div>
            
            <p>Kevin Lieng, Raul Lopez, Mustafa Khan, Jose Colina, and Jeremiah Trinh</p>
            
            <div class='section-title'>
                <h3>Tools:</h3>
            </div>

            <ul>
                <li>Microsoft Word</li>
                <li>Microsoft PowerPoint</li>
                <li>Java</li>
                <li>Source Forge</li>
                <li>Paint</li>
            </ul>

            <div class='section-title'>
                <h3>Project Description:</h3>
            </div>

            <p>Development of a smartphone app to help any blind person navigate indoors safely.</p>
            <ul>
                <li>
                    <a href='https://docs.google.com/presentation/d/1hYcD5P2wUNS9k4hobFOG5Kx3v6ibz9siB7E5QKNGwTo/edit#slide=id.p' target="_blank">Powerpoint Info</a>
                </li>
                <li>
                    <a target="_blank" href='https://docs.google.com/forms/d/1vmPwT3yxOPtZwf5Xep3-51TdvBrd9ytumtbIkmm_tA8/edit'>Questionnaire</a>
                </li>
            </ul>
            <div class='section-title'>
                <h3>Deliverables:</h3>
            </div>

            <ul>
                <li>Kevin and Mustafa are website creators.</li>
                <li>Jose, Jeremiah, and Raul are content creators.</li>
                <li>Note: Our Team is committed to help each other on each task performed.</li>
            </ul>
            
        </section> 
    </div>
  );
}

export default Home;
