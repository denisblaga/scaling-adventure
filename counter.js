let counter = 0;
for (let i = 0; i < 100; i++) {
    if (counter == 50) {
        counter -= 20;
    }
    counter++;
    console.log(counter);
}