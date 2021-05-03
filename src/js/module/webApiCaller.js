class webApiCaller {
	constructor(server_address){
		this.server_address = server_address;

	}

	asyncRequestCallback = async (mes) => {
		//const request = "http://localhost:8000/getRes/?your_voice=" + mes;
		const request = this.server_address + "/getRes/?your_voice=" + mes;
		const res = await window.fetch(request, {
			mode: 'cors'
		});
		const result = await res.json();
		return result;

	}
}

export default webApiCaller;