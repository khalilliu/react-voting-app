import React , {Component} from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends Component{
	constructor(props){
		super(props)
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		FooterStore.listen(this.onChange);
		FooterActions.getTopCharacters();
	}
	componentWillMount(){
		FooterStore.unlisten(this.onChange)
	}
	onChange(state){
		this.setState(state)
	}
	render(){
		var leaderboardCharacters = this.state.characters.map((character)=>{
			return (
				<li key={character.characterId}>
					<Link to={'/characters/' + character.characterId}>
						<img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'}/>
					</Link>
				</li>
			)
		})
		return(
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-5'>
							<h3 className='lead'>
								<strong>Information</strong> 
								and <strong>Copyright</strong>
							</h3>
							<p>Power by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
							<p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
							<p>© 2015 Sahat Yalkabov.</p>
						</div>
						<div className='col-sm-7 hidden-xs'>
							<h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
							<ul>
								{ leaderboardCharacters }
							</ul>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;