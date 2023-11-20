import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Internship</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase about__icon" ></i>

                <h3 className="about__title">Completed</h3>
                <a href="https://drive.google.com/drive/folders/1ypiBnu8aqnfdWxH0-HubW8mFAaxbDFcV?usp=drive_link" target="_blank" rel="noopener noreferrer" className="about__link">
                    <span className="about__subtitle">3 + Projects</span>
                </a>
            </div>

            <div className="about__box">
                <i class="bx bx-support about__icon" ></i>

                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info
