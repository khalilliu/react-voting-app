import React , {Component} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Add from './AddCharacter';

class App extends Component {
	render(){
		return (
			<div>
				<Navbar history={this.props.history}/>
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App;