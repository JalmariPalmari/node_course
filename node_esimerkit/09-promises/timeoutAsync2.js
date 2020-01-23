const resolveAfter = (sleepTime) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved in ' + sleepTime + ' ms.');
    }, sleepTime);
  });
}

async function asyncRunning(sleepTime) {
  const result = resolveAfter(sleepTime);
  console.log(await result);
}


console.log('asyncRunning function calls starts');
asyncRunning(3000);
asyncRunning(2000);
asyncRunning(500);
asyncRunning(200);
asyncRunning(10);
