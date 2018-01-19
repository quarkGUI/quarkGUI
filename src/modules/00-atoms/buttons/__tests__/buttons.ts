import * as Button from '../button';


const buttonElement = Button.getModule({
	id: 'testbutton',
	submit: true
});

document.body.innerHTML = buttonElement;

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

/*
test('has id testbutton', () => {
  expect(buttonElement).toContain("id='testbutton'");
});

test('is submit type', () => {
  expect(buttonElement).toContain("type='skubmit'");
});

test('is submit type', () => {
	let element = document.getElementById('testbutton');
  expect(element.attributes).toContain('hoy');
});*/