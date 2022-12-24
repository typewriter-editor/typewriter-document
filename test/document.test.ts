import { Delta } from '@typewriter/delta';
import TextDocument from '../src/TextDocument';

describe('Text and Newline Insertion', () => {
	it('Should insert text without newlines into a single line.', () => {
		let doc = new TextDocument();
		doc = doc.apply(doc.change.insert(0, 'Some text'));

		expect(doc.lines.length).toEqual(1);
		expect(doc.lines[0].content).toEqual({
			ops: [
				{
					insert: 'Some text'
				}
			]
		} as Delta);
	});

	it('Should split lines when inserting newline characters', () => {
		let doc = new TextDocument();
		doc = doc.apply(doc.change.insert(0, 'Some text'));
		doc = doc.apply(doc.change.insert(doc.length, '\nAnother line'));

		expect(doc.lines.length).toEqual(2);
		expect(doc.lines[0].content).toEqual({
			ops: [
				{
					insert: 'Some text'
				}
			]
		} as Delta);
		expect(doc.lines[1].content).toEqual({
			ops: [
				{
					insert: 'Another line'
				}
			]
		} as Delta);
	});

	it('Should create a new line ID for a newly inserted line', () => {
		let doc = new TextDocument();
		doc = doc.apply(doc.change.insert(0, 'Some text'));

		const firstID = doc.lines[0].id;

		doc = doc.apply(doc.change.insert(doc.length, '\nAnother line'));

		expect(doc.lines[0].id).toEqual(firstID);
		expect(doc.lines[1].id).not.toEqual(firstID);
	});
});
