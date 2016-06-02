describe('Todos tracker', function() {

	beforeEach(function(){
		browser.get('/');
	});

	it('has several ToDos', function() {
		var todos = $$('#todos p');
		expect(todos.first().getText()).toMatch('ToDo1: completed');
		expect(todos.last().getText()).toMatch('ToDo2: not completed');
	});

	it('can add a ToDo', function() {
		$('#new-todo-name').sendKeys("NewToDo");
		$('#add-todo').click();

		var todo = $$('#todos p').last().getText();
		expect(todo).toMatch('NewToDo: not completed');
	});

	it('can remove a ToDo', function() {
		var todos = $$('#todos p');

		$('#remove-todo').click();
		expect(todos.count()).toEqual(1);
	});

	it('can mark a ToDo as complete', function() {
		var todo = $$('#todos p').last();
		todo.element(by.css('.complete')).click();

		expect(todo.getText()).toMatch('ToDo2: completed');
	});
});