import React, {Component} from 'react'
import PropTypes from 'prop-types'

const API_KEY ='b48e57ef';

export class Detail extends Component {

    static propTypes = {
        id: PropTypes.string
    }

    state = { movie: {} }

    _fetchMovie ({id}) {
     
        fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}` )
        .then (res => res.json ())
        .then (movie => {
         
            this.setState ({ movie })
        })
    }

    componentDidMpunt () {
        const {id} = this.props
        this._fetchMovie ({id})
    }

    render () {
        const { Title, Poster, Actors, Metascore, Plot} =
        this.state.movie
        return (
            <div>
                <p>Pagina de detalles</p>
                <h1>{Title}</h1>
                <img src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
               
            </div>
        )
    }


}