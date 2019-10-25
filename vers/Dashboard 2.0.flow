[
	{
		"id": "45db1bd1.45c014",
		"type": "function",
		"z": "17538a9c.f80675",
		"name": "completionLevelSimulator",
		"func": "console.log('in:', msg)\nlet perc = global.get('percentage')\nlet results = global.get('results')\nlet entity = {};\nlet comp = 0;\nif (typeof results == \"undefined\" || results.length == 0 || results.length > 5) {\n    results = []\n}\nif(msg.type == 'test') {\n    comp = 100/5\n}\nif (parseInt(perc) >= 0 && parseInt(perc) < 100) {\n    perc += comp;\n    results.push({test_start: msg.test_start, test_end: msg.test_end, test_name: msg.test_name, test_id: msg.test_id, test_result: msg.test_result})\n} else {\n    perc = comp;\n}\nconsole.log(entity)\nglobal.set('percentage', perc)\nglobal.set('results', results)\n\nmsg.payload = global.get('percentage')\nreturn msg;",
		"outputs": 1,
		"noerr": 0,
		"x": 670,
		"y": 120,
		"wires": [
			[
				"279e127f.fe8bce",
				"bc85affb.eda",
				"aad3c959.4498c8",
				"7aa6622e.e884ec"
			]
		]
	},
	{
		"id": "437f6785.b9a598",
		"type": "ui_text",
		"z": "17538a9c.f80675",
		"group": "9493694c.31f308",
		"order": 1,
		"width": 0,
		"height": 0,
		"name": "",
		"label": "Choose the tests to be executed on device",
		"format": "",
		"layout": "row-left",
		"x": 210,
		"y": 20,
		"wires": []
	},
	{
		"id": "aad3c959.4498c8",
		"type": "ui_gauge",
		"z": "17538a9c.f80675",
		"name": "completion",
		"group": "78656330.3a666c",
		"order": 1,
		"width": "6",
		"height": "6",
		"gtype": "gage",
		"title": "",
		"label": "%",
		"format": "{{value}}",
		"min": 0,
		"max": "100",
		"colors": [
			"#ff0000",
			"#e6e600",
			"#00ff00"
		],
		"seg1": "",
		"seg2": "",
		"x": 970,
		"y": 100,
		"wires": []
	},
	{
		"id": "103a8ff4.1c711",
		"type": "debug",
		"z": "17538a9c.f80675",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": true,
		"tostatus": false,
		"complete": "true",
		"targetType": "full",
		"x": 870,
		"y": 220,
		"wires": []
	},
	{
		"id": "ea5df69.8ae3808",
		"type": "ui_button",
		"z": "17538a9c.f80675",
		"name": "",
		"group": "e330ebd2.24b648",
		"order": 1,
		"width": 0,
		"height": 0,
		"passthru": false,
		"label": "Export detailed reports",
		"tooltip": "",
		"color": "",
		"bgcolor": "",
		"icon": "cloud_download",
		"payload": "",
		"payloadType": "str",
		"topic": "",
		"x": 1180,
		"y": 60,
		"wires": [
			[]
		]
	},
	{
		"id": "45a7c0b7.2b97",
		"type": "subflow:5a4a2611.d6b998",
		"z": "17538a9c.f80675",
		"name": "GoToReports",
		"env": [],
		"x": 290,
		"y": 80,
		"wires": []
	},
	{
		"id": "5daaca2d.f435f4",
		"type": "ui_ui_control",
		"z": "17538a9c.f80675",
		"name": "",
		"events": "all",
		"x": 1000,
		"y": 60,
		"wires": [
			[
				"ea5df69.8ae3808"
			]
		]
	},
	{
		"id": "279e127f.fe8bce",
		"type": "function",
		"z": "17538a9c.f80675",
		"name": "",
		"func": "if(global.get('percentage') == 100)\nreturn msg\n\n\nreturn {\"group\":{\"hide\":[\"Reports_Reports\"]}}",
		"outputs": 1,
		"noerr": 0,
		"x": 870,
		"y": 60,
		"wires": [
			[
				"5daaca2d.f435f4"
			]
		]
	},
	{
		"id": "8a7b13e1.15723",
		"type": "subflow:f0ba3eb7.b7d31",
		"z": "17538a9c.f80675",
		"name": "Test 2s",
		"env": [
			{
				"name": "duration",
				"value": "2",
				"type": "str"
			}
		],
		"x": 430,
		"y": 120,
		"wires": [
			[
				"45db1bd1.45c014",
				"eff70484.34b088"
			]
		]
	},
	{
		"id": "eff70484.34b088",
		"type": "subflow:f0ba3eb7.b7d31",
		"z": "17538a9c.f80675",
		"name": "Test 8s",
		"env": [
			{
				"name": "duration",
				"value": "8",
				"type": "str"
			}
		],
		"x": 430,
		"y": 160,
		"wires": [
			[
				"45db1bd1.45c014",
				"7e860636.95c148"
			]
		]
	},
	{
		"id": "7e860636.95c148",
		"type": "subflow:f0ba3eb7.b7d31",
		"z": "17538a9c.f80675",
		"name": "Test 1s",
		"env": [
			{
				"name": "duration",
				"value": "1",
				"type": "str"
			}
		],
		"x": 430,
		"y": 200,
		"wires": [
			[
				"45db1bd1.45c014",
				"6c737ffa.97f85"
			]
		]
	},
	{
		"id": "6c737ffa.97f85",
		"type": "subflow:f0ba3eb7.b7d31",
		"z": "17538a9c.f80675",
		"name": "Test 3s",
		"env": [
			{
				"name": "duration",
				"value": "3",
				"type": "str"
			}
		],
		"x": 430,
		"y": 240,
		"wires": [
			[
				"45db1bd1.45c014",
				"2d23e280.8001be"
			]
		]
	},
	{
		"id": "2d23e280.8001be",
		"type": "subflow:f0ba3eb7.b7d31",
		"z": "17538a9c.f80675",
		"name": "Test 2s",
		"env": [
			{
				"name": "duration",
				"value": "2",
				"type": "str"
			}
		],
		"x": 430,
		"y": 280,
		"wires": [
			[
				"45db1bd1.45c014"
			]
		]
	},
	{
		"id": "bc85affb.eda",
		"type": "switch",
		"z": "17538a9c.f80675",
		"name": "",
		"property": "type",
		"propertyType": "msg",
		"rules": [
			{
				"t": "eq",
				"v": "test",
				"vt": "str"
			}
		],
		"checkall": "true",
		"repair": false,
		"outputs": 1,
		"x": 870,
		"y": 180,
		"wires": [
			[
				"103a8ff4.1c711"
			]
		]
	},
	{
		"id": "d1126e81.97c58",
		"type": "subflow:6f3db4ab.43933c",
		"z": "17538a9c.f80675",
		"name": "LaunchingForm",
		"env": [],
		"x": 80,
		"y": 100,
		"wires": [
			[
				"45a7c0b7.2b97",
				"73d25a6b.302ab4"
			]
		]
	},
	{
		"id": "7aa6622e.e884ec",
		"type": "function",
		"z": "17538a9c.f80675",
		"name": "",
		"func": "let results = global.get('results')\nif(results.length > 5) {\n    results.splie(0, 5);\n}\nmsg.payload = results\n\nreturn msg;",
		"outputs": 1,
		"noerr": 0,
		"x": 950,
		"y": 140,
		"wires": [
			[
				"646671a0.3feb7",
				"d6d85d90.59aa5"
			]
		]
	},
	{
		"id": "646671a0.3feb7",
		"type": "ui_template",
		"z": "17538a9c.f80675",
		"group": "faa3ae65.7375e",
		"name": "journal",
		"order": 2,
		"width": 0,
		"height": 0,
		"format": "<div style=\"padding-top: -5%\">\n    <style>\n    .tablo {\n        border: none;\n        border-collapse: collapse;\n        width: 100%;\n    max-width: 100%;\n    white-space: nowrap;\n    \n    text-align:left;\n    }\n        .tablo th {\n            color: #fff;\n    line-height: 1.4;\n    background-color: #503078;\n    font-size: 18px;\n    padding-left: 10px;\n    padding-top: 18px;\n    padding-bottom: 18px; \n    border:none;\n        }\n        .tablo td {\n            border:none;\n            font-size: 15px;\n    color: #808080;\n    line-height: 1.4;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    padding-left: 10px;\n        }\n        .tablo tr:nth-child(even) {\n        background: #f8f6ff;\n        }\n    </style>\n\n    <table class=\"tablo\">\n        <tr>\n            <th>Start Date</th>\n            <th>Test ID</th>\n            <th>Test Name</th>\n            <th>End Date</th>\n            <th>Results</th>\n        </tr>\n        <tr ng-repeat=\"item in msg.payload\">\n            <td>{{item.test_start}}</td>\n            <td>{{item.test_id}}</td>\n            <td>{{item.test_name}}</td>\n            <td>{{item.test_end}}</td>\n            <td>{{item.test_result}}</td>\n        </tr>\n    </table>\n</div>",
		"storeOutMessages": true,
		"fwdInMessages": true,
		"templateScope": "local",
		"x": 1090,
		"y": 140,
		"wires": [
			[]
		]
	},
	{
		"id": "d6d85d90.59aa5",
		"type": "debug",
		"z": "17538a9c.f80675",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": false,
		"tostatus": false,
		"complete": "payload",
		"targetType": "msg",
		"x": 1110,
		"y": 180,
		"wires": []
	},
	{
		"id": "73d25a6b.302ab4",
		"type": "function",
		"z": "17538a9c.f80675",
		"name": "",
		"func": "global.set('results', [])\nglobal.set('percentage', 0)\nreturn msg;",
		"outputs": 1,
		"noerr": 0,
		"x": 270,
		"y": 120,
		"wires": [
			[
				"8a7b13e1.15723"
			]
		]
	},
	{
		"id": "b9dbc932.09fd78",
		"type": "ui_group",
		"z": "17538a9c.f80675",
		"name": "Test",
		"tab": "7a511daa.37c1b4",
		"disp": true,
		"width": "6"
	},
	{
		"id": "7a511daa.37c1b4",
		"type": "ui_tab",
		"z": "17538a9c.f80675",
		"name": "Tableau",
		"icon": "dashboard"
	}
]