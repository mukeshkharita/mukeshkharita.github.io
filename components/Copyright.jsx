import React from 'react'

import localStyles from './Copyright.css'

const Copyright = () =>
	<div className={localStyles.copyrightContainer}>
		Mukesh Kumar Kharita  ©  {new Date().getFullYear()}
	</div>

export default Copyright