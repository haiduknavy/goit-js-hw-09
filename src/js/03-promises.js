import { Notify } from 'notiflix/build/notiflix-notify-aio';


 const form = document.querySelector('.form');
 const delayInput = document.querySelector('input[name="delay"]');
 const stepInput = document.querySelector('input[name="step"]');
 const amountInput = document.querySelector('input[name="amount"]');


 function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve({ position, delay })
  } else {
      reject({ position, delay })
      }
    }, delay);
  });
  return promise;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const firstDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1){
    delay += step
     createPromise(i, delay)
     .then(({ position, delay }) => {
    setTimeout(() => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }, delay);
  })
       .catch(({ position, delay }) => {
    setTimeout(() => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
  }
});