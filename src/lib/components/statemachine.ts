import { createMachine, createActor } from 'xstate';

export const pageMachine = createMachine({
	id: 'pages',
	initial: 'home',
	states: {
		home: {
			on: {
				to_about: {
					target: 'about'
				}
			}
		},
		about: {
			on: {
				to_home: {
					target: 'home'
				}
			}
		}
	}
});

export const pageActor = createActor(pageMachine);

pageActor.subscribe((snapshot) => {
	// const state = snapshot.context.state;
	console.log(snapshot);
});

pageActor.start();
