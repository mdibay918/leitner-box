import Form from './Form.js'

export default class EmptyLeitnerAppForm extends Form {
	constructor(data) {
		super(data, data);
	}
	
	reset() {
		for (let field in this.originalData) {
			if (typeof field === 'string') {
				this[field] = '';	
			} 
			if (typeof field === 'object') {
				this[field].splice(0, this[field].length);
			}
		}
		this.errors.clear();
	}
}
