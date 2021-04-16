// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "aznbcollab" is now active!');
	//const command = 'aznbcollab.sayHello';
	const commandHandler = () => {
		vscode.commands.executeCommand('editor.action.addCommentLine');
		console.log("Try something");
	};

	const addCellCommand = () => {
		const edit = new vscode.WorkspaceEdit();
		//vscode.notebook.openNotebookDocument('file:///C:/Users/somes/Documents/Aznb/Introduction to Python.ipynb');
		let uri = vscode.Uri.file('file:///C:/Users/somes/Documents/Aznb/IntroductiontoPython.ipynb');
		edit.replaceNotebookCells(uri, 0, 0, [{
			kind: vscode.NotebookCellKind.Markdown,
			language: 'markdown',
			metadata: undefined,
			outputs: [],
			source: 'new_markdown'
		}, {
			kind: vscode.NotebookCellKind.Code,
			language: 'fooLang',
			metadata: undefined,
			outputs: [],
			source: 'new_code'
		}]);
		vscode.workspace.applyEdit(edit);
		console.log("Apply changes");
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('aznbcollab.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from AznbCollab!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(vscode.commands.registerCommand('aznbcollab.sayHello', commandHandler));
	context.subscriptions.push(vscode.commands.registerCommand('aznbcollab.addCell', addCellCommand));
}

// this method is called when your extension is deactivated
export function deactivate() {}
