import React from "react";

const Form = () => {
    return (
        <div>
            <h3>Contactame</h3>
            <h4>Completá el formulario y estaremos en contacto.</h4>
            <form>
                <label for="fname">Nombre:</label>
                <input type="text" id="Name" name="fname" />
                <label for="lname">Apellido:</label>
                <input type="text" id="lastname" name="lname" />
                <label type="text">Comentarios</label>
                <input type="text" id="comentarios"/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Form;