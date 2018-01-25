import * as Button from '../button';


test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3);
});


it('renders as an anchor with id value "testbutton"', () => {
	const buttonElement = Button.getModule({
		id: 'testbutton'
	});
	expect(buttonElement).toMatchSnapshot();
});

it('renders a button anchor with type value "submit"', () => {
	const buttonElement = Button.getModule({
		submit: true
	});
	expect(buttonElement).toMatchSnapshot();
});
