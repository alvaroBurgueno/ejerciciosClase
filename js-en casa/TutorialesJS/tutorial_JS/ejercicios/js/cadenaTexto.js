

function tipoLetra (cadena) {
	resultado = "La cadena está escrita en ";
	if(cadena == cadena.toUpperCase()) {
    resultado += "mayúsculas. \n";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += "minúsculas.";
  }
  else {
    resultado += " mayúsculas y minúsculas";
  }
	return resultado;
}

/*faltan los saltos de´línea*/
document.write(tipoLetra("TWO TWO BLA BLA"));
document.write(tipoLetra("two two bla bla"));
document.write(tipoLetra("TWO TWO bla bla"));