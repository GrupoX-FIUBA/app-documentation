import React, { useRef } from 'react'
import Slider from 'react-slick'
import { wireframes } from '../constants/wireframes'

export const WireframesScreen = () => {

	const horizontalSlider = useRef();

    return <>
		<div className='gallery__container animate__animated animate__fadeIn'>
			<div className='gallery__vertical-slider'>
				<Slider dots={true}
					infinite={false}
					speed={500}
					slidesToShow={3}
					slidesToScroll={3}
					vertical={true}
					arrows={true}
					>
						{
							wireframes.map((wf, i) => (
								<div key={wf.name} className='gallery__vertical-element'>
									<img src={wf.path} 
										className='gallery__vertical-img'
										onClick={() => horizontalSlider.current.slickGoTo(i)}
										alt='{wf.name}'></img>
									<div className='gallery__epigraph'>{wf.name}</div>
								</div>
							))
						}
				</Slider>
			</div>

			<div className='gallery__horizontal-slider'>
				<Slider ref={slider => horizontalSlider.current = slider}
					dots={true}
					infinite={false}
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
					>
						{
							wireframes.map(wf => (
								<div key={wf.name} className='gallery__horizontal-element'>
									<img src={wf.path} className='gallery__horizontal-img' alt='{wf.name}'></img>
									<div className='gallery__epigraph'>{wf.name}</div>
								</div>
							))
						}
				</Slider>
			</div>
		</div>
    </>
}
