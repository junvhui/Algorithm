const solution = (participants, completed) => {
  const completedRunners = {};

  let unFinishedRunner = '';

  completed.forEach((runner) => {
    completedRunners[runner] = completedRunners[runner] + 1 || 1;
  });

  participants.forEach((runner) => {
    if (completedRunners[runner]) {
      completedRunners[runner] = completedRunners[runner] - 1;
    } else {
      unFinishedRunner = runner;
    }
  });

  return unFinishedRunner;
}