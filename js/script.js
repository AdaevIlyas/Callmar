'use strict';

const callFormBtn = document.querySelector('#bellBtn');
const callForm = document.querySelector('.shape');
const callFormCloseBtn = document.querySelector('#bellBtnClose');
const callFormClosePlace = document.querySelector('.wrapper');
const callFormSend = document.querySelector('.shape-form__btn');
const callFormSendBox = document.querySelector('.send');
const entrance = document.querySelector('#entranceOpen');
const entranceClose = document.querySelector('#entranceClose');
const entranceBox = document.querySelector('.entrance');

callFormBtn.addEventListener('click', () => {
  callForm.classList.add('shape-active');
  callFormBtn.style.display = "none";
});

callFormCloseBtn.addEventListener('click', () => {
  callForm.classList.remove('shape-active');
  callFormBtn.style.display = "block";
});

callFormClosePlace.addEventListener('click', () => {
  callForm.classList.remove('shape-active');
  callFormBtn.style.display = "block";
});

callFormSend.addEventListener('click', () => {
  callForm.classList.remove('shape-active');
  callFormBtn.style.display = "block";
  callFormSendBox.classList.add('send-active');
  if (callFormSendBox.classList.contains('send-active')) {
    setTimeout(() => {
      callFormSendBox.classList.remove('send-active');
    }, 3000);
  }
});

entrance.addEventListener('click', (e) => {
  e.preventDefault();
  entranceBox.classList.add('entrance-active');
});

entranceClose.addEventListener('click', () => {
  entranceBox.classList.remove('entrance-active');
});