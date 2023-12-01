const date = document.querySelector('.date');
const time = document.querySelector('.time');

function getDate() {
  const today = new Date();
  const date = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  });

  const todayDate = date.format(today);
  return todayDate;
}
date.innerHTML = getDate();

function getTime() {
  const today = new Date();
  const time = new Intl.DateTimeFormat('en-us', {
    timeStyle: 'medium',
  });

  const currentTime = time.format(today);

  return currentTime;
}

setInterval(() => {
  time.innerHTML = getTime();
});
