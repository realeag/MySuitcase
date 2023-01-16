import React from "react";

const Form = () => {
    return (
        <div>
            <h3>Contactame</h3>
            <h4>Completá el formulario y estaremos en contacto.</h4>
            <form>
                <label for="fname">Nombre:</label>
                <input type="text" id="Name" name="fname" placeholder="Nombre" />
                <label for="lname">Apellido:</label>
                <input type="text" id="lastname" name="lname" placeholder="Apellido" />
                <label type="text">Comentarios</label>
                <input type="text" id="comentarios" placeholder="Aquí podrás contarme tu propuesta"/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Form;