import React, { Component } from "react";
import "./App.css";

import Navegacion from "./components/Navegacion.js";
import Buscador from "./components/Buscador.js";
import Resultado from "./components/Resultado.js";

class App extends Component {

  state = {
    term: "",
    images: [],
    page: 0,
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start')
  }

  previousPage = () => {
    // Leer state de la pagina actual
    let page = this.state.page;

    // Si la pagina es 1 no ir hacia atrás
    if (page === 1) return null;

    // Resta 1 a la pagina actual
    page -= 1;

    // Agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.reqApi();
      this.scroll();
    });  
  }

  afterPage = () => {
    // Leer state de la pagina actual
    let page = this.state.page;

    // Sumar 1 a la pagina actual
    page++;

    // Agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.reqApi();
      this.scroll();
    });
  }

  reqApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=22337777-189fc291f4f5a0eb1ff108866&q=${term}&per_page=30&page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => this.setState({ images: result.hits }))
    .catch((err) => {
      console.log(err);
      return null;
    });
  }

  searchData = (term) => {
    this.setState({
      term: term,
      page: 1,
    }, () => {
      this.reqApi();
    })
  }

	render() {
		return (
			<div className="app container" id="app">
        <Navegacion/>
				<div className="searcher">
					<h1 className="text-center">Buscador De Imágenes</h1>
					<Buscador searchData={this.searchData} />
				</div>
        <div className="row justify-content-center">
          <Resultado images={this.state.images} previousPage={this.previousPage} afterPage={this.afterPage} term={this.state.term}/>
        </div>
			</div> 
		);
	}
}

export default App;
