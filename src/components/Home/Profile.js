import React from 'react'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="https://github.com/vasupradharamachanrdan">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vasupradha-r/">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a href="https://leetcode.com/Vasupradha_R/">
                            <i class="fa fa-code" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="Profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello there, I'm
                            <span className="highlighted-text">Vasupradha</span>
                        </span>
                    </div>
                    <div className="profile-deatils-role">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
