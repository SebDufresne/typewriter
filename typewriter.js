'use strict';

const sentence = "hello there from lighthouse labs\n";

const displayString = (arr,count,repeat) => {
  setTimeout(() => {
    process.stdout.write(sentence[count]);
    if (count < repeat) displayString(arr,++count,repeat);
  }, (Math.random() * 250) + 100);
};

displayString(sentence,0,sentence.length - 1);