import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"


export const FilterBar = () => {

    const {active, handleCheckbox} = useContext(PokemonContext)
  return (
    <div className={`container-filters ${active? "active" : ""}`}>
        <div className="filter-by-type">
            <span>Tipo</span>

            <div class="group-type">
					<input type="checkbox" name="grass" id="grass"  onChange={handleCheckbox}/>
					<label htmlFor="grass">Planta</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="fire" id="fire" onChange={handleCheckbox}/>
					<label htmlFor="fire">Fuego</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="bug" id="bug" onChange={handleCheckbox}/>
					<label htmlFor="bug">Bicho</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="fairy" id="fairy" onChange={handleCheckbox}/>
					<label htmlFor="fairy">Hada</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="dragon" id="dragon"onChange={handleCheckbox} />
					<label htmlFor="dragon">Dragón</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="ground" id="ground" onChange={handleCheckbox}/>
					<label htmlFor="ground">Tierra</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="normal" id="normal" onChange={handleCheckbox}/>
					<label htmlFor="normal">Normal</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="psychic" id="psychic" onChange={handleCheckbox}/>
					<label htmlFor="psychic">Psíquico</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="steel" id="steel" onChange={handleCheckbox}/>
					<label htmlFor="steel">Acero</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="dark" id="dark" onChange={handleCheckbox}/>
					<label htmlFor="dark">Siniestro</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="electric" id="electric" onChange={handleCheckbox}/>
					<label htmlFor="electric">Eléctrico</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="fighting" id="fighting" onChange={handleCheckbox}/>
					<label htmlFor="fighting">Lucha</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="flying" id="flying" onChange={handleCheckbox}/>
					<label htmlFor="flying">Volador</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="ice" id="ice" onChange={handleCheckbox}/>
					<label htmlFor="ice">Hielo</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="poison" id="poison" onChange={handleCheckbox}/>
					<label htmlFor="poison">Veneno</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="rock" id="rock" onChange={handleCheckbox}/>
					<label htmlFor="rock">Roca</label>
				</div>
				<div class="group-type">
					<input type="checkbox" name="water" id="water" onChange={handleCheckbox}/>
					<label htmlFor="water">Agua</label>
				</div>
                <div class="group-type">
					<input type="checkbox" name="ghost" id="ghost" onChange={handleCheckbox}/>
					<label htmlFor="ghost">Fantasma</label>
				</div>
			
	

        </div>
    </div>
  )
}
