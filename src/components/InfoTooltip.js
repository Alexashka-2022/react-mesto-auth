import ImageStatusSuccess from '../images/infoTooltip-success.svg';
import ImageStatusFail from '../images/infoTooltip-fail.svg';


function InfoTooltip(props) {
    const MessageStatusSucess = "Вы успешно зарегистрировались!";
    const MessageStatusFail = "Что-то пошло не так! Попробуйте ещё раз.";
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`} onMouseDown={props.onCloseByOverlay}>
            <div className="popup__container">
                <button className={`popup__closed popup__closed-${props.name}`} type="button" onClick={props.onClose} />
                <img className="popup__image-info" src={props.statusTooltip ? ImageStatusSuccess : ImageStatusFail} alt={props.statusTooltip ? MessageStatusSucess : MessageStatusFail} />
                <h2 className="popup__title popup__title_info">{props.statusTooltip ? MessageStatusSucess : MessageStatusFail}</h2>
            </div>
        </div>
    );
}

export default InfoTooltip; 