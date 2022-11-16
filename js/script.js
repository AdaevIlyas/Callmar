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
const registration = document.querySelector('#registrationOpen');
const registrationClose = document.querySelector('#registrationClose');
const registrationBox = document.querySelector('.registration');
const registrationEntranceBtn = document.querySelector('#registForm');
const wrapper = document.querySelector('.wrapper');
const entrAllBtn = document.querySelectorAll('#entrAllBtn');

entrAllBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    entranceBox.classList.add('entrance-active');
    wrapper.classList.add('form-active');
  });
});

callFormBtn.addEventListener('click', () => {
  callForm.classList.add('shape-active');
  wrapper.classList.add('shape-active-bg');
  callFormBtn.style.display = "none";
});

callFormCloseBtn.addEventListener('click', () => {
  callForm.classList.remove('shape-active');
  callFormBtn.style.display = "block";
  wrapper.classList.remove('shape-active-bg');
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
      wrapper.classList.remove('shape-active-bg');
    }, 3000);
  }
});

entrance.addEventListener('click', (e) => {
  e.preventDefault();
  entranceBox.classList.add('entrance-active');
  wrapper.classList.add('form-active');
});

entranceClose.addEventListener('click', () => {
  entranceBox.classList.remove('entrance-active');
  wrapper.classList.remove('form-active');
});

registration.addEventListener('click', (el) => {
  el.preventDefault();
  registrationBox.classList.add('registration-active');
  wrapper.classList.add('form-active');
});


registrationEntranceBtn.addEventListener('click', (el) => {
  el.preventDefault();
  entranceBox.classList.remove('entrance-active');
  registrationBox.classList.add('registration-active');
  wrapper.classList.add('form-active');
});

registrationClose.addEventListener('click', () => {
  registrationBox.classList.remove('registration-active');
  wrapper.classList.remove('form-active');
});