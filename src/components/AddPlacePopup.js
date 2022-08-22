import { render } from "@testing-library/react";
import PopupWithForm from "./PopupWithForm";
import { useRef} from 'react';

function AddPlacePopup({onClose, isOpen, onAddPlace}){
    const namePlaceRef = useRef();
    const linkPlaceRef = useRef();

    function handleSubmitAddPlace(e){
        e.preventDefault();
        onAddPlace({
            name:namePlaceRef.current.value,
            link:linkPlaceRef.current.value
        })
        namePlaceRef.current.value = '';
        linkPlaceRef.current.value = '';
    }

    return <PopupWithForm
        onClose = {onClose}
        isOpen = {isOpen}
        onSubmit = {handleSubmitAddPlace}
        name="addCard"
        title="Добавить место">
          <div className = "popup__container">
              <input required id="nameCardInput" className="popup__input-text popup__input-text_field_name" name="name" placeholder="Название" type="text" minLength="2" maxLength="30" ref={namePlaceRef}/> 
              <span className="popup__input-error" id="nameCardInput-error"></span>
          </div>
          <div className ="popup__container">
              <input required id="URLInput" className="popup__input-text popup__input-text_field_job" name='link' placeholder="Ссылка на картинку" type="url" ref={linkPlaceRef}/>
              <span className="popup__input-error" id="URLInput-error"></span>
          </div>
      </PopupWithForm>
}

export default AddPlacePopup;