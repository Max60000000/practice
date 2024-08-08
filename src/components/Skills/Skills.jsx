import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='main2' style={{ padding: '100px', display: 'flex' }}>
            <div style={{ width: '80%' }}>
                <h3 style={{ fontSize: '70px', color: 'white' }}>
                    Let's Explore <br />
                    <span style={{ color: 'chocolate' }}>Skills & Experience</span>
                </h3>
                <p style={{ fontSize: '30px', color: 'white', marginBottom: '10px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut quos voluptas incidunt modi labore minima at fugit vel officiis nulla similique, alias obcaecati eius dolor accusantium, odit quidem adipisci!
                </p>
                <br />
                <br />
                <button style={{}}>Learn More</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '50px' }}>
                <SkillCard 
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" 
                    skillName="html" 
                    skillLevel="95%" 
                />
                <SkillCard 
                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
                    skillName="css" 
                    skillLevel="83%" 
                />
                <SkillCard 
                    imgSrc="
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"                    skillName="javascript" 
                    skillLevel="89%" 
                />
                <SkillCard 
                    imgSrc=
"https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png"                    skillName="react" 
                    skillLevel="93%" 
                />
                 <SkillCard 
                    imgSrc=
"https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
 skillName="next"
                    skillLevel="93%" 
                    />
            </div>
        </div>
    );
};

const SkillCard = ({ imgSrc, skillName, skillLevel }) => {
    return (
        <div className="card2" style={{ border: '1px solid lightgrey', borderRadius: '10px', width: 'calc(20% - 15px)', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={imgSrc} alt={skillName} style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                <div style={{ textAlign: 'center' }}>
                    <h3>{skillName}</h3>
                    <div className="skill-bar" style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', width: '100%', marginTop: '10px' }}>
                        <div style={{ backgroundColor: '#ff9800', height: '10px', borderRadius: '5px', width: skillLevel }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
