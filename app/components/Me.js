import  React ,{ Component} from 'react'

class Me extends Component{

    constructor(props){
        super(props)
        this.state = {
            characters:[]
        }
    }
    getCharacterCountSuccess(data){
        this.setState({characters: data})
        
    }
    getCharacterCountFail(){
        console.log('failed')
    }
    componentDidMount(){
        $.ajax({ url: '/api/characters'})
        .done((data) => {
          this.getCharacterCountSuccess(data)
        })
        .faile((data)=>{
            this.getCharacterCountFail()
        })
    }

    callAjax(){
        $.ajax({ url: '/api/characters/fake'})
        .done((data) => {
            this.getCharacterCountSuccess(data)
            console.log(data)
          })
    }

    render(){
        return (
            <ul>
               {
                   this.state.characters.map((character)=>{
                       return (
                           <li key={character.character}>
                            <p>{character.name}</p>
                            <img onClick={this.callAjax.bind(this)} className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'}/> 
                           </li>
                       )
                   })
               }
            </ul>
        )
    }
}

export default Me;