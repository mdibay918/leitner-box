import Errors from './Errors.js'
import axios from 'axios'

export default class Form {
	constructor(data) {
		this.originalData = data;
		for (let field in data) {
			this[field] = data[field];
		}
		this.errors = new Errors();
	}

	data() {
		let data = Object.assign({}, this);
		delete data.originalData;
		delete data.errors; 
		return data;
	}

	post(url) {
		return this.submit('post', url);
	}

	submit(method, endpoint) {
		return new Promise((resolve, reject) =>  {
			axios[method](endpoint, this.data())	
			.then(responnse => {
				this.onSuccess(responnse.data);
				resolve(responnse.data);
			})
			.catch(error => {
				this.onFail(error.response.data.errors);
				reject(error.response.data.errors);
			});
		});
	}

	onFail(errors) {
		this.errors.record(errors);
	}

	onSuccess(data) {
		this.reset();
	}
}
