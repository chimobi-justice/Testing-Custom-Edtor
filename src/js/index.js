const title = document.getElementById('input-title');
const bodyText = document.getElementById('input-body');
const sendButton = document.getElementById('send-button');

const boldButton = document.getElementById('bold-button');
const italicButton = document.getElementById('italic-button');

const formated_button = document.getElementById('formatting-toggle-button');
const topToolBarPanel = document.getElementById('rich-toolbar');

const changeFonts = document.getElementById('change-text-font');
const fontsList = document.getElementById('font-lists');

const smallText = document.getElementById('smallText');
const normalText = document.getElementById('normalText');
const largeText = document.getElementById('largeText');

const handleFocus = () => title.focus(); 

window.addEventListener('load', () => {
    handleFocus();
});

const _handleFormFields = () => {
    if (title.value.length > 0 && bodyText.value.length > 0) {
        sendButton.style.background = '#307FE2';
        sendButton.style.cursor = 'pointer';
        sendButton.removeAttribute('disabled');
        sendButton.removeAttribute('title'); 
    } else if (title.value.length == 0 && bodyText.value.length == 0) {
        sendButton.style.background = 'rgba(48, 127, 226, 0.5)'; 
        sendButton.style.cursor = 'not-allowed';
        sendButton.setAttribute('disabled','disabled');
    } else if (title.value.length > 0 || bodyText.value.length == 0) {
        checkFields();
        _handleTitleAttr();

    } else if (title.value.length == 0 || bodyText.value.length > 0) {
        checkFields();
        _handleTitleAttr();

    }
}

title.addEventListener('keyup', _handleFormFields);
bodyText.addEventListener('keyup', _handleFormFields);


const checkFields = () => {
    if ( (title.value.length > 0 && bodyText.value.length == 0) 
        || (title.value.length ==  0 && bodyText.value.length > 0) ) {
        sendButton.style.background = 'rgba(48, 127, 226, 0.5)'; 
        sendButton.style.cursor = 'not-allowed';
        sendButton.setAttribute('disabled','disabled');
    }
}

const _handleTitleAttr = () => {
    if (title.value.length > 0) {
        sendButton.setAttribute('title','The body field is required');
    } else if (bodyText.value.length > 0) {
        sendButton.setAttribute('title','The title field is required');
    } 
}

const boldText = () => (bodyText.select()) ? bodyText.select() : false;

boldText();

const _handleBoldText = () => (boldButton) ? bodyText.classList.toggle('ToggleBoldText') : false;

boldButton.addEventListener('click', _handleBoldText);

const _handleItalicText = () => (italicButton) ? bodyText.classList.toggle('ToggleItalicText') : false;

italicButton.addEventListener('click', _handleItalicText);

const _handleFormatButton = () => (formated_button) ? topToolBarPanel.classList.toggle('formatting-toggle-button') : false;

formated_button.addEventListener('click', _handleFormatButton);

const handleFonts = () => (changeFonts) ? fontsList.classList.toggle('ToggleFontLists') : false;

changeFonts.addEventListener('click', handleFonts);

const _handleSmallFontsChange = (font) => {
    font.style.fontSize = '14px';
}

const _handleNormalFontsChange = (font) => {
    font.style.fontSize = '18px';
}

const _handleLargeFontsChange = (font) => {
    font.style.fontSize = '22px';
}

const handleSmallFont = () => {
    if (smallText) {
       return _handleSmallFontsChange(bodyText);
    }
}
smallText.addEventListener('click', handleSmallFont);

const handleNormalFont = () => {
    if (normalText) {
       return _handleNormalFontsChange(bodyText);
    }
}
normalText.addEventListener('click', handleNormalFont);

const handleLargeFont = () => {
    if (largeText) {
       return _handleLargeFontsChange(bodyText);
    }
}
largeText.addEventListener('click', handleLargeFont);