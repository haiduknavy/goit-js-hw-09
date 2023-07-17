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

form.addEventListener('submit', onSubmit);

function onSubmit (e){
  e.preventDefault();

  let delay = Number(e.target.delay.value);
  const step = Number(e.target.step.value);
  const amount = Number(e.target.amount.value);
  if (delay < 0 || step < 0 || amount <= 0){
    Notify.success('Всі значення мають бути заповнені');
  } else {
    for (let i = 1; i <= amount; i += 1) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
        });
      delay += step;
    }
  }
}