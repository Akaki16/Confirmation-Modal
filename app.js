'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const openModal = document.getElementById('open-modal');
    const modal = document.querySelector('.modal');

    const showModal = () => {
        modal.style.display = 'block';
    }

    // open modal
    openModal.addEventListener('click', showModal);

    const closeModal = () => {
        modal.style.display = 'none';
    }

    const showMessage = () => {
        alert('removed');
    }

    document.addEventListener('click', e => {
        const target = e.target.classList;
        if (target.contains('close-btn')) {
            closeModal();
        } else if (target.contains('delete-btn')) {
            // firstly show the message and then close the modal
            showMessage();
            closeModal();
        }
    });

    // close modal
    window.addEventListener('keydown', e => {
        const key = e.code;
        const target_key_code = 27;
        if (
            key === 'Escape'
            && e.keyCode === target_key_code
            && modal.style.display === 'block'
        ) {
            closeModal();
        }
    });

});