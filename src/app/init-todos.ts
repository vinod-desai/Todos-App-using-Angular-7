export class Init {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
           // console.log('load method');
            const todos = [
                {
                    task: 'Learn Angular'
                },
                {
                    task: 'Pay Electricity bill'
                },
                {
                    task: 'Meet friends'
                },
                {
                    task: 'Get Veggies'
                },
                {
                    task: 'Go to gym'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        } else {
            console.log('Found todos.....');
        }
    }
}