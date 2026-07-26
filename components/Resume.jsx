import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import localStyles from './Resume.css'

const Resume = () =>
	<div className={localStyles.resumeContainer} id="resume">
		<div className={localStyles.resume}>
			Resume
		</div>
		<div className={localStyles.seperator}/>
		<div className={localStyles.experienceText}>
			Experiences
		</div>
		<div className="hidden-xs">
		<Row>
			<Col sm={5} className={localStyles.expLeft} xs={12}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobLeft1}>
						<div className={localStyles.heading}>
							Software Engineer
						</div>
						<div className={localStyles.duration}>
							Stripe - December 2021 - Present
						</div>
						<div className={localStyles.content}>
							Working on payment infrastructure, optimizing transaction flows, and enhancing security measures.
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobLeft2}>
						<div className={localStyles.heading}>
							Open Source Contributor
						</div>
						<div className={localStyles.duration}>
							WorldBrain - August 2017 - 2019
						</div>
						<div className={localStyles.content}>
							Worked as a Full Stack JS Developer for the WorldBrain. Added multiple features bookmark/ unbookmark, 
							Tagging the web pages, Filter by domains and tags.
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobLeft3}>
						<div className={localStyles.heading}>
							Software Developer Intern
						</div>
						<div className={localStyles.duration}>
							Health Drive - January 2017 - April 2017
						</div>
						<div className={localStyles.content}>
							Worked on the backend for an android app to provide server-side authentication, profile etc.
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
			<Col sm={2} xsHidden>
				<ul className={localStyles.lineUl}>
					<ScrollAnimation animateIn="fadeIn">
						<li>
							<i className="fa fa-folder-open"></i>
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={`${localStyles.noIcon} ${localStyles.lastChild}`}>
							<div />
						</li>
					</ScrollAnimation>
				</ul>
			</Col>
			<Col sm={5} xs={12} className={localStyles.expRight}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobRight1}>
						<div className={localStyles.heading}>
							Software Engineer
						</div>
						<div className={localStyles.duration}>
							Wayfair - August 2019 - November 2021
						</div>
						<div className={localStyles.content}>
							Developed scalable e-commerce solutions, improved site performance, and contributed to UI/UX enhancements.
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobRight2}>
						<div className={localStyles.heading}>
							Software Developer
						</div>
						<div className={localStyles.duration}>
							HackerEarth - June 2018 - July 2019
						</div>
						<div className={localStyles.content}>
							Worked on improving the build and deploy time of front-end, added multiple features such as integration of customized real time messaging platform, notifications, profiles, filters, cross browser compatibility issues etc.<br />
							<b>Tech Stack:</b> React, Django
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.jobRight3}>
						<div className={localStyles.heading}>
							Software Developer Intern
						</div>
						<div className={localStyles.duration}>
							Cogoport - May 2017 - July 2017
						</div>
						<div className={localStyles.content}>
							Worked as a full stack developer, added multiple new features such as notifications, 
							profiles, tracking, user preferences settings etc., solved many concurrency issues.
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
		</Row>
		</div>
		<div className="visible-xs-block">
			<Row>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Software Engineer</div>
						<div className={localStyles.duration}>Stripe - December 2021 - Present</div>
						<div className={localStyles.content}>Working on payment infrastructure, optimizing transaction flows, and enhancing security measures.</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Software Engineer</div>
						<div className={localStyles.duration}>Wayfair - August 2019 - November 2021</div>
						<div className={localStyles.content}>Developed scalable e-commerce solutions, improved site performance, and contributed to UI/UX enhancements.</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Open Source Contributor</div>
						<div className={localStyles.duration}>WorldBrain - August 2017 - 2019</div>
						<div className={localStyles.content}>Worked as a Full Stack JS Developer for the WorldBrain. Added multiple features bookmark/ unbookmark, Tagging the web pages, Filter by domains and tags.</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Software Developer</div>
						<div className={localStyles.duration}>HackerEarth - June 2018 - July 2019</div>
						<div className={localStyles.content}>Worked on improving the build and deploy time of front-end, added multiple features such as integration of customized real time messaging platform, notifications, profiles, filters, cross browser compatibility issues etc.<br/><b>Tech Stack:</b> React, Django</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Software Developer Intern</div>
						<div className={localStyles.duration}>Health Drive - January 2017 - April 2017</div>
						<div className={localStyles.content}>Worked on the backend for an android app to provide server-side authentication, profile etc.</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Software Developer Intern</div>
						<div className={localStyles.duration}>Cogoport - May 2017 - July 2017</div>
						<div className={localStyles.content}>Worked as a full stack developer, added multiple new features such as notifications, profiles, tracking, user preferences settings etc., solved many concurrency issues.</div>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
		<div className={localStyles.experienceText}>
			Education
		</div>
		<div className="hidden-xs">
		<Row>
			<Col md={5} xs={12} className={localStyles.expLeft}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.senior}>
						<div className={localStyles.heading}>
							Class XII
						</div>
						<div className={localStyles.duration}>
							K.D.S.P. Sr. Sec. Sechool - July 2012 - May 2014
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
			<Col md={2} xsHidden>
				<ul className={localStyles.lineUl}>
					<ScrollAnimation animateIn="fadeIn">
						<li>
							<i className="fa fa-book"></i>
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={`${localStyles.lastChild} ${localStyles.eduLastDot}`}>
							<i className="fa fa-bookmark"></i>
						</li>
					</ScrollAnimation>
				</ul>
			</Col>
			<Col md={5} xs={12} className={localStyles.expRight}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.college}>
						<div className={localStyles.heading}>
							B.Tech + M.Tech Dual Degree in Computer Science & Engneering
						</div>
						<div className={localStyles.duration}>
							National Institute of Technology Hamirpur - July 2014 - May 2019
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.metric}>
						<div className={localStyles.heading}>
							Class X
						</div>
						<div className={localStyles.duration}>
							K.D.S.P. Sr. Sec. Sechool - July 2010 - May 2012
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
		</Row>
		</div>
		<div className="visible-xs-block">
			<Row>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>B.Tech + M.Tech Dual Degree in Computer Science & Engneering</div>
						<div className={localStyles.duration}>National Institute of Technology Hamirpur - July 2014 - May 2019</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Class XII</div>
						<div className={localStyles.duration}>K.D.S.P. Sr. Sec. Sechool - July 2012 - May 2014</div>
					</ScrollAnimation>
				</Col>
				<Col xs={12} className={localStyles.mobileItem}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.heading}>Class X</div>
						<div className={localStyles.duration}>K.D.S.P. Sr. Sec. Sechool - July 2010 - May 2012</div>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
	</div>

export default Resume