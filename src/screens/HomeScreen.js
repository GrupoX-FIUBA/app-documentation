import React from 'react'

export const HomeScreen = () => {
  	return <>
			<div className='home__container'>
				<img src='/assets/logo.png' className='animate__animated animate__fadeIn home__img' alt='Spotifiuby logo'></img>
				<h1 className='home__title'>
					Spotifiuby. Tu app para escuchar música.
				</h1>
				<a href='https://expo.dev/artifacts/5b3ac610-2d95-4273-8299-e89e665f7513' target='_blank' rel='noreferrer' style={{marginTop: '2em'}}>
				  <img src='/assets/download.png' alt='Download button' />
				</a>
			</div>
  	</>

}
