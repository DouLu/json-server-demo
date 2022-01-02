import './App.css';
import axios from 'axios';

const getData1 = url => {
	fetch(url, {
		headers: {
			'x-token': '12345',
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		}
	})
		.then(res => res.json())
		.then(data => {
			alert(JSON.stringify(data));
		});
};

const getData = () => {
	fetch('http://localhost:3004/course')
		.then(res => res.json())
		.then(data => {
			console.log(
				'%c [ data ]-5',
				'font-size:13px; background:pink; color:#bf2c9f;',
				data
			);
		});
};

const postData = () => {
	axios
		.post('http://localhost:3004/course', {
			id: 1002,
			course_name: '公拉农题队始果动',
			autor: '高丽',
			college: '先了队叫及便',
			category_Id: 2
		})
		.then(data => {
			console.log(
				'%c [ data ]-5',
				'font-size:13px; background:pink; color:#bf2c9f;',
				data
			);
		});
	// fetch('http://localhost:3004/course', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body:JSON.stringify(data)
	// })
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log(
	// 			'%c [ data ]-5',
	// 			'font-size:13px; background:pink; color:#bf2c9f;',
	// 			data
	// 		);
	// 	});
};

const data = {
	id: 1003,
	course_name: 'put 公拉农题队始果动',
	autor: 'put 高丽',
	college: 'put 先了队叫及便',
	category_Id: 2
};
const putData = () => {
	axios.put('http://localhost:3004/course/1003', data).then(data => {
		console.log(
			'%c [ data ]-5',
			'font-size:13px; background:pink; color:#bf2c9f;',
			data
		);
	});
};

const patchData = () => {
	axios
		.patch('http://localhost:3004/course/1003', {
			category_Id: 'patch 2'
		})
		.then(data => {
			console.log(
				'%c [ data ]-5',
				'font-size:13px; background:pink; color:#bf2c9f;',
				data
			);
		});
};

const delData = () => {
	axios.delete('http://localhost:3004/course/1002', data).then(data => {
		console.log(
			'%c [ data ]-5',
			'font-size:13px; background:pink; color:#bf2c9f;',
			data
		);
	});
};
function App() {
	return (
		<div className="App">
			<div>
				<button
					onClick={() => {
						getData();
					}}
				>
					get data
				</button>
				<button
					onClick={() => {
						postData();
					}}
				>
					post data
				</button>
				<button
					onClick={() => {
						putData();
					}}
				>
					put data
				</button>
				<button
					onClick={() => {
						patchData();
					}}
				>
					patch data
				</button>
				<button
					onClick={() => {
						delData();
					}}
				>
					delete data
				</button>
			</div>
			<div>
				<p>过滤查询</p>
				<button
					onClick={() => {
						getData1('http://localhost:3004/course?id=1000');
					}}
				>
					http://localhost:3004/course?id=1000
				</button>
				<button
					onClick={() => {
						axios
							.get('http://localhost:3004/course?id=1000', {
								headers: {
									'x-token': '12345',
									mode: 'cors'
								}
							})
							.then(data => {
								console.log(
									'%c [ data ]-5',
									'font-size:13px; background:pink; color:#bf2c9f;',
									data
								);
							});
					}}
				>
					axios http://localhost:3004/course?id=1000
				</button>
			</div>
			<div>
				<p>搜索</p>
				<button
					onClick={() => {
						getData1('http://localhost:3004/course?q=高丽');
					}}
				>
					http://localhost:3004/course?q=高丽
				</button>
			</div>
		</div>
	);
}

export default App;
