import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import localStyles from './About.css'
import Hobby from './Hobby'

const About = () =>
	<div className={localStyles.aboutContainer} id="about">
		<div className={localStyles.me}>
			About Me
		</div>
		<div className={localStyles.seperator}/>
		<div className={localStyles.content}>
			<div className={localStyles.aboutContent}>
				My name is Mukesh Kumar Kharita. I am a Software Engineer at Stripe, with a B.Tech + M.Tech Dual Degree in Computer Science & Engineering from
				the National Institute of Technology, Hamirpur. I love to write code, listen to music, and create impact with AI.
			</div>
			<Row className={localStyles.otherInfo}>
				<Col md={12} sm={12} lg={12} className={localStyles.hobbiesContainer}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.hobbies}>HOBBIES & INTERESTS</div>
						<Row>
							<Hobby 
								name="Code"
								icon="code"
							/>
							<Hobby 
								name="Linux"
								icon="linux"
							/>
							<Hobby 
								name="Music"
								icon="music"
							/>
							<Hobby 
								name="Game"
								icon="gamepad"
							/>
							<Hobby 
								name="Tea"
								icon="coffee"
							/>
							<Hobby 
								name="Movie"
								icon="film"
							/>
						</Row>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
	</div>

export default About