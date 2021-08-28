import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import '../styles/skills.css';

export default function Skills() {
	return (
		<div id='skills'>
			<Container>
					<Typography variant='body1'>
						Lisa is a valuable member of any team. She has great curiosity and
						the resolve to find solutions. Lisa is a full stack developer and enjoys
						understanding what makes an application work and exploring how she can improve it.
					</Typography>

					<Grid container spacing={3} className='skills'>
						<Grid container>
							<Grid container item xs={12} sm={6}>
								<Grid container item xs={12}>
									<h2>Languages</h2>
								</Grid>

								<Grid container item xs={3}>
									<li className='fas fa-code fa-3x'></li>
								</Grid>
								<Grid container item xs={6}>
									<ul>
										<li>PHP</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>Python</li>
									</ul>
								</Grid>
							</Grid>

							<Grid container item xs={12} sm={6}>
								<Grid container item xs={12}>
									<h2>Tools</h2>
								</Grid>

								<Grid container item xs={3}>
									<li className='fab fa-wordpress fa-3x'></li>
								</Grid>
								<Grid container item xs={6}>
									<ul>
										<li>WordPress</li>
										<li>Bootstrap</li>
										<li>Sass</li>
										<li>Git and GitHub</li>
									</ul>
								</Grid>
							</Grid>

							<Grid container item xs={12} sm={6}>
								<Grid container item xs={12}>
									<h2>Skills</h2>
								</Grid>

								<Grid container item xs={3}>
									<li className='fas fa-clipboard-check fa-3x'></li>
								</Grid>
								<Grid container item xs={6}>
									<ul>
										<li>Async. Communication</li>
										<li>Sass</li>
										<li>Git & GitHub</li>
									</ul>
								</Grid>
							</Grid>

							<Grid container item xs={12} sm={6}>
								<Grid container item xs={12}>
									<h2>Experience</h2>
								</Grid>

								<Grid container item xs={3}>
									<li className='fas fa-briefcase fa-3x'></li>
								</Grid>
								<Grid container item xs={6}>
									<ul>
										<li>Sandhills Development (2020 - 2021)</li>
										<li>Lambda School Student (2018)</li>
										<li>King County Library System (2005-2020)</li>
									</ul>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
			</Container>
		</div>
	);
}
